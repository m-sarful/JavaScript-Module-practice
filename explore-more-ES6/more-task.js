// task 1
const numbers = [1, 3, 5, 7, 9];
let evenArray = [];
for (let i = 0; i < numbers.length; i++) {
    let evenNumber = numbers[i] + 1;

    evenArray.push(evenNumber);
}
// console.log(evenArray)


// map method 

const convertToEvenNumber = numbers.map(n => n + 1);
// console.log(convertToEvenNumber);




const array = [33, 50, 79, 78, 90, 101, 30];
const divisible = array.filter(n => n % 10 === 0);
// console.log(divisible);
const find = array.find(n => n % 10 === 0);
// console.log(find);



// task 3 

const instructor = [
    {name: 'Nodi', age: 28, position: "Senior"},
    {name: 'Akil', age: 26, position: 'Junior'},
    {name: 'Shobuj', age: 30, position: "Senior"}
]

const position = instructor.filter(ins =>  //ins.position === 'Senior'
 {
    if(ins.position === 'Senior'){
        return ins;
    }
 }
);


// console.log(position)


// task 4

const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
]

const price = people.map(p => p.age);
// console.log(price);


const ageSum = price.reduce((p, c) => p + c, 0);
console.log(ageSum)