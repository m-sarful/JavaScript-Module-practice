// 12inch 1feet

function inchToHeight(inch){
    const feet = inch / 12;
      return feet;
}

 function inchToHeight2(inch){
    const fractionFeet = inch / 12;
    const feetNumber = parseInt(fractionFeet);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch ';
     return result;
 }


 const shuvoHeight = inchToHeight(64);
 const shuvoHeight2 = inchToHeight2(64);
//   console.log(shuvoHeight2);
//  console.log(shuvoHeight);


 function mileToKilo(mile){
    const kilo = mile * 1.60934;
    return kilo;

 }

//   const result = mileToKilo(5);
//   console.log(result);

for (var i = 0; i < 5; i++) {
   setTimeout(function () {
    console.log(i);
  }, 100);
}   