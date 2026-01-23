//  Arithematic Operators
// NOTE : The operator + before variable is called unary plus operator which converts its value into number type.
//Case 1
    let  n1 = 5;
    let n2 = 10;
    let sum = n1 + n2;        // 5 + 10 = 15
    let diff = n2 - n1;       // 10 - 5 = 5
    let product = n1 * n2;    // 5 * 10 = 50
    let quotient = n2 / n1;   // 10 / 5 = 2 ( quotient)
    let remainder = n2 % n1;  // 10 % 5 = 0 ( % remainder)
    let PreIncrement = ++n1;  // increments n1 and returns(print 6) the incremented value.
    let PreDecrement = --n2;  // decrements n2 and returns(print 9) the decremented value.
    let postIncremented = n1++;  // returns(print 5) n1 and then increments it.
    let postDecremented = n2--;  // returns(print) n2 and then decrements it.

    console.table({sum, diff, product, quotient, remainder, PreIncrement, PreDecrement, postIncremented, postDecremented});
// Case 2
    let str1 = 4 + "7";     // first 4 converted to string and then concatenated with string "7". Result: "47"
    let str2 = "4" + 7;     // string "4" concatenated with ( 7  convert to string "7" ) "7"   . Result: "47"
    let str3 = 1 + "3" + 2; // first 1 converted to string and then concatenated with string "3" to give "13". Then "13" concatenated with ( 2 converted to string "2" ) "2". Result: "132"
    let str4 = 1 + 2 + "3"; // first 1 and 2 are added to give 3. Then 3 converted to string and concatenated with "3". Result: "33"
    let str5 = true + "3"; // boolean true converted to string "true" and then concatenated with string "3". Result: "true3"
    console.table({str1, str2, str3, str4});
// Case 3
   let fName = "Shabir";
   let lName = " Khan";
   let fullName = fName + lName; // concatenation of two strings
   console.log("Full Name : " + fullName); // Full Name : Shabir Khan

//case 4
   let isLogin = true;
   let inString2 = 3 + true + "0";  // first 3 add with +true(true convert into number 1 due to unary plus) and convert int string "4"  then concatenated with string "0" to give "40" 
   let inNumber = +isLogin;  // unary plus operator converts boolean true to number 1
   let inString1 = "5" + false; // first false converted to string "false" and then concatenated with string "5" to give "5false"
   let no1 = +"";// unary plus operator converts empty string to number 0
   let no2 = 56;
   let result = no1 + no2;
   console.table({isLogin , inString1 , inString2 , inNumber, no1, no2, result});

//Case 5
   let  lString = "shabir " - " khan"; // subtraction operator cannot be applied on string values so the result will be NaN ( Not a Number)
    // "Javascript" - 60 = NaN  (Not a Number );
   let nString = "50" - 20; // here "50" string converted to number 50 and then subtraction applied 50 - 20 = 30
   console.table({lString , nString});