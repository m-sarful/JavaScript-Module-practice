/**
 * Task-5:
Capitalize Every first Letter of each word in a String
 */

  let string = 'capitalize every first letter of each word in a string';
   let char = string.split(' ');
  for(let i = 0; i < char.length; i++){
    char[i] = char[i].charAt(0).toUpperCase() + char[i].slice(1);
}
 let result = char.join(' ');
  console.log(result);