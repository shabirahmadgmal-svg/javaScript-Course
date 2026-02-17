// Use of This Keyword
// define an object with properties and a method that uses 'this' to access those properties
//this in JavaScript refers to the current context in which a function is executed.
const detail = {
     name : "Shabir",
     class : 14,
     RollNo : 1001,
     note : function()
     {
        console.log(` Student Name : ${this.name}, Class : ${this.class}, RollNo : ${this.RollNo}.`)
     }
}
// detail.note(); // Student Name : Shabir, Class : 14, RollNo : 1001.
// detail.name = "Anees";
// detail.note(); // Student Name : Anees, Class : 14, RollNo : 1001.

//use of this keyword 
const user = {
    name : "Shabir",
    price : 999,
    wellCome : function(){
        console.log(`Welcome ${this.name} to my Website`);
        console.log(this);
    }
}
user.wellCome();
 // Welcome Shabir to my Website
//  { name: 'Shabir', price: 999, wellCome: [Function: wellCome] }

// outside of object this keyword will refer to global object which is window in browser and global in node js
console.log(this); // In Browser : Window {window: Window, self: Window, document: document, name: '', location: Location, …} 
// In Node JS : Object [global] {  } empty object because in node js this keyword will refer to module.exports which is an empty object by default


// this use in simple function
function printThis(){
    console.log(this);
}
printThis();// In Browser : Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// in simple function this keyword will refer to global object which is window in browser and global in node js


//syntax of arrow function
//first way to write arrow function
// this is implicit return because we have only one line of code in function and we are not using curly braces and return keyword
let add = (a, b) => {
    return a+b;
}
console.log(add(5, 10)); // 15

//second way to write arrow function
let add2 = (a, b) => a+b; // if we have only one line of code in function then we can omit the curly braces and return keyword
console.log(add2(5, 10)); // 15

//third way to write arrow function

let name = () => ("Shabir Ahmad");
console.log(name()); // Shabir Ahmad


//Object in Arrow Function
const detail2 = () => ({ name : "Shabir", age : 23});
console.log(detail2()); // { name: 'Shabir', age: 23 }


// this keyword in arrow function
// In arrow function this keyword will refer to the parent scope of the function which is the global object in this case
const a = () => {
    console.log(this);
}
console.log(a()); // In Browser : Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// In Node JS : Object [global] {  } empty object because in node js this keyword will refer to module.exports which is an empty object by default