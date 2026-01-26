// Maths In Javascript : library which is by default in javascript

console.log(Math);
// Output ==>  Object [Math] {} 

//   Random number
console.log(Math.random());
//Random Number in Range Of  1-10
console.log((Math.random() * 10) + 1); // 2 ,4,1,8,4,7,..

//Random Number in Range Of  10-20
const min = 10 ;
const max = 20 ;
console.log(Math.floor(Math.random() * (max - min + 1 ) + min ));//12, 13 ,17, 12, ..
//or
console.log(Math.floor(Math.random() * ( 10 + 1) + 10 ));//19, 13 ,17, 12, ..


// IMPORTANT  CONSTANTSconsole.log(Math.PI);
// Output ==>   3.14159265358979console.log(Math.E );  
// Output ==>  2.71 console.log(Math.SQRT2 );   
// Output ==> 1.41console.log(Math.LN2);  
// Output ==>  0.69 console.log(Math.LOG10E);   
// Output ==>  0.434


//Absolute & sign 
console.log(Math.abs(-12));
// output     ==>  12 (negative  number convert in positive Number)
console.log(Math.sign(10)); //  1
console.log(Math.sign(6)); //   1
console.log(Math.sign(-10));//   -1 
console.log(Math.sign(-6));//   -1
console.log(Math.sign(0));//   0


//  Min & Max
//use to find maximum and minimum number in Array or Multiple Numbers
console.log(Math.max(1 ,3, 5 ,0 ,6));  //   6 
console.log(Math.min(1 ,3, 5 ,0 ,6)); //   0

//Rounding related 
console.log(Math.round(23.4)); //   23  Round OFF
console.log(Math.round(23.8));//  24 Round OF
console.log(Math.ceil(4.2)); //  5  upper value
console.log(Math.floor(4.9)); // 4   lower value
console.log(Math.trunc(4.7));//  4 only Remove Decimal Point

//  Power & roots 
console.log(Math.pow(3,2));// 3^2 ==> 3 * 3 = 9
console.log(Math.sqrt(64));// 8  Square Root
console.log(Math.cbrt(27));//  3 cubeRoot






