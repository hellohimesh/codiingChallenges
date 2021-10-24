// console.log('hello');
// var grades = [
//     73,
//     67,
//     38,
//     33];
//     var arr=[];
//  grades.forEach((grade)=>{
//      if(grade > 37){
//         if(grade%5 == 3 ){
//             arr.push(grade+2);
//            }
//          else  if(grade%5 == 4){
//             arr.push(grade+1);
//             console.log(grade+1);
//            }
//            else {
//                arr.push(grade);
//            }
//         }
//         else if (grade <38){
//             arr.push(grade);
//         }
                  
//     }
//  );

    // console.log('new array',arr);
// function gradeFun(a)
// {
//     console.log(a);
// }
//[3, 5, 4,3]
function taskOfPairing(freq) {
 let remainingOdd = 0;
 let remainingEven = 0;
 let remaining = 0;
 let pairs= 0;
 let currentElement =0;
for(let i = 0; i< freq.length;i++){
    
     currentElement = freq[i];
     
    if(remainingEven > 0 && i % 2 ==1 && currentElement > 0){
        
        currentElement = currentElement - 1;
        pairs = pairs +1;
        remainingEven = 0;   
        
    }
    if(remainingOdd > 0 && i % 2 == 0 && currentElement > 0){
        
        currentElement = currentElement - 1;
        pairs = pairs +1;
        
        remainingOdd = 0;   
    }
    pairs = pairs + parseInt(currentElement/2);
    if(i%2 == 0){
        remainingEven =  currentElement % 2;
        

    }
    if(i%2 == 1){
        remainingOdd =  currentElement % 2;
        

    }   
    remaining = remainingOdd + remainingEven;
    if(remaining == 2){ 
        
        pairs= pairs +1;  
        remaining = 0;
        remainingOdd=0;
        remainingEven=0
    }
}
    //pairs = pairs + parseInt(remaining/2);
    console.log(pairs);
    return pairs;


}



taskOfPairing([
    1,
    2,
    1]);