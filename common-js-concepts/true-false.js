/*
 * Truthy:
 *      1. true;
 *      2. any number (+ve , -ve) will be "true", other than 0
 *      3. any string other than empty string
 *      4. {}
 *      5. []
 * 
 * 
 * Falsy:
 *      1. false
 *      2. 0
 *      3. empty string('')
 *      4. undefined
 *      5. null 
 * 
 */

// const x = [];

let x;
console.log(x);

if(x){
    console.log('The value is truthy');
}
else{
    console.log('value is falsy');
}



// optional
// check falsy
// TRUE VALUE MAKES IT FALSE
const z = '0';
if(!z){
    console.log('Value is truthy');
}
else{
    console.log('value is falsy');
}


// check truthy
//  FALSE VALUE MAKES IT TRUE
const y = ' ';
if(!!y){
    console.log('Value is truthy');
}
else{
    console.log('value is falsy');
}