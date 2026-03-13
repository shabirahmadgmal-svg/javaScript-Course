// Nullish Coalescing Operator
// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand 
// when its left-hand side operand is null or undefined, and otherwise returns its left-hand side
//  operand.
 let value1 ;
value1 = 5 ?? 10;
console.log(value1); // Output: 5

value1 = 0 ?? 10;
console.log(value1); // Output: 0

value1 = "" ?? 10;
console.log(value1); // Output: ""

value1 = null ?? 10;
console.log(value1); // Output: 10

value1 = undefined ?? 10;
console.log(value1); // Output: 10

value1 = false ?? 10;
console.log(value1); // Output: false

value1 = null ?? undefined ?? 10;
console.log(value1); // Output: 10

value1 = null ?? undefined;
console.log(value1); // Output: undefined

value1 = null ?? 0 ?? 10;
console.log(value1); // Output: 0

//Ternary operator
// difference between nullish coalescing operator and ternary operator is that nullish coalescing
//  operator only checks for null and undefined values while ternary operator checks the condition 
// and returns the value based on the condition values
let age = 18;
let isAdult = age >= 18 ? "You are an adult" : "You are a minor";

console.log(isAdult); // Output: You are an adult

