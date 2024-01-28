/**
 *  MULTILEVEL CONDITION
 */

// const price = 2000;
// if(price >= 5000){
//     const discount = price * 10/100;
//     const totalAmount = price - discount;
//     console.log(totalAmount)
// }
// else if(price > 2300){
//     const discount = price * 5/100;
//     const totalAmount = price - discount;
//     console.log(totalAmount)   
// }
// else{
//     console.log(price)
// }


const age = 9;
const price = 70;

if(age <= 10){
    console.log("you take it free")
}
 
else if(age >= 15){
    const discount = price * 0.6;
    const totalPay = price - discount;
     console.log(totalPay)
}
 else if(age >= 18){
    const discount = price *0.5;
    const totalPay = price - discount;
    console.log(totalPay)
 }
 else {
    console.log(price)
 }