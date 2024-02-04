/**
 * SIMPLE LOGIC
 * year will be a leap year if the year is divisible by 4
 */

 function leapYear(year){
      if(year % 4 === 0){
        // console.log('This year is LeapYear')
         return true;
      }
       else{
        // console.log("This year is not leapYear.")
         return false;
       }
 }
  const year = leapYear(2029);
//   const year = leapYear(new Date().getFullYear());
//    console.log(year);


/**
 * 1. those year that is not divisible by 100, if the year is divisible by 4 : then it will be a leap year
 */

function isLeapYear(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
     else if( //year % 100 === 0 && 
     year % 400 === 0){
        return true;
     }
      else{
        return false;
      }
}

 const isLeap = isLeapYear(2100);
 const isLeap2 = isLeapYear(2400);
 const isLeap3 = isLeapYear(1900);
 const isLeap4 = isLeapYear(2052);
  console.log(isLeap, isLeap2, isLeap3, isLeap4);


