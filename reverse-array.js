const numbers = [2, 4, 1, 6, 3, 7, 9, 8];
// console.log(numbers);
//  numbers.reverse();
// console.log(numbers);

const reverse = [];

for(const num of numbers){
    // console.log(num);
    reverse.unshift(num);
}
// console.log(reverse);



const reversed_numbers = [];
for(let i = 0; i < numbers.length; i++){
    const num = numbers[i];
    reversed_numbers.unshift(num);
}
// console.log();





/// reverse side looping 
const rev_reverse = [];
for(let i = numbers.length - 1; i >= 0; i--){
    const num = numbers[i];
    // console.log(num);
    rev_reverse.push(num);
}
// console.log(rev_reverse);

const friends = ['Shiblo', 'Akash','Bayzid', 'Monir', 'Saidul', 'Sohel'];
// for(const friend of friends){
//     console.log(friend);
// }

// console.log(friends);

// const rev = friends.reverse();
// console.log(rev);

const rev_friend = [];
for(let i = 0; i < friends.length; i++){
   const rev = friends[i];
   rev_friend.unshift(rev);
}

console.log(rev_friend);