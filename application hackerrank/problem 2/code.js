console.log('hello');
var grades = [
    73,
    67,
    38,
    33];
    var arr=[];
 grades.forEach((grade)=>{
     console.log(grade%5);
     if(grade > 37){
        if(grade%5 == 3 ){
            arr.push(grade+2);
            console.log(grade+2);
           }
         else  if(grade%5 == 4){
            arr.push(grade+1);
            console.log(grade+1);
           }
           else {
               arr.push(grade);
           }

        }
        else if (grade <38){
            arr.push(grade);
        }
           
           
           
    }
 );
    console.log('new array',arr);

// function gradeFun(a)
// {
//     console.log(a);
// }