/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */

function oddAverage(numbers){
    //  sum = 0;
     const odds = [];
    for(const number of numbers){
       if(number % 2 === 1){
    //    sum += number;
     odds.push(number);
       }
    }
     // odds is the array that contains only the odd numbers
    // console.log(odds);
    //  return sum;
     let sum = 0;
     for(const number of odds){
        sum += number;
     }
      const len = odds.length;
       const result = sum / len;
    //   console.log(result);
     return result;
}

 const numbers = [12, 13, 15, 16, 17, 19, 23];
  const avg = oddAverage(numbers);
   console.log('Average of the numbers is : ', avg);