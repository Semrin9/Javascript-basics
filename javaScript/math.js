
// Math

console.log(Math.random());
console.log(Math.floor(5.8));

const randomNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
console.log(randomNumber);

const roundedUp = Math.ceil(number);
console.log(roundedUp);

const rounded = Math.round(number);
console.log(rounded);

const fixedDecimal = number.toFixed(2); // Rounds to 2 decimal places
console.log(fixedDecimal); 

const numbersArray = [5, 2, 9, 1, 7];
const maxNumber = Math.max(...numbersArray); 
const minNumber = Math.min(...numbersArray); 

const base = 2;
const exponent = 3;
const power = Math.pow(base, exponent);

const squareRoot = Math.sqrt(16); 