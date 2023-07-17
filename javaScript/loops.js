
// for Loop (for array and objects)

const fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

const personObj = {
  name: 'Abdullah',
  age: 23,
  city: 'Irbid',
};

for (let key in personObj) {
  console.log(key + ': ' + personObj[key]);
}

for (let number of numbers) {
    console.log(number);
}


// while Loop

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

let j = 0;

do {
  console.log(i);
  i++;
} while (i < 5);