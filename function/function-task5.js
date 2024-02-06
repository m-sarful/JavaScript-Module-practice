/**
 * Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
//  */

function odd_even(numbers){
     if(typeof numbers !== 'number'){
        return 'Please enter a number';
     }
   else if(numbers % 2 === 0){ 
        return 'even';
    }
    else {
        return 'odd';
    }
}


  const num = odd_even(23);
   console.log(num);