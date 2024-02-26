const numbers = [ 1, 2, 5, 7, 8, 3, 9, 4];
const players = [23, 13, 34, 56, 76, 45];
// const selected = players.filter(p => p > 80);
// const selected = players.filter(p => p % 2 === 0);
const selected = players.filter(p => p % 2 !== 0);
console.log(selected);

const friends = ['Monir', 'Bayzid', 'Shiblo', 'Akash', 'Saidul', 'Shahriar', 'Durjoy'];
const oddFriends = friends.filter(friend => friend.length % 2 !== 0);
// const oddFriends = friends.filter(friend => friend.length % 2 === 0);
// console.log(oddFriends);


const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);