

// function draw_comparison(leftData,leftDen,rightDen,leftMed,rightMed,leftMean,rightMean,place, median_toggle, density_toggle, button3) {



function draw_comparison(leftData,rightData,leftDen,rightDen,leftMed,rightMed,place, median_toggle, density_toggle, point_toggle) {

    var features = leftData[0].length;   // Assumes left/right match

    var add_density = true;

    testData = leftData[0]

    var good_col = "#d95f02",
        bad_col = "#1b9e77";

    var the_colour = "";
    var opp_colour = "";
    
    var separator = 0.015,
        half_col = 27   // Single section of comparison
        col_width = half_col*2;
    
    if (testData[0].dec == 0) {
        opp_colour = good_col;
        the_colour = bad_col;}
    else {
        opp_colour = bad_col
        the_colour = good_col;}
    

    // -- Establishing margins and canvas bounds -- 
    var margin = {
            top: 20, 
            right: 20, 
            bottom: 170, 
            left: 20
        },
        width = col_width*features - margin.right - margin.left,
        // width = 800 - margin.right - margin.left,
        height = 400 - margin.top - margin.bottom;

    var padding = 10;
    
    // -- Adding scales based on canvas -- 
    var xScale = d3.scaleBand()
            .domain(testData.map(function(d){return d.name;}))
            .rangeRound([0, width])
            .paddingInner(separator),
        yScaleFull = d3.scaleLinear()
            .domain([0, 1])
            .rangeRound([height, 0]),
        yScale = d3.scaleLinear()
            .domain([0, 1])
            .rangeRound([height, 0]);


    var triangle_w = (xScale.bandwidth()/2)*0.6; // Single Triangle Width


    var svg = d3.select(place)
                .append("svg")
                .attr("width",width + margin.right + margin.left)
                .attr("height",height + margin.top + margin.bottom)
                .attr("class", "main-svg")
                .append("g")
                     .attr("transform","translate(" + margin.left + ',' + margin.top +')');


    // -- Density scales --
    var buffer = 2,
        denWidth = (xScale.bandwidth()),
        den_colour = "#7570b3";

    var yDenScale = d3.scaleLinear()
        .domain([0, rightDen[0].data.length-1])
        .rangeRound([height,0]);

    xDenScaleLeft = d3.scaleLinear()
        .domain([0, 1])
        .rangeRound([(denWidth/2),0]);
    
    xDenScaleRight = d3.scaleLinear()
        .domain([0, 1])
        .rangeRound([0, (denWidth/2)]);

    // -- Density Line Functions -- 
    var left_line = d3.line()
            .x(function(d) {return xDenScaleLeft(d);})
            .y(function(d,i) {return yDenScale(i);});

    var right_line = d3.line()
            .x(function(d) {return xDenScaleRight(d);})
            .y(function(d,i) {return yDenScale(i);});


    // -- Drawing background rectangles -- 
    svg.selectAll("rect")
        .data(testData)
        .enter()
        .append("rect")
        .attr("class","bg_bar")
        .attr('x',function(d) {return xScale(d.name);})
        .attr('y',-padding)
        .attr("height",function(d){return yScale(0)+2*padding})
        .attr("width",xScale.bandwidth())
        .attr("fill", "None")
        .attr("stroke", "black")
        .style("opacity",0.5);
    
    
    // -- Drawing dividing lines -- 
    svg.append("g").selectAll("line")
        .data(testData)
        .enter()
        .append("line")
        .attr("class","split_lines")
        .attr("x1",function(d) {return xScale(d.name)+xScale.bandwidth()*0.5;})
        .attr('y1',-padding)
        .attr("y2",function(d){return yScale(0)+padding})
        .attr("x2",function(d) {return xScale(d.name)+xScale.bandwidth()*0.5;})
        .style("stroke",den_colour)
        .style("stroke-width",1)
        .style("opacity",0);
    
    // -- Drawing surrounding box -- 
        
    // svg.append("rect")
    //     .attr("class","border")
    //     .attr('x',xScale(testData[0].name))
    //     .attr('y',0)
    //     .attr("height",function(d){return yScale(0-padding_bottom)})
    //     .attr("width",(xScale.bandwidth()+separator)*testData.length)
    //     .attr("fill","None")
    //     .attr("stroke","#A9A9A9")
    //     .attr("stroke-width",1);

  

    // -- Drawing and styling the AXIS
    
    var xAxis = d3.axisBottom().scale(xScale);

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + (height+padding) + ")")
        .call(xAxis)
        .selectAll("text")  
            .style("fill","black")
            .style("text-anchor", "end")
            .attr("dy", "-0.5em")
            .attr("dx", "-0.5em")
            .attr("transform","rotate(-70)")
            .attr("class", "feature-name");


    // var den_svg = svg.append("g")
    //             .attr("transform","translate(" + (9) + ',0)');


    // ======= Density Distribution ======= 

    for (ind=0 ; ind < rightDen.length; ind++) {

        var den_svg = svg.append("g"),
            
            right = rightDen[ind].data,
            left = leftDen[ind].data,

            right_name = rightDen[ind].name,
            left_name = leftDen[ind].name;
       

        // -- Allign SVG canvas -- 
        den_svg = den_svg.append("g")
                .attr("transform","translate(" + (xScale(right_name)) + ',0)'); 


        // -- Drawing left density distribution --
        den_svg.append('g').append('path').datum(left)
        .attr('d',left_line)
        .attr('stroke',den_colour)
        .attr('fill',den_colour)
        .attr('opacity',function(d){
            if (density_toggle){
                return 0.15;
            }
            else{
                return 0;
            }});


         // -- Centre the image -- 
        den_svg = den_svg.append("g")
                .attr("transform","translate(" + (xDenScaleRight(1)) + ',0)'); 

        // ==== Drawing median lines ====

        if (median_toggle) {
            var med_right = rightMed[ind],
            med_left = leftMed[ind];
        
            var tick_size = xDenScaleRight(1),
                tick_width = 2,
                tick_sep = 4;
           
            den_svg.append("g")
                .append("line")
                .attr("class","split_lines")
                .attr("x1",tick_sep)
                .attr('y1',function(d){return yScale(med_right);})
                .attr("y2",function(d){return yScale(med_right);})
                .attr("x2",(tick_size-tick_sep))
                .style("stroke",den_colour)
                .style("stroke-opacity",0.3*3)
                .style("stroke-width",tick_width);

            den_svg.append("g")
                .append("line")
                .attr("class","split_lines")
                .attr("x1",-tick_sep)
                .attr('y1',function(d){return yScale(med_left);})
                .attr("y2",function(d){return yScale(med_left);})
                .attr("x2",-(tick_size-tick_sep))
                .style("stroke",den_colour)
                .style("stroke-width",tick_width)
                .style("stroke-opacity",0.15*3);
        }


        // -- Drawing right density distribution --
        den_svg.append('path').datum(right)
        .attr('d',right_line)
        .attr('stroke', den_colour)
        .attr('fill',den_colour)
        .attr('opacity',function(d){
            if (density_toggle){
                return 0.3;
            }
            else{
                return 0;
            }});
    }

    function draw_triangle(data) {
        var full_string = "";

        for(n=0 ; n < data.length; n++){

            var d = data[n];

            // if ((d.scl_val != d.scl_change) || (!button3 && !density_toggle)){
            if (d.scl_val != d.scl_change) {
                x1 = xScale(d.name) + xScale.bandwidth()*0.5 - triangle_w/2
                x2 = xScale(d.name) + xScale.bandwidth()*0.5 + triangle_w/2
                x3 = xScale(d.name) + xScale.bandwidth()*0.5
                y1 = yScale(d.scl_val)
                y2 = yScale(d.scl_change)


                one_tri = "M"+x1+","+y1+"L"+x2+","+y1+"L"+x3+","+y2
                    +"L"+x1+","+y1;

                full_string += one_tri;
            }

        }
        return full_string
    }




    // Deselect other triangles when clicking instead of border. 
    // Remove levels when hovering over 
    // Parallel coordinates test
    // Add data sheet in the bottom.
    // Highlight concurrently 

    // OSCAR: remember that linking now needs to account for which of the two is shown


    // -- Centre the image (LEFT) -- 
    svg = svg.append("g")
        .attr("transform","translate(" + (-xDenScaleRight(1)/2) + ',0)'); 

    svg.append('g').selectAll("path")
    .data(leftData)
    .enter()
    .append("path")
    .on('mouseover',function(){
        d3.selectAll(".arrows").attr("fill-opacity",0);
        // d3.select(".arrows").attr("fill","black");
        d3.select(this).attr("stroke-opacity",1).attr("fill-opacity",0.7)
    })
    .on('mouseout',function(){
        d3.selectAll(".arrows").attr("fill-opacity",0.7);
        d3.select(this).attr("stroke-opacity",0)
    })
    .on('click',function(d){
        console.log(d[0].sample);
        var reloc = window.location.origin + "/individual?sample=" + d[0].sample;
        window.location.href = reloc;
    })
    // .attr("data-id", function(d) {return d.orig_ft_pos; })
    .attr('d',function(d){
        return draw_triangle(d);})
    .attr("class","arrows")
    .attr("fill-opacity",0.7)
    .attr("fill",function(d){
        if (d[0].dec == 0) {
            return bad_col;}
        else {
            return good_col;}
    })
    .attr("stroke-width", 2)
    .attr("stroke",function(d){
        if (d[0].dec == 0) {
            return bad_col;}
        else {
            return good_col;}
    })
    .attr("stroke-opacity",0);




    // -- Centre the image (RIGHT) -- 
    svg = svg.append("g")
        .attr("transform","translate(" + (xDenScaleRight(1)) + ',0)'); 



    svg.append('g').selectAll("path")
    .data(rightData)
    .enter()
    .append("path")
    .on('mouseover',function(){
        d3.selectAll(".arrows").attr("fill-opacity",0);
        // d3.select(".arrows").attr("fill","black");
        d3.select(this).attr("stroke-opacity",1).attr("fill-opacity",0.7)
    })
    .on('mouseout',function(){
        d3.selectAll(".arrows").attr("fill-opacity",0.7);
        d3.select(this).attr("stroke-opacity",0)
    })
    .on('click',function(d){
        console.log(d[0].sample);
        var reloc = window.location.origin + "/individual?sample=" + d[0].sample;
        window.location.href = reloc;
    })
    // .attr("data-id", function(d) {return d.orig_ft_pos; })
    .attr('d',function(d){
        return draw_triangle(d);})
    .attr("class","arrows")
    .attr("fill-opacity",0.7)
    .attr("fill",function(d){
        if (d[0].dec == 0) {
            return bad_col;}
        else {
            return good_col;}
    })
    .attr("stroke-width", 2)
    .attr("stroke",function(d){
        if (d[0].dec == 0) {
            return bad_col;}
        else {
            return good_col;}
    })
    .attr("stroke-opacity",0);




}


// draw_aggregation_graph(leftData,leftDen,rightDen,leftMed, rightMed,'body')