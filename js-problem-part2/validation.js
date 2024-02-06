function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please provide a number'
    }
     const mult = num1 * num2;
      return mult;
}

 const result = multiply(5, 'seven');
//   console.log(result);


function fullName(first, second){
    if(typeof first !== 'string'){
        return 'Name should be a string';
    }
     else if(typeof second !== 'string'){
        return 'name should be a string';
     }
    const full = first + ' ' + second;
     return full;
}
 const name = fullName('sarful', 'islam');
//   console.log(name);



function getPrice(product){
    if(typeof product !== 'object'){
        return 'Please provide an object'
    }
    const price = product.price;
    return price;
}
//  const price = getPrice({name: 'pevison', price: 25, color: 'white'});
 const price = getPrice(5);
//   console.log(price);


function getSecond(numbers){
    if(Array.isArray(numbers) === false){
        return 'Please provide an Array';
    }
     const second = numbers[1];
      return second;
}
 const second = getSecond([45, 34, 23]);
 console.log(second);

 