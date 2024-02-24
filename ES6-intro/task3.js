/**
 * Write an arrow function where it will do the following
 * 
 * a. Square each array element 
 * b. Calculate the sum of square elements
 * c. Return the average of the sum of the squared elements
 */

const numbers = [23, 12, 45, 32, 42, 67, 89];
let sqrSum = 0;
const elements = numbers.length;
const square = (numbers) =>{
    for(const number of numbers){
       let sqr = number * number;
      sqrSum += sqr;
    }
    const avg = sqrSum / elements;
    return avg;
    
}

const result = square(numbers);
console.log(result);