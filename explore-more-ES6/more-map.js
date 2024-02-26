const numbers = [12, 13, 34, 22, 23];

const doubled = numbers.map(n => n * 2);
// console.log(doubled);

const addedFive = numbers.map(n => n + 5);
// console.log(addedFive);

const friends = ['Monir', 'Bayzid', 'Shiblo', 'Akash', 'Saidul', 'Shahriar', 'Durjoy'];

const lengths = friends.map(frnd => frnd.length);
// console.log(lengths);

const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);