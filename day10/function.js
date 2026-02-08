/*    Functions
   def : A block of Code which performs a specific task, is reusable and can be called whenever required. 
      Parameter
   def: function accepts some values as input, which are called parameters. Parameters are used to pass values to the function.
      Arguments
   def: The actual values passed to the function are called arguments. Arguments are used to pass values to the function. 
*/
// Function Declaration
function myName(){
    console.log(" Shabir AHmad ");   
}
myName//no output
myName(); // Shabir AHmad



function addTwoNumbera(num1, num2){
    console.log(num1 + num2);
}
addTwoNumbera();// NaN
addTwoNumbera(2, 3); // 5
let result = addTwoNumbera(2, 3); 
console.log(result); // undefined because the function does not return anything, it only console logs the result.



function subtract(num1, num2){
//one way
//  let num3 = num2 -num1;
//   return num3;
// another way
   return num2 - num1;
}
let result2 = subtract(5, 10);
console.log(result2); // 5



function loginuser(userName){
    return`WelCome ${userName} to Javascript`;
}
loginuser("Shabir");// no output
console.log(loginuser("Shabir")); // WelCome Shabir to Javascript


function login(userName){
//   if(userName === undefined){  return "Please provide a userName"; }  another way to check
    if(!userName)
    {
        return "Please provide a userName";
    }
    return`WelCome ${userName} to my Website `;
}
let output = login();
let output2 = login("Shabir"); 
console.log(output);// Please provide a userName
console.log(output2);// WelCome Shabir to my Website