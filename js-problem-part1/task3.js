/**
 * Task-3:
Write a function to count the number of vowels in a string.
 */


 function countVowels(str){
    //  const vowels = ['a', 'e', 'i', 'o', 'u'];
      const vowels = ['a', 'e', 'i', 'o', 'u'];
       let  count = 0;
        for(const char of str){
           if(vowels.includes(char)){
            count++;
           }
        }
        return count;
 }
//   const string = 'I am lazy boy';
   const result = countVowels('I am lazy boy');
    console.log(result);