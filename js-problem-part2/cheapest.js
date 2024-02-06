const mobiles = [
    {name : 'Samsung', price : 20000, camera : '12mp', color : 'black'},
    {name : 'Xiaomi', price : 18000, camera : '12mp', color : 'golden'},
    {name : 'Oppo', price : 30000, camera : '12mp', color : 'blue'},
    {name : 'Iphone', price : 130000, camera : '12mp', color : 'silver'},
    {name : 'Walton', price : 10000, camera : '12mp', color : 'black'},
    {name : 'HTC', price : 22000, camera : '12mp', color : 'black'},
]

function getCheapestPhone(phones){
     let min = phones[0];
   for(const phone of phones){
     if(phone.price < min.price){
        min = phone;
     }
   }
    return min;
}

 const cheap = getCheapestPhone(mobiles);
  console.log('Cheapest phone is : ', cheap);



  // home work : find expensive phone