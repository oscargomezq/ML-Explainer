

// var density = [9.16756684e-03, 1.09450544e-02, 1.27380886e-02, 1.45461940e-02,
//  1.63688889e-02, 1.82056864e-02, 2.00560957e-02, 2.19196227e-02,
//  2.37957716e-02, 2.56840455e-02, 2.75839479e-02, 2.94949838e-02,
//  3.14166608e-02, 3.33484901e-02, 3.52899881e-02, 3.72406771e-02,
//  3.92000870e-02, 4.11677561e-02, 4.31432323e-02, 4.51260747e-02,
//  4.71158543e-02, 4.91121553e-02, 5.11145764e-02, 5.31227318e-02,
//  5.51362523e-02, 5.71547865e-02, 5.91780018e-02, 6.12055852e-02,
//  6.32372447e-02, 6.52727101e-02, 6.73117338e-02, 6.93540917e-02,
//  7.13995843e-02, 7.34480371e-02, 7.54993016e-02, 7.75532561e-02,
//  7.96098059e-02, 8.16688842e-02, 8.37304527e-02, 8.57945016e-02,
//  8.78610506e-02, 8.99301488e-02, 9.20018752e-02, 9.40763385e-02,
//  9.61536778e-02, 9.82340623e-02, 1.00317691e-01, 1.02404794e-01,
//  1.04495631e-01, 1.06590489e-01, 1.08689689e-01, 1.10793576e-01,
//  1.12902528e-01, 1.15016947e-01, 1.17137267e-01, 1.19263943e-01,
//  1.21397462e-01, 1.23538333e-01, 1.25687088e-01, 1.27844287e-01,
//  1.30010507e-01, 1.32186351e-01, 1.34372438e-01, 1.36569411e-01,
//  1.38777926e-01, 1.40998657e-01, 1.43232295e-01, 1.45479542e-01,
//  1.47741114e-01, 1.50017737e-01, 1.52310146e-01, 1.54619085e-01,
//  1.56945302e-01, 1.59289551e-01, 1.61652587e-01, 1.64035169e-01,
//  1.66438053e-01, 1.68861992e-01, 1.71307738e-01, 1.73776034e-01,
//  1.76267618e-01, 1.78783217e-01, 1.81323547e-01, 1.83889314e-01,
//  1.86481205e-01, 1.89099896e-01, 1.91746043e-01, 1.94420281e-01,
//  1.97123227e-01, 1.99855474e-01, 2.02617593e-01, 2.05410127e-01,
//  2.08233594e-01, 2.11088484e-01, 2.13975256e-01, 2.16894341e-01,
//  2.19846136e-01, 2.22831005e-01, 2.25849281e-01, 2.28901259e-01,
//  2.31987199e-01, 2.35107327e-01, 2.38261827e-01, 2.41450850e-01,
//  2.44674506e-01, 2.47932866e-01, 2.51225963e-01, 2.54553790e-01,
//  2.57916301e-01, 2.61313408e-01, 2.64744987e-01, 2.68210871e-01,
//  2.71710856e-01, 2.75244696e-01, 2.78812110e-01, 2.82412776e-01,
//  2.86046335e-01, 2.89712392e-01, 2.93410515e-01, 2.97140235e-01,
//  3.00901051e-01, 3.04692428e-01, 3.08513798e-01, 3.12364562e-01,
//  3.16244090e-01, 3.20151726e-01, 3.24086785e-01, 3.28048555e-01,
//  3.32036302e-01, 3.36049268e-01, 3.40086674e-01, 3.44147722e-01,
//  3.48231595e-01, 3.52337462e-01, 3.56464475e-01, 3.60611777e-01,
//  3.64778497e-01, 3.68963757e-01, 3.73166672e-01, 3.77386351e-01,
//  3.81621901e-01, 3.85872426e-01, 3.90137033e-01, 3.94414828e-01,
//  3.98704924e-01, 4.03006438e-01, 4.07318495e-01, 4.11640230e-01,
//  4.15970789e-01, 4.20309329e-01, 4.24655023e-01, 4.29007059e-01,
//  4.33364641e-01, 4.37726995e-01, 4.42093362e-01, 4.46463009e-01,
//  4.50835221e-01, 4.55209309e-01, 4.59584607e-01, 4.63960476e-01,
//  4.68336301e-01, 4.72711496e-01, 4.77085500e-01, 4.81457782e-01,
//  4.85827839e-01, 4.90195198e-01, 4.94559413e-01, 4.98920068e-01,
//  5.03276778e-01, 5.07629186e-01, 5.11976965e-01, 5.16319816e-01,
//  5.20657471e-01, 5.24989688e-01, 5.29316254e-01, 5.33636985e-01,
//  5.37951720e-01, 5.42260327e-01, 5.46562699e-01, 5.50858752e-01,
//  5.55148427e-01, 5.59431685e-01, 5.63708510e-01, 5.67978907e-01,
//  5.72242896e-01, 5.76500520e-01, 5.80751834e-01, 5.84996909e-01,
//  5.89235832e-01, 5.93468698e-01, 5.97695617e-01, 6.01916705e-01,
//  6.06132088e-01, 6.10341897e-01, 6.14546267e-01, 6.18745340e-01,
//  6.22939256e-01, 6.27128157e-01, 6.31312184e-01, 6.35491474e-01,
//  6.39666162e-01, 6.43836377e-01, 6.48002240e-01, 6.52163866e-01,
//  6.56321358e-01, 6.60474810e-01, 6.64624305e-01, 6.68769911e-01,
//  6.72911684e-01, 6.77049661e-01, 6.81183869e-01, 6.85314311e-01,
//  6.89440978e-01, 6.93563838e-01, 6.97682842e-01, 7.01797920e-01,
//  7.05908982e-01, 7.10015914e-01, 7.14118584e-01, 7.18216835e-01,
//  7.22310489e-01, 7.26399344e-01, 7.30483176e-01, 7.34561738e-01,
//  7.38634758e-01, 7.42701943e-01, 7.46762975e-01, 7.50817515e-01,
//  7.54865198e-01, 7.58905638e-01, 7.62938427e-01, 7.66963135e-01,
//  7.70979307e-01, 7.74986470e-01, 7.78984128e-01, 7.82971765e-01,
//  7.86948845e-01, 7.90914811e-01, 7.94869089e-01, 7.98811085e-01,
//  8.02740187e-01, 8.06655766e-01, 8.10557176e-01, 8.14443753e-01,
//  8.18314821e-01, 8.22169685e-01, 8.26007637e-01, 8.29827957e-01,
//  8.33629908e-01, 8.37412744e-01, 8.41175702e-01, 8.44918011e-01,
//  8.48638887e-01, 8.52337537e-01, 8.56013155e-01, 8.59664926e-01,
//  8.63292026e-01, 8.66893621e-01, 8.70468869e-01, 8.74016918e-01,
//  8.77536909e-01, 8.81027974e-01, 8.84489236e-01, 8.87919813e-01,
//  8.91318812e-01, 8.94685335e-01, 8.98018476e-01, 9.01317319e-01,
//  9.04580943e-01, 9.07808419e-01, 9.10998810e-01, 9.14151171e-01,
//  9.17264549e-01, 9.20337984e-01, 9.23370507e-01, 9.26361141e-01,
//  9.29308900e-01, 9.32212790e-01, 9.35071808e-01, 9.37884942e-01,
//  9.40651170e-01, 9.43369461e-01, 9.46038776e-01, 9.48658062e-01,
//  9.51226262e-01, 9.53742303e-01, 9.56205105e-01, 9.58613577e-01,
//  9.60966619e-01, 9.63263117e-01, 9.65501951e-01, 9.67681987e-01,
//  9.69802083e-01, 9.71861087e-01, 9.73857834e-01, 9.75791153e-01,
//  9.77659863e-01, 9.79462772e-01, 9.81198681e-01, 9.82866383e-01,
//  9.84464662e-01, 9.85992298e-01, 9.87448062e-01, 9.88830720e-01,
//  9.90139036e-01, 9.91371768e-01, 9.92527671e-01, 9.93605500e-01,
//  9.94604009e-01, 9.95521954e-01, 9.96358092e-01, 9.97111183e-01,
//  9.97779994e-01, 9.98363298e-01, 9.98859875e-01, 9.99268516e-01,
//  9.99588025e-01, 9.99817218e-01, 9.99954927e-01, 1.00000000e+00,
//  9.99951307e-01, 9.99807739e-01, 9.99568210e-01, 9.99231659e-01,
//  9.98797056e-01, 9.98263398e-01, 9.97629716e-01, 9.96895079e-01,
//  9.96058588e-01, 9.95119388e-01, 9.94076664e-01, 9.92929646e-01,
//  9.91677610e-01, 9.90319885e-01, 9.88855846e-01, 9.87284926e-01,
//  9.85606613e-01, 9.83820454e-01, 9.81926056e-01, 9.79923090e-01,
//  9.77811292e-01, 9.75590465e-01, 9.73260481e-01, 9.70821285e-01,
//  9.68272892e-01, 9.65615396e-01, 9.62848964e-01, 9.59973844e-01,
//  9.56990362e-01, 9.53898927e-01, 9.50700028e-01, 9.47394241e-01,
//  9.43982223e-01, 9.40464720e-01, 9.36842562e-01, 9.33116668e-01,
//  9.29288043e-01, 9.25357781e-01, 9.21327063e-01, 9.17197161e-01,
//  9.12969432e-01, 9.08645322e-01, 9.04226366e-01, 8.99714184e-01,
//  8.95110485e-01, 8.90417061e-01, 8.85635789e-01, 8.80768631e-01,
//  8.75817629e-01, 8.70784907e-01, 8.65672668e-01, 8.60483191e-01,
//  8.55218833e-01, 8.49882021e-01, 8.44475255e-01, 8.39001103e-01,
//  8.33462202e-01, 8.27861249e-01, 8.22201004e-01, 8.16484286e-01,
//  8.10713969e-01, 8.04892977e-01, 7.99024288e-01, 7.93110922e-01,
//  7.87155943e-01, 7.81162457e-01, 7.75133602e-01, 7.69072550e-01,
//  7.62982505e-01, 7.56866692e-01, 7.50728360e-01, 7.44570776e-01,
//  7.38397223e-01, 7.32210992e-01, 7.26015382e-01, 7.19813697e-01,
//  7.13609239e-01, 7.07405306e-01, 7.01205191e-01, 6.95012172e-01,
//  6.88829515e-01, 6.82660466e-01, 6.76508251e-01, 6.70376069e-01,
//  6.64267091e-01, 6.58184456e-01, 6.52131270e-01, 6.46110597e-01,
//  6.40125463e-01, 6.34178848e-01, 6.28273686e-01, 6.22412861e-01,
//  6.16599204e-01, 6.10835491e-01, 6.05124443e-01, 5.99468718e-01,
//  5.93870916e-01, 5.88333569e-01, 5.82859146e-01, 5.77450048e-01,
//  5.72108608e-01, 5.66837085e-01, 5.61637668e-01, 5.56512474e-01,
//  5.51463542e-01, 5.46492839e-01, 5.41602252e-01, 5.36793593e-01,
//  5.32068595e-01, 5.27428914e-01, 5.22876125e-01, 5.18411726e-01,
//  5.14037133e-01, 5.09753685e-01, 5.05562641e-01, 5.01465180e-01,
//  4.97462402e-01, 4.93555330e-01, 4.89744907e-01, 4.86031999e-01,
//  4.82417395e-01, 4.78901807e-01, 4.75485874e-01, 4.72170158e-01,
//  4.68955146e-01, 4.65841257e-01, 4.62828833e-01, 4.59918149e-01,
//  4.57109409e-01, 4.54402749e-01, 4.51798240e-01, 4.49295885e-01,
//  4.46895623e-01, 4.44597332e-01, 4.42400826e-01, 4.40305861e-01,
//  4.38312134e-01, 4.36419285e-01, 4.34626896e-01, 4.32934498e-01,
//  4.31341569e-01, 4.29847533e-01, 4.28451768e-01, 4.27153601e-01,
//  4.25952314e-01, 4.24847143e-01, 4.23837280e-01, 4.22921876e-01,
//  4.22100040e-01, 4.21370842e-01, 4.20733313e-01, 4.20186450e-01,
//  4.19729212e-01, 4.19360526e-01, 4.19079286e-01, 4.18884353e-01,
//  4.18774561e-01, 4.18748712e-01, 4.18805584e-01, 4.18943927e-01,
//  4.19162464e-01, 4.19459898e-01, 4.19834905e-01, 4.20286143e-01,
//  4.20812245e-01, 4.21411829e-01, 4.22083490e-01, 4.22825808e-01,
//  4.23637346e-01, 4.24516649e-01, 4.25462249e-01, 4.26472664e-01,
//  4.27546397e-01, 4.28681939e-01, 4.29877772e-01, 4.31132362e-01,
//  4.32444171e-01, 4.33811645e-01, 4.35233227e-01, 4.36707349e-01,
//  4.38232435e-01, 4.39806905e-01, 4.41429170e-01, 4.43097638e-01,
//  4.44810710e-01, 4.46566784e-01, 4.48364253e-01, 4.50201510e-01,
//  4.52076941e-01, 4.53988934e-01, 4.55935872e-01, 4.57916139e-01,
//  4.59928118e-01, 4.61970193e-01, 4.64040746e-01, 4.66138162e-01,
//  4.68260828e-01, 4.70407131e-01, 4.72575462e-01, 4.74764214e-01,
//  4.76971784e-01, 4.79196573e-01, 4.81436985e-01, 4.83691431e-01,
//  4.85958325e-01, 4.88236089e-01, 4.90523150e-01, 4.92817943e-01,
//  4.95118907e-01, 4.97424494e-01, 4.99733159e-01, 5.02043370e-01,
//  5.04353601e-01, 5.06662338e-01, 5.08968075e-01, 5.11269320e-01,
//  5.13564590e-01, 5.15852415e-01, 5.18131335e-01, 5.20399906e-01,
//  5.22656696e-01, 5.24900288e-01, 5.27129278e-01, 5.29342277e-01,
//  5.31537914e-01, 5.33714833e-01, 5.35871693e-01, 5.38007173e-01,
//  5.40119969e-01, 5.42208794e-01, 5.44272383e-01, 5.46309487e-01,
//  5.48318880e-01, 5.50299356e-01, 5.52249729e-01, 5.54168836e-01,
//  5.56055535e-01, 5.57908707e-01, 5.59727259e-01, 5.61510117e-01,
//  5.63256235e-01, 5.64964590e-01, 5.66634184e-01, 5.68264045e-01,
//  5.69853228e-01, 5.71400812e-01, 5.72905904e-01, 5.74367638e-01,
//  5.75785175e-01, 5.77157704e-01, 5.78484442e-01, 5.79764633e-01,
//  5.80997551e-01, 5.82182496e-01, 5.83318799e-01, 5.84405820e-01,
//  5.85442944e-01, 5.86429590e-01, 5.87365202e-01, 5.88249255e-01,
//  5.89081250e-01, 5.89860721e-01, 5.90587226e-01, 5.91260354e-01,
//  5.91879722e-01, 5.92444974e-01, 5.92955781e-01, 5.93411844e-01,
//  5.93812889e-01, 5.94158668e-01, 5.94448960e-01, 5.94683571e-01,
//  5.94862330e-01, 5.94985092e-01, 5.95051737e-01, 5.95062166e-01,
//  5.95016308e-01, 5.94914109e-01, 5.94755541e-01, 5.94540596e-01,
//  5.94269286e-01, 5.93941644e-01, 5.93557724e-01, 5.93117594e-01,
//  5.92621346e-01, 5.92069085e-01, 5.91460935e-01, 5.90797036e-01,
//  5.90077542e-01, 5.89302623e-01, 5.88472464e-01, 5.87587263e-01,
//  5.86647229e-01, 5.85652586e-01, 5.84603569e-01, 5.83500425e-01,
//  5.82343410e-01, 5.81132793e-01, 5.79868849e-01, 5.78551868e-01,
//  5.77182144e-01, 5.75759983e-01, 5.74285698e-01, 5.72759612e-01,
//  5.71182053e-01, 5.69553361e-01, 5.67873880e-01, 5.66143964e-01,
//  5.64363973e-01, 5.62534278e-01, 5.60655253e-01, 5.58727284e-01,
//  5.56750763e-01, 5.54726090e-01, 5.52653675e-01, 5.50533935e-01,
//  5.48367296e-01, 5.46154195e-01, 5.43895078e-01, 5.41590401e-01,
//  5.39240629e-01, 5.36846243e-01, 5.34407729e-01, 5.31925591e-01,
//  5.29400343e-01, 5.26832512e-01, 5.24222640e-01, 5.21571282e-01,
//  5.18879011e-01, 5.16146414e-01, 5.13374092e-01, 5.10562667e-01,
//  5.07712777e-01, 5.04825076e-01, 5.01900241e-01, 4.98938964e-01,
//  4.95941959e-01, 4.92909960e-01, 4.89843722e-01, 4.86744020e-01,
//  4.83611652e-01, 4.80447437e-01, 4.77252216e-01, 4.74026853e-01,
//  4.70772234e-01, 4.67489270e-01, 4.64178890e-01, 4.60842051e-01,
//  4.57479730e-01, 4.54092927e-01, 4.50682666e-01, 4.47249989e-01,
//  4.43795966e-01, 4.40321683e-01, 4.36828250e-01, 4.33316795e-01,
//  4.29788470e-01, 4.26244441e-01, 4.22685895e-01, 4.19114036e-01,
//  4.15530084e-01, 4.11935275e-01, 4.08330858e-01, 4.04718097e-01,
//  4.01098267e-01, 3.97472653e-01, 3.93842549e-01, 3.90209260e-01,
//  3.86574094e-01, 3.82938364e-01, 3.79303389e-01, 3.75670487e-01,
//  3.72040977e-01, 3.68416177e-01, 3.64797400e-01, 3.61185956e-01,
//  3.57583147e-01, 3.53990266e-01, 3.50408596e-01, 3.46839407e-01,
//  3.43283958e-01, 3.39743487e-01, 3.36219219e-01, 3.32712358e-01,
//  3.29224086e-01, 3.25755564e-01, 3.22307926e-01, 3.18882283e-01,
//  3.15479716e-01, 3.12101278e-01, 3.08747990e-01, 3.05420842e-01,
//  3.02120790e-01, 2.98848755e-01, 2.95605623e-01, 2.92392241e-01,
//  2.89209418e-01, 2.86057926e-01, 2.82938494e-01, 2.79851812e-01,
//  2.76798526e-01, 2.73779242e-01, 2.70794522e-01, 2.67844884e-01,
//  2.64930804e-01, 2.62052712e-01, 2.59210996e-01, 2.56405998e-01,
//  2.53638018e-01, 2.50907309e-01, 2.48214083e-01, 2.45558507e-01,
//  2.42940706e-01, 2.40360762e-01, 2.37818715e-01, 2.35314565e-01,
//  2.32848270e-01, 2.30419750e-01, 2.28028885e-01, 2.25675518e-01,
//  2.23359456e-01, 2.21080470e-01, 2.18838298e-01, 2.16632642e-01,
//  2.14463177e-01, 2.12329544e-01, 2.10231357e-01, 2.08168201e-01,
//  2.06139638e-01, 2.04145202e-01, 2.02184407e-01, 2.00256743e-01,
//  1.98361682e-01, 1.96498677e-01, 1.94667165e-01, 1.92866566e-01,
//  1.91096287e-01, 1.89355723e-01, 1.87644260e-01, 1.85961270e-01,
//  1.84306122e-01, 1.82678176e-01, 1.81076787e-01, 1.79501308e-01,
//  1.77951087e-01, 1.76425472e-01, 1.74923812e-01, 1.73445454e-01,
//  1.71989751e-01, 1.70556056e-01, 1.69143727e-01, 1.67752128e-01,
//  1.66380628e-01, 1.65028601e-01, 1.63695431e-01, 1.62380508e-01,
//  1.61083231e-01, 1.59803008e-01, 1.58539256e-01, 1.57291402e-01,
//  1.56058883e-01, 1.54841146e-01, 1.53637649e-01, 1.52447859e-01,
//  1.51271256e-01, 1.50107328e-01, 1.48955576e-01, 1.47815510e-01,
//  1.46686649e-01, 1.45568526e-01, 1.44460680e-01, 1.43362661e-01,
//  1.42274030e-01, 1.41194354e-01, 1.40123211e-01, 1.39060186e-01,
//  1.38004872e-01, 1.36956870e-01, 1.35915787e-01, 1.34881238e-01,
//  1.33852842e-01, 1.32830227e-01, 1.31813023e-01, 1.30800865e-01,
//  1.29793396e-01, 1.28790258e-01, 1.27791100e-01, 1.26795574e-01,
//  1.25803334e-01, 1.24814036e-01, 1.23827339e-01, 1.22842905e-01,
//  1.21860397e-01, 1.20879479e-01, 1.19899817e-01, 1.18921079e-01,
//  1.17942934e-01, 1.16965051e-01, 1.15987103e-01, 1.15008762e-01,
//  1.14029702e-01, 1.13049599e-01, 1.12068132e-01, 1.11084979e-01,
//  1.10099825e-01, 1.09112353e-01, 1.08122252e-01, 1.07129214e-01,
//  1.06132935e-01, 1.05133114e-01, 1.04129458e-01, 1.03121677e-01,
//  1.02109489e-01, 1.01092617e-01, 1.00070793e-01, 9.90437581e-02,
//  9.80112601e-02, 9.69730578e-02, 9.59289204e-02, 9.48786282e-02,
//  9.38219737e-02, 9.27587619e-02, 9.16888118e-02, 9.06119567e-02,
//  8.95280449e-02, 8.84369410e-02, 8.73385263e-02, 8.62326996e-02,
//  8.51193782e-02, 8.39984984e-02, 8.28700160e-02, 8.17339077e-02,
//  8.05901709e-02, 7.94388251e-02, 7.82799119e-02, 7.71134959e-02,
//  7.59396649e-02, 7.47585308e-02, 7.35702295e-02, 7.23749218e-02,
//  7.11727932e-02, 6.99640545e-02, 6.87489421e-02, 6.75277176e-02,
//  6.63006684e-02, 6.50681078e-02, 6.38303744e-02, 6.25878324e-02,
//  6.13408715e-02, 6.00899065e-02, 5.88353769e-02, 5.75777469e-02,
//  5.63175045e-02, 5.50551615e-02, 5.37912525e-02, 5.25263346e-02,
//  5.12609866e-02, 4.99958081e-02, 4.87314188e-02, 4.74684579e-02,
//  4.62075825e-02, 4.49494673e-02, 4.36948033e-02, 4.24442962e-02,
//  4.11986662e-02, 3.99586459e-02, 3.87249796e-02, 3.74984218e-02,
//  3.62797358e-02, 3.50696923e-02, 3.38690682e-02, 3.26786449e-02,
//  3.14992070e-02, 3.03315406e-02, 2.91764320e-02, 2.80346658e-02,
//  2.69070236e-02, 2.57942824e-02, 2.46972129e-02, 2.36165780e-02,
//  2.25531309e-02, 2.15076140e-02, 2.04807569e-02, 1.94732748e-02,
//  1.84858673e-02, 1.75192164e-02, 1.65739851e-02, 1.56508161e-02,
//  1.47503300e-02, 1.38731240e-02, 1.30197704e-02, 1.21908152e-02,
//  1.13867770e-02, 1.06081451e-02, 9.85537895e-03, 9.12890652e-03,
//  8.42912322e-03, 7.75639081e-03, 7.11103638e-03, 6.49335138e-03,
//  5.90359065e-03, 5.34197166e-03, 4.80867364e-03, 4.30383695e-03,
//  3.82756240e-03, 3.37991072e-03, 2.96090206e-03, 2.57051559e-03,
//  2.20868919e-03, 1.87531920e-03, 1.57026024e-03, 1.29332515e-03,
//  1.04428502e-03, 8.22869225e-04, 6.28765620e-04, 4.61620809e-04,
//  3.21040467e-04, 2.06589770e-04, 1.17793896e-04, 5.41386181e-05,
//  1.50709708e-05, 0.00000000e+00, 8.29759208e-06, 3.92993805e-05,
//  9.23057284e-05, 1.66582785e-04, 2.61363617e-04, 3.75849405e-04,
//  5.09210713e-04, 6.60588821e-04, 8.29097123e-04, 1.01382258e-03,
//  1.21382723e-03, 1.42814976e-03, 1.65580713e-03, 1.89579623e-03,
//  2.14709559e-03, 2.40866712e-03, 2.67945793e-03, 2.95840211e-03,
//  3.24442262e-03, 3.53643311e-03, 3.83333987e-03, 4.13404372e-03,
//  4.43744193e-03, 4.74243015e-03, 5.04790438e-03, 5.35276286e-03,
//  5.65590805e-03, 5.95624854e-03, 6.25270094e-03, 6.54419182e-03,
//  6.82965957e-03, 7.10805622e-03, 7.37834931e-03, 7.63952365e-03,
//  7.89058309e-03, 8.13055220e-03, 8.35847796e-03, 8.57343139e-03,
//  8.77450909e-03, 8.96083474e-03, 9.13156059e-03, 9.28586881e-03,
//  9.42297287e-03, 9.54211871e-03, 9.64258600e-03, 9.72368925e-03,
//  9.78477879e-03, 9.82524179e-03, 9.84450313e-03, 9.84202619e-03,
//  9.81731357e-03, 9.76990774e-03, 9.69939158e-03, 9.60538886e-03,
//  9.48756460e-03, 9.34562540e-03, 9.17931959e-03, 8.98843744e-03,0]

var aFeature = {
	name: "Risk Estimate",
	range:[0,10],
	den: density,
	current: [3,9] // init specific values
}


// var aFeature = [oneFeature, oneFeature,oneFeature, oneFeature]

function feature_selector(place, aFeature) {

	var section_h = 50,
		section_w = 150,
		section_sep = 10;

	var fineness = aFeature.den.length;

    var good_col = "#d95f02",
        bad_col = "#1b9e77";

    var separator = 0.015;

    // --- Slider Parameters --- 

    var slide_w = 5,
    	slide_h = 20,
    	slide_curv = 1,
    	slide_col = "#666666",
    	fill_col = "#7570b3"
    	fill_light = "#dcdef2";



    
    // --- Establishing margins and canvas bounds --- 
    var margin = {
            top: 10, 
            right: 10, 
            bottom: 10, 
            left: 10
        },

        width = 190 - margin.right - margin.left,
        height = 80 - margin.top - margin.bottom;


    // --- Scales for Entire SVG --- 
    var yScale = d3.scaleLinear()
            .domain([0, height])
            .rangeRound([height, 0]);


    // --- Scales for Section SVG --- 
	var xDenScale = d3.scaleLinear()
	    .domain([0, fineness-1])
	    .rangeRound([0,section_w]);

	var yDenScale = d3.scaleLinear()
	    .domain([0, 1])
	    .rangeRound([section_h/3,0]);


    var svg = d3.select(place)
            .append("svg")
            .attr("width",width + margin.right + margin.left)
            .attr("height",height + margin.top + margin.bottom)
            .attr("class", "main-svg")
            .append("g")
                 .attr("transform","translate(" + margin.left + ',' + margin.top +')');


    // -- Density Line Functions -- 
    var line = d3.line()
            .y(function(d) {return yDenScale(d);})
            .x(function(d,i) {return xDenScale(i);});


    // -- Drawing background rectangles -- 
    svg.append("g")
        .append("rect")
        .attr("class","bg")
        .attr('x',0)
        .attr('y',0)
        .attr("height",height)
        .attr("width",width)
        .attr("fill",'none')
        .attr("stroke-width",2)
        .attr("stroke","None");

	    

/* =================================================
   ====================== Main =====================
   =================================================*/

    var x_shift = 0,
    	y_shift = section_h+section_sep;

    // var start = aFeature.range[0],
		 	// end = aFeature.range[1],
		 	// full_range = end-start,
		 	// m1 = 0,   // Ranges
		 	// m2 = 100,


	var start = aFeature.range[0],
	 	end = aFeature.range[1],
	 	full_range = end-start,
	 	init_start = aFeature.current[0],
	 	init_end = aFeature.current[1],
	 	m1 = Math.round(100*init_start/full_range),   // Percentages for density
	 	m2 = Math.round(100*init_end/full_range)
	 	out_min = init_start,
	 	out_max = init_end;


	var start_arr = aFeature.den.slice();

    // -- Section Boundary -- 
    svg.append("g")
        .append("rect")
        .attr("class","bg")
        .attr('x',0)
        .attr('y',0)
        .attr("height",section_h)
        .attr("width",section_w+20)
        .attr("fill",'none')
        .attr("stroke-width",2)
        .attr("stroke","None");

    // -- Center the Density -- 
    svg = svg.append("g").attr("transform","translate(" + 5 + ',' + (section_h/2-section_h/6) +')');

    // // -- Drawing Density -- 
    // var cur_arr = start_arr.splice(100,100)
    // cur_arr.push(0);
    
	svg.append('g').append('path').datum(start_arr)
	.attr('id',"curve")
    .attr('d',line)
    .attr('stroke',fill_col)
    .attr('fill',fill_col)
    .attr('opacity',1);


    // svg.append('g').append('path').datum(cur_arr)
    //     .attr('d',line)
    //     .attr('stroke',"blue")
    //     .attr('fill',"black")
    //     .attr('opacity',0.2);

    // -- Adding Ranges -- 
    svg.append("g")
   		.append('text')
    	.text(start)
    	.attr("x", 0)
   	 	.attr("y", yDenScale(0)+12)
    	.attr("font-family",'"Open Sans", sans-serif')
    	.attr("font-size", '11px')
    	.attr("font-weight", 'bold')
    	.attr("fill",'black')
    	.attr("text-anchor",'left');

   	svg.append("g")
   		.append('text')
    	.text(end)
    	.attr("x", section_w-8)
   	 	.attr("y", yDenScale(0)+12)
    	.attr("font-family",'"Open Sans", sans-serif')
    	.attr("font-size", '11px')
    	.attr("font-weight", 'bold')
    	.attr("fill",'black')
    	.attr("text-anchor",'left');



	// -- Define Drag Functionality -- 

	x_div = 6,
	slider_col = '#b3c1d6'
	min_x = 0,
	max_x = section_w - slide_w;


	var drag = d3.drag()
	    .on('drag', function() {
	        var event, new_x, new_y;

	        event = d3.event;  
	        new_x = event.x + event.dx;  // D3 itself records the changes
	        new_y = event.y + event.dy;

	        if (new_x > max_x){ x = max_x; }
	        else if (new_x < min_x) {x = min_x;}
	        else {x = new_x;}

	        var selection = d3.select(this)
	        selection.attr('x',x);
	        
	    	var id = selection.attr("id");


	    	if (id == "slide1"){
	    		var percentage = x/section_w;
	    		// m1 = Math.round(percentage*fineness);
	    		m1 = Math.round(percentage*100);
	    		density_curve(m1,m2);

	    		out_min = start + Math.round(percentage*full_range); // OSCAR: min val output
	    	}

	    	else if (id == "slide2"){
	    		var percentage = x/section_w;
	    		// m2 = Math.round(percentage*fineness);
	    		m2 = Math.round(percentage*100);
	    		density_curve(m1,m2);

	    		out_max = start + Math.round(percentage*full_range); // OSCAR: max val output
	    	}

	    	// selection.attr("fill", "blue")
	    });


	// -- Slider section --
    svg.append("g")
        .append("rect")
        .attr("class","slider")
        .attr("id", "slide1")
        .attr('x',xDenScale(Math.round(fineness*init_start/full_range)))
        .attr('y',0)
        .attr("height",slide_h)
        .attr("width",slide_w)
        .attr("rx",slide_curv)
        .attr("ry",slide_curv)
        .attr("fill",slide_col)
        .attr("stroke-width",1)
        .attr("stroke","black")
        .attr("stroke-opacity",0.8)
		.call(drag);


    svg.append("g")
        .append("rect")
        .attr("class","slider")
        .attr("id", "slide2")
        .attr('x',xDenScale(Math.round(fineness*init_end/full_range))-slide_w)
        .attr('y',0)
        .attr("height",slide_h)
        .attr("width",slide_w)
        .attr("rx",slide_curv)
        .attr("ry",slide_curv)
        .attr("fill",slide_col)
        .attr("stroke-width",1)
        .attr("stroke","black")
        .attr("stroke-opacity",0.8)
		.call(drag);


    // svg = svg.append("g").attr("transform","translate(" + x_shift + ',' + y_shift +')');
    
	var grad = svg.append("defs")
			.append("linearGradient")
			.attr("id", "grad");



	// -- Custom init -- 		
	density_curve(m1,m2);


    function density_curve(per1,per2) {

    	grad.remove();

		grad = svg.append("defs")
			.append("linearGradient")
			.attr("id", "grad");
		
		grad.append("stop").attr("offset", "0%").attr("stop-color", fill_light);
		grad.append("stop").attr("offset", (per1-1).toString()+"%").attr("stop-color", fill_light);
		grad.append("stop").attr("offset", (per1).toString()+"%").attr("stop-color", fill_col);
		grad.append("stop").attr("offset", (per2).toString()+"%").attr("stop-color", fill_col);
		grad.append("stop").attr("offset", (per2+1).toString()+"%").attr("stop-color", fill_light);
		grad.append("stop").attr("offset", "100%").attr("stop-color", fill_light);
	   

    	// svg.append('g').append('path').datum(start_arr)
    	// 	.attr('id',"curve")
	    //     .attr('d',line)
	    //     .attr('stroke',"blue")
	    //     .attr('fill',"url(#grad)")
	    //     .attr('opacity',1);


	   	var sel = d3.select("#curve");
	   	sel.attr('fill',"url(#grad)");


	}


	// -- Add the feature name --
    svg = svg.append("g").attr("transform","translate(" + 0 + ',' + 45 +')');

	svg.append("g")
		.append('text')
		.text("Feature: " + aFeature.name)
		.attr("x", 0)
		.attr("y", 0)
		.attr("font-family",'"Open Sans", sans-serif')
		.attr("font-size", '12px')
		.attr("fill",'black')
		.attr("text-anchor",'left'); 




 
    
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

  

    // // -- Drawing and styling the AXIS
    
    // var xAxis = d3.axisBottom().scale(xScale);

    // svg.append("g")
    //     .attr("class", "axis")
    //     .attr("transform", "translate(0," + height + ")")
    //     .call(xAxis)
    //     .selectAll("text")  
    //         .style("fill","black")
    //         .style("text-anchor", "end")
    //         .attr("dy", "-0.5em")
    //         .attr("dx", "-0.5em")
    //         .attr("transform","rotate(-70)")
    //         .attr("class", "feature-name");


    // var den_svg = svg;
    // for (ind=0 ; ind < rightList.length; ind++) {
    //     right = rightList[ind]
    //     left = leftList[ind]

    //     med_right = rightMid[ind]
    //     med_left = leftMid[ind]


    //     // -- Drawing left density distribution --
    //     den_svg.append('g').append('path').datum(left)
    //     .attr('d',left_line)
    //     .attr('stroke',den_colour)
    //     .attr('fill',den_colour)
    //     .attr('opacity',0.2);


    //      // -- Centre the image -- 
    //     den_svg = den_svg.append("g")
    //             .attr("transform","translate(" + (xDenScaleRight(1)) + ',0)'); 



    //     // -- Drawing median lines -- 
    //     var tick_size = 4;
       
    //     den_svg.append("g")
    //         .append("line")
    //         .attr("class","split_lines")
    //         .attr("x1",0)
    //         .attr('y1',function(d){return yScale(med_right);})
    //         .attr("y2",function(d){return yScale(med_right);})
    //         .attr("x2",tick_size)
    //         .style("stroke",den_colour)
    //         .style("stroke-width",3);

    //     den_svg.append("g")
    //         .append("line")
    //         .attr("class","split_lines")
    //         .attr("x1",0)
    //         .attr('y1',function(d){return yScale(med_left);})
    //         .attr("y2",function(d){return yScale(med_left);})
    //         .attr("x2",-tick_size)
    //         .style("stroke",den_colour)
    //         .style("stroke-width",3);


    //     // -- Drawing right density distribution --
    //     den_svg.append('path').datum(right)
    //     .attr('d',right_line)
    //     .attr('stroke', den_colour)
    //     .attr('fill',den_colour)
    //     .attr('opacity',0.4);
  

    //     // -- Centre the image -- 
    //     den_svg = den_svg.append("g")
    //             .attr("transform","translate(" + (xDenScaleRight(1)) + ',0)');
    // }

    // function draw_triangle(data) {
    //     var full_string = "";

    //     for(n=0 ; n < data.length; n++){
    //         var d = data[n];

    //         x1 = xScale(d.name) + xScale.bandwidth()*0.30
    //         x2 = xScale(d.name) + xScale.bandwidth()*0.70
    //         x3 = xScale(d.name) + xScale.bandwidth()*0.5
    //         y1 = yScale(d.scl_val)
    //         y2 = yScale(d.scl_change)


    //         one_tri = "M"+x1+","+y1+"L"+x2+","+y1+"L"+x3+","+y2
    //             +"L"+x1+","+y1;


    //         full_string += one_tri
    //     }
    //     return full_string
    // }


    // svg.append('g').selectAll("path")
    // .data(allData)
    // .enter()
    // .append("path")
    // .on('mouseover',function(){
    //     d3.select(this)
    //     .attr('stroke','black')
    // })
    // .on('mouseout',function(){
    //     d3.select(this)
    //     .attr("stroke",'none')
    // })
    // .attr('d',function(d){return draw_triangle(d);})
    // .attr("fill-opacity",0.7)
    // .attr("fill",function(d){
    //     if (d[0].dec == 0) {
    //         return bad_col;}
    //     else {
    //         return good_col;}
    // })
    // .attr("stroke-width", 1.5);




    // // -- Drawing median -- 
    // svg.append("g").selectAll("line")
    //     .data(testData)
    //     .enter()
    //     .append("line")
    //     .attr("class","split_lines")
    //     .attr("x1",function(d) {return xScale(d.name)+xScale.bandwidth();})
    //     .attr('y',0)
    //     .attr("y2",function(d){return yScale(0-padding_bottom)})
    //     .attr("x2",function(d) {return xScale(d.name)+xScale.bandwidth();})
    //     .style("stroke",function(d,i){
    //         if (i == testData.length-1) {return "None";}
    //         else {return "#A9A9A9";}})
    //     .style("stroke-width",0.7);

}


feature_selector(aFeature, "body")