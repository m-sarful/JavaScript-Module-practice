const glass = {
    name : 'glass', 
    color : 'golden', 
    price : 12,
    isCleaned : true
}

for(const key in glass){
   const value = glass[key];
//    console.log(key, value);
}

// Optional

const keys = Object.keys(glass);
console.log(keys);

for(const key of keys){
    console.log(key);
}