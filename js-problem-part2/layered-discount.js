/**
 * first 100 ---> 100
 *  101 to 200 ---> 90
 *  above 200 ---> 70
 */


 function layeredDiscountedTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const abovePrice = 70;

     if(quantity <= 100){
        const total = quantity * first100Price;
         return total;
     }
     else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100Total + remainingTotal;
        return total;
     }
      else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * abovePrice;
        const total = first100Total + second100Total + remainingTotal;
         return total;
      }
 }

  const total = layeredDiscountedTotal(145);
   console.log(total);