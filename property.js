const person = {
    name : 'Rahim',
    age : 25,
    profession : 'developer',
    salary : 25400,
    married : true
}

// dot notation
 // dot symbol diye object er property er value acess kora

// console.log(person.name);
const income = person.salary;
// console.log(income);



// bracket Notation 
// third bracket diye access kora

console.log(person['married']);

const old = person["age"];
console.log(old);
