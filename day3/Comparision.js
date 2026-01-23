/*Comparision Operators
   Def : Comparison operators are used to compare two values and return a boolean value (true or false) based on the comparison.
*/
// Case 1 : Equality Operators
    let i = 10;
    let j = "10";
    console.log(i == j);  // true : because == operator compares only values after type conversion ( string "10" converted to number 10)
    console.log(i != j);  // false : because != operator compares only values after type conversion ( string "10" converted to number 10)
/*
   This three symbole === and !== are called strict equality operators
// first check datatype of Both variable.Are they are same datatype or not.if same datatype then compare their values.
*/ 
    console.log(i === j); // false : because === operator compares both value and type of both variables ( number 10 is not same as string "10")
    
    
    console.log(i !== j); // true : because !== operator compares both value and type of both variables ( number 10 is not same as string "10")
// Case 2 : Relational Operators
    let a = 15;
    let b = 20;
/*
   a > b = false : because 15 is not greater than 20
   a < b = true : because 15 is less than 20
   a >= b = false : because 15 is not greater than or equal to 20
*/

    console.log(a <= b); // true : because 15 is less than or equal to 20

// Case 3 : Comparing different data types
/*
   5 > "3" = true : because string "3" converted to number 3 then 5 > 3 = true
   5 < "8" = true : because string "8" converted to number 8 then 5 < 8 = true
   5 >= "5" = true : because string "5" converted to number 5 then 5 >= 5 = true
   "2" >= "2" = true : because both strings "2" converted to number 2 then 2 >= 2 = true
   5 > "ravi" = false : string "ravi" cannot be converted to number so it becomes NaN (Not a Number). Any comparison with NaN returns false.
   
 */
   console.log( "5" <= 1); // true : because string "5" converted to number 5 then 5 <= 1 = false

// Case 4 : Comparing boolean values
/*
   true > false = true : because boolean true converted to number 1 and false converted to number 0 then 1 > 0 = true
   true < false = false : because boolean true converted to number 1 and false converted to number 0 then 1 < 0 = false
   true >= false = true : because boolean true converted to number 1 and false converted to number 0 then 1 >= 0 = true
   false <= true = true : because boolean false converted to number 0 and true converted to number 1 then 0 <= 1 = true
   */
console.log(true===1); // true : because boolean true converted to number 1 then 1 === 1 = true
console.log(false===0); // true : because boolean false converted to number 0 then 0 === 0 = true
console.log(true===false); // false : because boolean true converted to number 1 and false converted to number 0 then 1 === 0 = false

// Case 5 : Comparing null and undefined    
/*
   null == undefined = true : because both null and undefined are considered equal in value when using == operator
   null === undefined = false : because null and undefined are of different datatypes and same values 
   null >= 0 = true : because null converted to number 0 then 0 >= 0 = true
   undefined > 0 = false : because undefined converted to NaN (Not a Number). Any comparison with NaN returns false.
   undefined < 0 = false : because undefined converted to NaN (Not a Number). Any comparison with NaN returns false. 
*/
console.log(null != undefined); // false : because both null and undefined are considered equal in value when using != operator
console.log(null !== undefined); // true : because null and undefined are of different datatypes and same values
console.log(null > 0); // false : because null converted to number 0 then 0 > 0 = false

