// Dates In  Javascript 
// use to represent Time And Date

console.log(Math); //  Object [Math] {}

let firstDate = new  Date();
console.log(firstDate.toDateString()) //  Wed Jan 28 2026
console.log(firstDate.toISOString())  //  2026-01-27T21:35:18.617Z
console.log(firstDate.toLocaleDateString())   // 1/28/2026  
console.log(firstDate.toLocaleString())  //  1/28/2026, 2:35:18 AM
console.log(firstDate.toTimeString())  //  02:35:18 GMT+0500 (Pakistan Standard Time)
console.log(firstDate.toJSON()); //  2026-01-27T21:37:59.048Z

/*
  The day is becoming 1 less because of time-zone conversion.
  JavaScript internally works with UTC time, but your system is in Pakistan time (UTC +5).
  When JavaScript converts between these two, the date can shift to the previous day.
 */
let newDate = new Date(2026 , 0 , 26 );
// console.log(newDate);  //  2026-01-25T19:00:00.000Z

let lastDate = new Date(2025 , 4 , 23 , 5 , 34 , 45 )
// console.log(lastDate);  //  2025-05-23T00:34:45.000Z

let previousDate = new Date('2026-01-7');
// console.log(previousDate); //  2026-01-06T19:00:00.000Z

let next = new Date('01-15-2026');
console.log(next) // 2026-01-14T19:00:00.000
console.log(next.toLocaleString()); //  1/15/2026, 12:00:00 AM
console.log(next.toLocaleDateString()); //  1/15/2026


let myTimeStamp = Date.now()
console.log(myTimeStamp); //  1769551947700  (This Value Is In milliSecond)
// convert in sec
console.log(myTimeStamp/1000) //  1769552283.102
//avoid Point value
console.log(Math.floor(myTimeStamp/1000)) // 1769552350
console.log(Math.floor(Date.now/1000));
console.log(next.getTime());  //  1768417200000


let dateOfB = new Date();
console.log(dateOfB); //2026-01-27T22:22:03.527Z
console.log(dateOfB.getDay()); // 3
console.log(dateOfB.getFullYear()); // 2026
console.log(dateOfB.getTime()); // 1769552819066  milliSeconds
console.log(dateOfB.getMonth()+1); // 1 

// Custamize Formate

console.log(dateOfB.toLocaleString('default',{  weekday:"short" ,day:"2-digit"}));
//default use in place we give region 
// Output == >>  8 Wed