// Truthy values are values that are considered true when evaluated in a boolean context
// Examples of truthy values:
// true, "  " (non-empty string), (), [], {}, 1, -1, Infinity, -Infinity, function(){}, () => {},"0" (string with zero), "false" (string with false)

if (true) {
    console.log("true is truthy");
}
if ("Hello") {
    console.log("non-empty string is truthy");
}   
if ([]) {
    console.log("empty array is truthy");
}   
if ({}) {
    console.log("empty object is truthy");
}
if (1) {
    console.log("1 is truthy");
}
if (-1) {
    console.log("-1 is truthy");
}   
if (Infinity) {
    console.log("Infinity is truthy");
}
if (-Infinity) {
    console.log("-Infinity is truthy");
}
if (function(){}) {
    console.log("function is truthy");
}
if (() => {}) {
    console.log("arrow function is truthy");
}
if ("0") {
    console.log("string with zero is truthy");
}
if ("false") {
    console.log("string with false is truthy");
}

// Falsy values are values that are considered false when evaluated in a boolean context
// Examples of falsy values:
// false, "" (empty string), 0, -0, NaN, null, undefined

if (false) {
    console.log("This will not be printed");
}   
if ("") {
    console.log("This will not be printed");
}
if (0) {
    console.log("This will not be printed");
}   
if (-0) {
    console.log("This will not be printed");
}   
if (NaN) {
    console.log("This will not be printed");
}   
if (null) {
    console.log("This will not be printed");
}   
if (undefined) {
    console.log("This will not be printed");
}   

// How to check  the length of array and object
let arr = []
if(arr.length === 0){
    console.log("Array is empty");
}
let obj = {}
if(Object.keys(obj).length === 0){
    console.log("Object is empty");
}   
