/**
 * Objective: write a function to give me the sum of all numbers in an array
 * step - 1 : declare a function
 * step - 2 : call check whether the function is called properly
 * step - 3 : set a parameter(s)
 * step - 4 : pass the parameter(s), check parameter is passed in a proper format
 * step - 5 : do the function tasks (step by step)
 */

function sumOfNumbers(numbers){
     let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum += number;
         return sum;
    }
   
}
 const num = [23, 34, 45, 56];
 const sum = sumOfNumbers(num);
  console.log('sum of number is : ', sum);