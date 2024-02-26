const data = [{id: 1, name: 'Sarful Islam', address: 'Rampur'}];
// console.log(data[0].address);

const products = {
    count: 12,
    device: [
        {id: 1, name: 'acer', model: 2015, price: 31000},
        {id: 2, name: 'asus', model: 2017, price: 34500},
        {id: 3, name: 'hp', model: 2019, price: 48000}
    ],
}

// console.log(products.device[1].name);
// console.log(products.device[1].price);

const user = {
    id: 211,
    name: 'Sarful Islam',
    address: {
        street:{
            first: 'Rampur',
            second: 'Rampul-SouthPara',
            third: 'Rampur-ChalarPar'
        }
    }
}

// console.log(user.address.street.third);


//optional chaining --- most important thing
const user2 = {
    id: 212,
    name: 'Bayzid',
    address: {
        city: 'Dabail',
        country: 'GohailBari'
    }
}

console.log(user.address.street?.third);
console.log(user2.address.street?.third);
