const mobile = {
    brand : 'samsung',
    price : 17000,
    color : 'golden',
    camera : '12mp',
    isNew : false
}


// for of : array
// for in : object
for(const prop in mobile){
    // console.log(prop);
    // console.log(mobile[prop]);
}


 const keys = Object.keys(mobile);
 console.log(keys);

 for(const key of keys){
    console.log(key, ':', mobile[key]);
 }