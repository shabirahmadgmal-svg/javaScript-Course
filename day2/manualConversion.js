/*  ==> MANUAL CONVERTION
         Def: We Tell javascript to convert one data type to another data type
*/
// -- convert dayatypes into number data type
let password = "1234" ; // password is string data type
console.log(typeof password) ; //=> string
// converting string password to number data type
let convertPassword = Number(password) ;//Number() is function that converts string to number
console.log(typeof convertPassword) ; //=> number
/* 
  Number(true)     =>   1
  Number(false)    =>   0
  Number("1234")   =>   1234
  Number("Shabir") =>   NaN  (Not a Number)
  Number("")       =>   0   (empty string)
  Number(null)     =>   0
  Number(undefined)=>   NaN (Not a Number)
  Number("123abc") =>   NaN (Not a Number)

  These all data types are converted to number data type using Number() function
*/
// --  convert datatype into string data type

let userId = 5678 ;//user id is number data type
console.log(typeof userId) ; //=> number
let convertUserId = String (userId) ;//String() is function that converts number to string
console.log(typeof convertUserId) ; //=> string
/* 
    String(1234)     => "1234"
    String(true)     => "true"
    String(false)    => "false"
    String(null)     => "null"
    String(undefined)=> "undefined"
    String(NaN)      => "NaN"
    These all data types are converted to string data type using String() function
*/

// -- convert into  boolean data type

let isLoggedIn = 1; // 1 is number data type
let convertIsLoggedIn = Boolean(isLoggedIn) ;//Boolean() is function that converts number to boolean
console.log(typeof convertIsLoggedIn) ; //=> boolean
console.log(convertIsLoggedIn) ; //=> true
/* 
  Boolean(1) => true
  Boolean(0) => false
  Boolean("") => false   (empty string)
  Boolean("shabir") => true
  Boolean(null) => false
  Boolean(undefined) => false
  Boolean(NaN) => false
  Example:
  let str="123abc";
  let convertStr =Number(str) => NaN (The convertStr Variableis not a number and we converted it to Boolean)
  Boolean(convertStr) => false
 */
// These all data types are converted to boolean data type using Boolean() function

// End of Manual Convertion