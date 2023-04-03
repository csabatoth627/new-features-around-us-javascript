/* eslint-disable max-len */
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);



const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);


const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);
