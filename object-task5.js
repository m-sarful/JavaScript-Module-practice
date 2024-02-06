/**
 * 
Task-5 (Hard)
Loop through an object and print the key-value pairs with their types

Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};
 */


let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
  };


    for(let key in myObject){
        console.log(key);
    }
  
//   for (let key in myObject) {
//     if (myObject.hasOwnProperty(key)) {
//       let value = myObject[key];
//       let type = typeof value;
//       console.log(`${key}: ${value} (${type})`);
//     }
//   }
  



    // const keys = Object.keys(myObject);
    // for(const key of keys){
    //     const name1 = 'key : ' + key;
    //     console.log(name1);
    // }


    // const values = Object.values(myObject);
    // for(const value of values){
    //     const name2 = 'value : ' + typeof value;
    //     console.log(name2);
    // }
      
  


    /**
     *  key: name | type:  string
        key: age | type:  number
        key: city | type:  string
        key: isStudent | type:  boolean
     */