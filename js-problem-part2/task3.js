/**
 * Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */

 const electronicsProducts = [
    {name: 'laptop', price: 35000},
    {name: 'tablet', price: 15000},
    {name: 'mobile', price: 20000}
 ]

  function calculateElectronicsBudget(products){
     let total = 0;
     for(const item of products){
       total += item.price;
     }
      return total;
  }
   const result = calculateElectronicsBudget(electronicsProducts);
    console.log('You have to pay : ', result, 'tk');