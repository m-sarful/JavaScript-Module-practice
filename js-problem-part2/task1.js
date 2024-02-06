/**
 * Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */


const heights2 = [167, 190, 120, 165, 137];
 function getMax(numbers){
     let max = numbers[0];
    for(const number of numbers){
        if(number < max){
            max = number;
        }
    }
    return max;
 }

  const result = getMax(heights2);
   console.log('Lowest one is : ' ,result);