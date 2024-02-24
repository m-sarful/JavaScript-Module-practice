// Problem - 01: Write an arrow function that will take 3 parameters will multiply the parameters and will return the result

const multiply = (a, b, c) => a * b * c;

const result = multiply(2, 45, 3);
// console.log(result);


/* Problem - 02:
 * Write the following sentence in three lines and print the result, "Iam a developer. I love to code. I love to eat biriyani"
 */

const message = `Iam a web developer.
I love to code.
I love to eat biriyani`;

        //  console.log(message);


/**
 * Problem - 03 : Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.
 */

const add = (num1, num2 = 8) => num1 + num2;

const output = add(5);
console.log(output);