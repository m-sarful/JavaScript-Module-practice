/**
 * Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
 */

 function findRepeatNumbers(numbers){
     const target = 5;
     let count = 0;
     for(const number of numbers){
          if(number === target){
             count++;
          }
     }
      return count;
  }

//   const array = [5,6,11,12,98, 5];
  const result = findRepeatNumbers([5,6,11,12,98, 5]);
   console.log(result);
   
