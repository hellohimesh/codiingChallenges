function catAndMouse(x, y, z) {
 let catADist =  Math.abs(x - z);
 let catBDist = Math.abs(y -z);

 console.log(catBDist,catADist);

}

catAndMouse(1,2,3);