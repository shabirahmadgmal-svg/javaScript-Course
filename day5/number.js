const score = 400
// console.log(score);

const balance = new Number(100)
console.log(balance);// [Number: 100]

 console.log(balance.toString().length);// 3

 console.log(balance.toFixed(1));// 100.0


 console.log(balance.toExponential(5));// 1.00000e+2
 // Drop point before last non zero digt an parameter value decide how many number shown after decimal point
//convert into power of 10

const otherNumber = 123.8966


 console.log(otherNumber.toPrecision(6)); //123.897
 console.log(otherNumber.toPrecision(4));//123.9
 console.log(otherNumber.toPrecision(2));//1.2e+2
 // by defualt convert into Exponantial form

const hundreds = 1000000
 console.log(hundreds.toLocaleString('en-IN'));   // 10,00,000  india standart 
 console.log(hundreds.toLocaleString()); //1,000,000 india standart 


 //valueOf  etc