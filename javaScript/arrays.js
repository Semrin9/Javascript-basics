// Arrays & Array Methods

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);       //result: 5
console.log(numbers[0]);           //result: 1
console.log(numbers.push(6));      //result: 6           Array: [1,2,3,4,5,6]
console.log(numbers.pop());        //result: 6           Array: [1,2,3,4,5]
console.log(numbers.toString());   //result: 1,2,3,4,5
console.log(numbers.join('-'));    //result: 1-2-3-4-5
console.log(numbers.shift());      //result: 1           Array: [2,3,4,5]
console.log(numbers.unshift(0));   //result: 5           Array: [0,2,3,4,5]

console.log(numbers.splice(2, 1)); //result: 3           Array: [0,2,4,5]
console.log(numbers.reverse());    //result: [5,4,3,1,0]
console.log(numbers.sort());       //result: [0,1,3,4,5]


// Array Iteration Methods (forEach, map, filter, reduce, indexOf)

numbers.forEach(number => {
    console.log(number);
});
  
const multipliedNumbers = numbers.map(number => {
    return number * 2;
});

console.log(multipliedNumbers);
  
const filteredNumbers = numbers.filter(number => {
    return number > 3;
});

console.log(filteredNumbers);
  
const sum = numbers.reduce(accumulator, number => {
    return accumulator + number;
}, 0);

console.log(sum);
  
console.log(numbers.indexOf(3) + 1);