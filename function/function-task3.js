/**
 * Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 * 
 */

function make_avg(numbers){
    let sum = 0;
    let len = numbers.length;
    for(const number of numbers){
        // console.log(number);
         sum += number;
        }
        // console.log(sum);
        const avg = sum / len;
        //  console.log(avg);
        return avg;
}

const num = [23, 34, 12, 24];
const result = make_avg(num);
 console.log(result);