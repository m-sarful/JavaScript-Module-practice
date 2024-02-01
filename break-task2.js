/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/




let i = 1;
let sum = 0;
while(i <= Infinity){
    if(i > 100){
        break;
    }
    sum = sum + i;
    console.log(sum);
    i++;
}


// let sum = 0;
//  for(let i = 1; i <= 100; i++){
//     sum = sum + i;
//     console.log(sum);
//  }