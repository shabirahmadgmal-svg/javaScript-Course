/* Assignment Operators : 
        Def : Assignment operators are used to assign values to variables.
 */
// Case 1 : Simple Assignment Operator
    let n1 = 10;  // assigns value 10 to variable n1
    let n2 = 5;   // assigns value 5 to variable n2 

// Case 2 :  Arithmetic Assignment Operators
    console.log(n1 += 5); //  (n1 = n1 + 5) ==> 10 + 5 = 15  this 15 value assigned to n1
    console.log(n2 -= 2); //  (n2 = n2 - 2) ==> 5 - 2 = 3    this 3 value assigned to n2
    console.log(n1 *= 2); //  (n1 = n1 * 2) ==> 15 * 2 = 30  this 30 value assigned to n1
    console.log(n2 /= 1); //  (n2 = n2 / 1) ==> 3 / 1 = 3    this 3 value assigned to n2
    console.log(n1 %= 4); // (n1 = n1 % 4) ==> 30 % 4 = 2   this 2 value assigned to n1
    console.log(n2 **= 3); // (n2 = n2 ** 3) ==>   this   value assigned to n2  3 ** 3 = 27 (3^3 = 3*3*3 =  27
  
//case 3 : Combining Assignment Operators with other operators

    let number = 5;
    number += 3 * 2; // first 3 * 2 = 6 then number += 6 ( number = number + 6) ==> 5 + 6 = 11 this 11 value assigned to number
// same as number = number + (3 * 2)
    let number2 = 5;
        number2 += 7 * 2; // first 3 * 2 = 6 then number2 += 6 ( number2 = number2 + 6) ==> 5 + 6 = 11 this 11 value assigned to number2
    console.log(number , " ", number2 ); // 11 and 19

