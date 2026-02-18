// IIFE (Immediately Invoked Function Expression) example
// Two Reason of Use IIFE
// 1. To create a private scope and avoid polluting the global scope
// 2. To execute code immediately without having to call the function separately

// simple function
 function name(){
    console.log("Shabir Ahmad");
 }
 name(); // Shabir Ahmad
 /*
  this function ki call imedially after its definition there is some issue of pulluting global scope
  because we have to give a name to the function and that name will be added to the global scope 
  and it can cause conflicts with other functions or variables in the global scope
 */

// IIFE (Immediately Invoked Function Expression)
//Named IIFE
(function call(){
    console.log("Shabir Ahmad");
}()); // Shabir Ahmad
/*
  this is call Named IIFE because we have given a name to the function and it is called imedially after its definition and it is not added to the global scope because
  this function is called imedially after its definition and it is not added to the global scope because 
  it is an anonymous function and it is not assigned to any variable
*/

// Unnamed IIFE
(function(){
    console.log("Shabir Ahmad");
}()); // Shabir Ahmad
/* this is call Unnamed IIFE because we have not given a name to the function and it is called imedially after its definition and it is not added to the global scope because
  this function is called imedially after its definition and it is not added to the global scope because 
  it is an anonymous function and it is not assigned to any variable
*/

// IIFE with parameters
(function(name){
    console.log(`Welcome ${name} to my website`);
}("Shabir")); // Welcome Shabir to my website
/* this is call IIFE with parameters because we have passed a parameter to the function and it is called imedially after its definition and it is not added to the global scope because
  this function is called imedially after its definition and it is not added to the global scope because 
  it is an anonymous function and it is not assigned to any variable
*/

//aRROW FUNCTION IN IIFE
((name) => {
    console.log(`Welcome ${name} to my website`);
})("Shabir"); // Welcome Shabir to my website
/* this is call Arrow Function in IIFE because we have used arrow function and it is called imedially after its definition and it is not added to the global scope because
  this function is called imedially after its definition and it is not added to the global scope because 
  it is an anonymous function and it is not assigned to any variable
*/


// Question : Write two IIFE In a single file and explain the use of this keyword in both IIFE

// First IIFE   
(function(){
    console.log("This is the first IIFE");

})();
/*
   dont forget sami colon after first IIFE because if we dont use semi colon then there is a chance of
    syntax error because the second IIFE will be treated as a function call of the first IIFE and it will
     cause a syntax error because the first IIFE is an anonymous function and it is not assigned to any 
    variable and it is not added to the global scope because  it is an anonymous function and 
    it is not assigned to any variable
*/
// Second IIFE
(function(){
    console.log("This is the second IIFE");
})()