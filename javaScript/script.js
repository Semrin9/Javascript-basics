// Syntax & variables (declarations)
let name = 'Abdullah';
const age = 23;
var city = 'Irbid';

// Functions
function greet() {
    console.log('Hello world!');
  }

  
// Objects
const person = {
    name : 'Abdullah',
    age : 23,
    city : 'Irbid'
  };

// Events
document.addEventListener('click', function (event) {
    console.log('Clicked!', event);
  });

// String & String Methods
const greeting = 'Hello, World!';
console.log(greeting.length);
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

console.log(greeting.substring(0, 5)); //sclice() substr()

const words = greeting.split(', ')
console.log(words);
console.log(words[0]);

const newText = text.replace(/WORLD/i, "Blulogix");
console.log(newText);



// Arrays & Array Methods
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);
console.log(numbers[0]);
console.log(numbers.push(6));
console.log(numbers.pop());