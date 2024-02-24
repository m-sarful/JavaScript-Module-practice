/**
 * Write an arrow function where it will do the following
 * 
 * a. It will take two array inputs
 * b. Combine the two arrays and assign them in a new array
 * c. Find the maximum number from the new array and return the result
 */


const arr1 = [1, 23, 45, 54, 122];
const arr2 = [34, 12, 13, 67, 190];

const maxNumber = (arr1, arr2) =>{
    const newArray = [...arr1, ...arr2];
    const max = Math.max(...newArray);
    return max;
}

const output = maxNumber(arr1, arr2);
console.log(output);