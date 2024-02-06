/*
Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/
//   const result = heights2.sort(function (a, b){ return a.length - b.length});

    const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
       function smallestFriend(names){
        const result = names.sort(function (a, b){ return a.length - b.length});
        return result[0];
       }
     
       const result = smallestFriend(heights2)
      console.log(result);