// Primitive value are pass by value

let num1 = 5;
let num2 = 6;

function multiply(a, b){
    a = 8;
    const result = a * b;
    return result;
}
 console.log(num1);
const output = multiply(num1, num2);
console.log(output);
console.log(num1);



 // Objects and Array are pass by reference 

let student1 = {name: 'Sarful', partner: 'Bayzid'};
let student2 = {name: 'Marful', partner: 'Shanto'};

function makeGroup(student1, student2){
    student1.name = 'Monir';
    student2.partner = 'Faridul';
}
console.log(student1, student2)
makeGroup(student1, student2)
console.log(student1, student2)




function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32));
