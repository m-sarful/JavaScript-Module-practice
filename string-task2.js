/**
 * Task-2:
Count how many times a string has the letter a or A
 */

 const sentence = 'A lazy boy do not any thing in his life';
 const result1 = (sentence.match(/a/g)).length;
 const result2 = (sentence.match(/A/g)).length;
 console.log('a - ' + result1);
 console.log('A - ' + result2);