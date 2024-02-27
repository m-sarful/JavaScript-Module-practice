/**
 * Task-1:
Count how many times a string has the letter a
*/
//  let sum = 1;
// const sentence = "I am a lazy boy";
//  for(let i = 0; i <= sentence.length; i++){
//     if(i === 'a'){
//         sum = sum + i;
//     }
// }
// console.log(sum);


const sentence = "i am a lazy boy";
const countOfa = (sentence.match(/a/g)).length;

console.log(countOfa);

