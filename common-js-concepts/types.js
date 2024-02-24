//  primitive
const a = 5;
const b = 'learning javascript';
const is = true;


// non primitive
const numbers = [1, 2, 4, 6, 7];
const student = {id: 13, name: 'sarful', class: 6};

console.log(typeof a, typeof b, typeof numbers, typeof is, typeof student);



let x = 5;
let y = x;
// console.log(x, y);
 y = 7;

//  console.log(x, y);


let p = {job: 'senior web-developer'};
let q = p;
// q = {job: 'junior web-developer'}
q.job = 'junior web-developer';


console.log(p, q);