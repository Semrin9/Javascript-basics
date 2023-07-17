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
    address: {
        city: 'Irbid',
        country: 'Jordan'
    },
    hobbies: ['Reading', 'Coding', 'Gaming']
  };


// Events

document.addEventListener('click', function (event) {
    console.log('Clicked!', event);
});

document.addEventListener('mousemove', function(event) {
    console.log('Mouse moved!', event);
});

document.addEventListener('keypress', function(event) {
    console.log('Key pressed!', event);
});

document.addEventListener('scroll', function(event) {
    console.log('Scrolled!', event);
});


// String & String Methods

const greeting = 'Hello, World!';
console.log(greeting.length);
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

console.log(greeting.substring(0, 5)); //slice() substr()

const words = greeting.split(', ');
console.log(words); 
console.log(words[0]);

const newText = text.replace(/WORLD/i, "Blulogix"); //replaceAll()
console.log(newText);

let text1 = "Hello";
let text2 = "World!";
let text3 = text1.concat(", ", text2);