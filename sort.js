const friends = ['Shiblo', 'Akash','Bayzid', 'Monir', 'Saidul', 'Sohel'];
friends.sort();
console.log(friends);


const numbers = [2, 4, 1, 18, 32, 7, 64, 9];

//   Ascending---- smaller to larger
//   Descending--- larger to smaller

// const numbers_ascending = numbers.sort(); //not working properly

const numbers_ascending = [...numbers].sort(function(a, b) {return a -b}); // ascending sort

const numbers_descending = [...numbers].sort(function(a, b) {return b - a}); // descending sort
console.log(numbers_ascending);
console.log(numbers_descending);