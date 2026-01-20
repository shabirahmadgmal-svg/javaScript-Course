/* CONVERSION Of DataTypes
    1. Automatic Convertion
         => javascript automatically converts one data type to another data type
    2. Manual Convertion
         => We Tell javascript to convert one data type to another data type
 */

//    ==> Automatic Convertion

let result = "5" + 10 ; // "5" is string and 10 is number
// javascript automatically converts number 10 to string "10" and concatenates both strings
// so the result will be "510" string
console.log(result); //=>  "510"

let diff = "5" - 2 ; // "5" is string and 2 is number
// javascript automatically converts string "5" to number 5
// so the result will be 3 number
console.log(diff); //=>  3

/*   ==>  NOTE!
   only + symbol add Two Number And Concanate Two Strings
   but -, /, * and % work normally like used in mathematics
   in these they convert strings to numbers first
 */

