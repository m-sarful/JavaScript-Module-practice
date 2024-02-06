/**
 * Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

function oddOrEven(numbers){
 if(numbers % 2 !== 0){
    const result = numbers * 2;
     return result;
    }
     else{
        const result = numbers / 2;
        return result;
     }
    
}
 const num = oddOrEven(25);
  console.log(num);