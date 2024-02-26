const products = [
    {id: 1, name: 'acer', price: 12000},
    {id: 2, name: 'samsung', price: 15000},
    {id: 3, name: 'lg', price: 14400},
    {id: 4, name: 'hp', price: 14800}
];

const names = products.map(product => product.name);
// console.log(names);

const prices = products.map(product => product.price);
// console.log(prices);
for(const price of prices){
   if(price > 14500){
    // console.log(price);
   }
}

const affordable = products.find(p => p.price > 14000);
console.log(affordable);