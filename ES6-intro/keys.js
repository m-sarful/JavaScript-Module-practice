const glass = {
    name : 'glass', 
    color : 'golden', 
    price : 12,
    isCleaned : true
}

// console.log(glass);

const keys = Object.keys(glass);
// console.log(keys);

const entries = Object.entries(glass);
// console.log(entries);

const {price, ...shortGlass} = glass;
// console.log(shortGlass)

// freeze
// Object.freeze(glass);
// glass.source = 'Bangladesh'
// console.log(glass);


// seal
Object.seal(glass);
glass.price = 130;
console.log(glass);