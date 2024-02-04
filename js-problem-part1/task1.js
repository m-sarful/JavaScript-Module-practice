/**
 * Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
 */

function celsiusToFahrenheit(numbers){
      const fahrenheit = (numbers * 9 / 5) + 32;
       return fahrenheit;
}

 const celsius = celsiusToFahrenheit(98.4);
  console.log(celsius);