const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((x) => x * x);
const oddNumbers = squares.filter((x) => x % 2 !== 0);

console.log(oddNumbers);
