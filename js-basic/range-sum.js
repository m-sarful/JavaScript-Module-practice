
// even numbers
// for(let i = 1; i <= 20; i += 2){
//     console.log(i);
// }


// odd numbers
// for(let i = 0; i <= 20; i += 2){
//     console.log(i);
// }

// sum of the num of 1 to 20 total odd numbers 

// let sum = 0;
// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         sum = sum + i;

//         console.log(i);
//     }
// }
// console.log(sum);

// sum of the numbers of range 1 to 20 total even numbers

let sum = 0;
for(let i = 0; i <= 20; i++){
    if(i % 2 != 0){
         sum += i;
        console.log(i);
    }
}
console.log(sum);