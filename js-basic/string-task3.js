/**
 * Task-3:
Check whether a string contains all the vowels a, e, i, o, u
 */

 const sentence = "I am a lazy Boy";
  const lowerStr = sentence.toLowerCase(sentence);
//    console.log(lowerStr);
    const vowels = ['a', 'e', 'i', 'o', 'u'];
     let hasVowels = true;
      for(let i = 0; i <= vowels.length; i++){
        if(lowerStr.includes(vowels[i])){
            hasVowels = false;
            break;
        }
      }

     if(hasVowels){
        console.log('true');
      }
      else{
        console.log('false')
      }

       

  

   
