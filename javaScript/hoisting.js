
//Hoisting

console.log(x); // Output: undefined not ReferenceError
var x = 10;
console.log(x); // Output: 10

sayHello(); // Function hoisting  Output: Hello!
function sayHello() {
  console.log('Hello!');
}

var x = 10;  //Variable and Function Hoisting
function printNumber() {
  console.log(x);
  var x = 20;
}
printNumber(); // Output: undefined
