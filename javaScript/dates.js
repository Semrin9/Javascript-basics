
// Dates & Date Formats

const currentDate = new Date();
console.log(currentDate.toISOString());         //result: 2023-07-16T03:02:38.934Z
console.log(currentDate.toDateString());        //result: Wed Jul 16 2023
console.log(currentDate.toTimeString());        //result: 15:04:42 (GMT+03:00)
console.log(currentDate.toLocaleDateString());  //result: 7/16/2023
console.log(currentDate.toLocaleTimeString());  //result: 1:05:41 PM
console.log(currentDate.toLocaleString());      //result: 7/16/2023, 1:05:41 PM
