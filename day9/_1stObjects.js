/*  OBJECT :
       Def : An object in JavaScript is a collection of related data and functions stored together as key–value pairs.
       OR
       Def:An object is like a box that holds information and actions about one thing.
 */
/* Singleton 
   A singleton object is an object created using a constructor, and it is made one time using new keyword.

  function Person(name) {
  this.name = name;
  }
   const p1 = new Person("Ali");    
   const p2 = new person("Ahmad");
   const p3 = new person("Raza");
*/

/*Object Literal 
  An object literal is an object created directly using {}, without using any constructor.
*/
const student ={
   name : "Shabir",
   age : 19,
   email : "shabirahmad@gamil.com",
   location : "D I Khan",
   isLoggedIn : true
};
//Object properties are accessed using Dot Notation and Bracket Notation.

console.log(student.email); // shabirahmad@gamil.com
console.log(student["email"]);// shabirahmad@gamil.com
console.log(student);

// Dot notation (.) works only with fixed property names that are valid identifiers (no spaces, no special characters, not stored in variables).
// Bracket notation ([]) works in all cases, including:
// 1.Property names stored in variables
// 2.Property names with spaces or special characters
// 3.Dynamic property access

const mykey = Symbol("ket1");
// myKey use as key in this person object

let person = {
    name : "anees",
    address : "Dera Ismal Khan ",
    "full name" : "Shabir Ahmad",
    age : 13,
    //mykey: "keys", // this is not error but this return string value 
    [mykey]:"smallKey",//output : [Symbol(ket1)]: 'smallKey'  
    isLoggedIn: false
}

person.name = "Shabir";// chage value of name key in person object

//Object.freeze(person);//before freezing  the changes will possible but no after freezing 

person.age = 45 ; // cannot be change because before this change this object is freeze so no change be possible after freezing object

console.log(person);
console.log(person[mykey]); //smallKey   this is not Access by dot(.)
console.log(person["full name"]); // Shabir Ahmad

//Function with Objects
person.wellCome = function(){
    console.log(" Well Come To Javascript");
    
}
person.user = function(){
    console.log(`Well Come ${this["full name"]} Your ${this.age} Completed`);
    // ${this.name} this is string interpolation and (```) this is called "Back Ticks"
}
person.income = function(i){
    let income = i;
    console.log(`${this.name} Your Income Is ${income}`);
    
}
console.log(person.wellCome());  // Well Come To Javascript

console.log(person.user());  // Well Come Shabir Ahmad Your 45 Completed

console.log(person.income(45000)); //Shabir Your Income Is 45000
