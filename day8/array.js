/*   Array In Javascript 
    def : Array Is Data Structure used to Store multiple Variable  in a single variable .
    Rule : 
         1.Array is Resize able  in Javascript.
         2.Different datatypes values store in single array.
         3.Values cannot access by arbitrary strings.
         4. Index start from zero.
         5.Arrays are compared by reference, not by value
*/
// First Way To Create Array 
let arr = [ 1 , 2 , 3 , 7 , 5 ];
// Second Way To Create Array
const  firstArr = new  Array( 3 , 5 , 2 , 8 , 1 ); 

console.log(Array);  // [Function: Array]

console.log(arr[4]); // 5

// console.log(arr["shabir"])  arbitrary string not allowed.
//access values in array through index
console.log(firstArr[3]) // 8
 
// push  , pop
arr.push(234) // Add this value in array in end of array 
console.log(arr); // [ 1, 2, 3, 7, 5, 234 ]

arr.pop() // remove value present  on last index or last values of array (not need to pass any value )
console.log(arr); // [ 1, 2, 3, 7, 5 ] 

// unshift , shift
firstArr.unshift(75); // insert value in start of array or insert value on  0 index
console.log(firstArr); //  [ 75, 3, 5, 2, 8, 1 ]

firstArr.shift() // not need to pass any value it only remove starting value / value on 0 index in Array
console.log(firstArr); //  [ 3, 5, 2, 8, 1 ]

// Include use to check Are this value is Exist In this array ?
console.log(firstArr.includes(6));  // false 
console.log(firstArr.includes(1));   //true


// IndexOf use to show this value is Present on which Index in given array
// value found show index ,value not found show -1 
console.log(firstArr.indexOf(9)); //  -1
console.log(firstArr.indexOf(2)); //  2


/*
  splice : 
  def: slice is an array method that extracts a portion of an array and returns it as a new array.
   It does not change the original array. 
   splice :  
   splice() is an array method used to add, remove, or replace elements in an array.
   It changes the original array.
*/


//slice 
//  original Array(  firstArr = [ 3, 5, 2, 8, 1 ]
    console.log(firstArr.slice(0,3)); // [ 3, 5, 2 ]
    console.log(" Original Aarray After Slice : ", firstArr);  //    Original Aarray After Slice :  [ 3, 5, 2, 8, 1 ]
    
// first range includes But  last range is not include in slice 

// Splice 
//  original Array(  firstArr = [ 3, 5, 2, 8, 1 ]
console.log(firstArr.splice(1,3));
console.log(" Original Array After  Splice : ", firstArr); //    Original Array After  Splice :  [ 3, 1 ]
// splice remove value at index 1, 2, 3  ( 5, 2 , 8) and remain index 0 ,4  are (3 ,1)
// first and last range both are include 





