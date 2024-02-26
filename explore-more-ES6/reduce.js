const numbers = [12, 23, 32, 14, 16, 24];
const total = numbers.reduce((previous, current) => (previous + current), 0);
console.log(total);

const sum = numbers.reduce((p, c) => p + c, 0);
console.log(sum);