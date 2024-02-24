const getAge = (person) => person.age;
const student = {name: 'Rahim', age:34};
const age = getAge(student);
console.log(age);


const getThird = numbers => numbers[3];
const third = getThird([12, 13, 34, 45, 1, 21]);
console.log(third);