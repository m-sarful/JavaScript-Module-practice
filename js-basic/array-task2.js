/**
 * Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 78, 46]
 */

// const numbers = [12, 98, 5, 41, 23, 78, 46];
//  const number = [];
//  for(let i = 0; i <= numbers.length; i++){
//      if(number % 2 === 0){
//        number.push(numbers);
      
//      }
//     //  console.log(i);
//  }
//  console.log(number);


const numbers = [12, 98, 5, 41, 23, 78, 46];
 const numb = [];
 for(const num of numbers){
    if(num % 2 === 0){
        // console.log(num);
         numb.push(num);
    }
 }
 console.log(numb);