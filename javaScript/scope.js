// Scope & var vs let vs const

function scopeExample() {
    var x = 10;   // Function scope
    let y = 20;   // Block scope
    const z = 30; // Block scope
  
    if (true) {
        var x = 100;   // Variable declaration gets hoisted, affecting the outer scope
        let y = 200;   // Block scope
        const z = 300; // Block scope
        console.log('Inner scope:', x, y, z); // Output: Inner scope: 100 200 300
    }
  
    console.log('Outer scope:', x, y, z); // Output: Outer scope: 100 20 30
}
   
scopeExample();

var x = 10;   // Global scope
var x = 100;  // can be re-declared

let y = 20;   // Global scope
let y = 200;  // SyntaxError: Identifier 'y' has already been declared
y = 200;      // OK

const z = 30; // Global scope
const z = 300; // SyntaxError: Identifier 'z' has already been declared
z = 300;      // TypeError: Assignment to constant variable