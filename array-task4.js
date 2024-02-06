/**
 * Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
 */

const statement = 'I am a hard working person';
const rev = statement.split(' ');
// console.log(rev);
 let result = [];
  for(let letter of rev){
    result.unshift(letter);
  }
   console.log(result.join(' '));
