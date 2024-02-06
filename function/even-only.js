/**
 * create function that will return only the even numbers
 * return the sum of even numbers
 */


function evenNumbersOnlY(numbers){
    const evens = [];
    for(const number of numbers){
         if(number % 2 === 0){
             console.log(number);
             evens.push(number);
            }
        }
        return evens;
}

     const numbers = [4, 5, 12, 9, 23, 34];
    //  const evens = evenNumbersOnlY(numbers);
    //   console.log( 'even number are : ', evens);


    function sumOfEvenNumbers(numbers){
        let sum = 0;
         for(const number of numbers){
            if(number % 2 === 0){
                console.log(number);
                sum += number;
            }
         }
         return sum;
    }

      const sum = sumOfEvenNumbers(numbers);
    //    console.log('sum of the even number is : ',sum);


    function getMenu() {
        console.log("Burger, Pizza, Pasta");
       }