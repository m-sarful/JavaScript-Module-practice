/**
 *  for a given string tell me whether it has even number of characters or not
 */

 function evenString(str){
     const size = str.length;
    console.log(str, size);
     if(size % 2 === 0){
        console.log('even number');
         return true;
     }
      else{
        console.log('odd number');
         return false;
      }
 }

//   evenString('Dhaka');
//   evenString('Tangail');
//   evenString('Kalihati');
//   evenString('RAmpur');



//  function doubleOrTipple(number, doDouble){
//     if(doDouble === true){
//         const result = number * 2;
//          return result;
//     }
//      else{
//         const result = number * 3;
//          return result;
//      }
//  }

//   console.log(doubleOrTipple(5, true));
//   console.log(doubleOrTipple(5, false));


function numberOfElements(numbers){
    const len = numbers.length;
     return len;
}
 const array = numberOfElements([2, 4, 6, 1, 9, 8, 3]);
  console.log(array);
  

//  function getAge(person){
//     const age = person.age;
//      return age;
//  }


