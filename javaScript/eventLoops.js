
//event loop

console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 2000);

setTimeout(() => {
  console.log('Timeout 2');
}, 1000);

Promise.resolve().then(() => {
  console.log('Promise 1');
});

Promise.resolve().then(() => {
  console.log('Promise 2');
});

console.log('End');

/* 
Output: 
Start
End
Promise 1
Promise 2
Timeout 2
Timeout 1
*/