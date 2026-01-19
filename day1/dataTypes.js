/* DataTypes : 
datatypes tell to the programing language what kind of data store in variable.
there are 2 types of datatypes in javascript
1. Primitive DataTypes
  . Number
  . String
  . Boolean
  . Undefined
  . Null
  . BigInt
  . Symbol
2. Non-Primitive DataTypes
    . Object
    . Array
    . Function

*/
let myName = "Shabir Ahmad" ; // String DataType
let myAge = 25 ; // Number DataType
let isMarried = false ; // Boolean DataType
let address ; // Undefined DataType
let myNull = null ; // Null DataType
let bigIntNum = 1234567890123456789012345678901234567890n ; // BigInt DataType
let mySymbol = Symbol("mySymbol") ; // Symbol DataType

console.table([myName, myAge, isMarried, address, myNull, bigIntNum, mySymbol]) ;
console.table([typeof myName, typeof myAge, typeof isMarried, typeof address, typeof myNull, typeof bigIntNum, typeof mySymbol]) ;