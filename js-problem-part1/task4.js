/**
 * Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */

 function longestWord(str){
let longestWord = str.split(' ').sort(function(a, b) {
    return b.length - a.length
});
 return longestWord[0];
 }
 

 const result = longestWord('I am learning Programming to become a programmer');
  console.log(result);