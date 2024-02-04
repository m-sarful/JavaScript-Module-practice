/**
 * array has some duplicate elements
 * []
 * 
 */

 const biriyaniKhor = ['sakib', 'rakib', 'rahim', 'sakib', 'karim', 'rakib', 'sakib'];
  const numbers = [1, 23, 34, 1, 22, 23, 12, 34, 23];



  function noDuplicate(array){
     const unique = [];
   for(const item of array){
    if(unique.includes(item) === false){
        unique.push(item);
    }
   }
    return unique;
  }

   const uniqueArray = noDuplicate(numbers);
    console.log(uniqueArray);