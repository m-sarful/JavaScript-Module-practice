const person = {
    name : 'Sarful Islam',
    age : 23,
    phone : '01753535306',
    money : 600
}

// const {money}  = person;
const {phone, money:tk} = person;

// console.log(phone);
// console.log(money);
// console.log(tk);


// Advanced array destructuring

function doubleThem(a, b){
    return [a*2, b*2]
}

const [first, second] = doubleThem(5, 6);
console.log(first, second);