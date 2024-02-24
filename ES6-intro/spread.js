const max = Math.max(5, 3, 2, 31, 4);
// console.log(max);


const numbers = [12, 23, 113, 45, 34, 56, 75, 78, 67];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);

// Use spread operator to copy

const friends = [5, 3, 2, 31, 4];
const bondhu = friends;
const dost = [...friends]; // Copy
console.log(dost);
friends.push(113);
console.log(dost);
console.log(friends);

// advanced 
const number = [...friends, 34]; // add extra element while copy
console.log(number);