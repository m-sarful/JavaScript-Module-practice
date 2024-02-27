 const user = {id: 1, name: 'Sarful Islam', job: 'student'};
 const stringified = JSON.stringify(user);
//  console.log(stringified);
 
//  console.log(user);


const shop = {
    owner: 'Sarful',
    address: {
        street: 'Rampur-SouthPara',
        city: 'Rampur',
        country: 'BD',
    },
    products: ['Laptop', 'Mobile', 'Monitor', 'Box'],
    revenue: 34000,
    isOpen: true,
    isNew: false
}
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
console.log(shop);

const shopObj = JSON.parse(shopJSON);
console.log(shopObj);