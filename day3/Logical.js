
/* Logical Operators in JavaScript
   def : Logical operators are used to combine conditions or reverse a condition
 */
// Case 1 : Logical AND (&&) Operator
    let age = 25;
    let hasDrivingLicense = true;
    let isEligibleToDrive = (age >= 18) && hasDrivingLicense;// both conditions are true so isEligibleToDrive will be true
    console.log("Is Eligible to Drive (AND) : " + isEligibleToDrive); // true

// Case 2 : Logical OR (||) Operator
  let name = "SHABIR KHAN";
  let fullNmae = (name ==="SHABIR KHAN") || (name) === "Shabir"; // first condition is true so fullNmae will be true
  console.log("Is Full Name (OR) : " + fullNmae); // true

// Case 3 : Logical NOT (!) Operator
  let marks = 45;
  let passed = !(marks < 30); // marks < 30 is false so !false will be true
  console.log(" Passed  : " + passed); // true

// Case 4 : Combining Logical Operators
  let temprature = 22;
  let isRany = false;
  let rainWater = (temprature > 20) && isRany; // first condition is true and second condition is false so rainWater will be false
  console.log(" Is there rainwater : " + rainWater); // false

// Case  5  all Logical Operators together
  let isWeekend = true;
  let isHoliday = false;
  let canRelax = (isWeekend || isHoliday) && !(temprature < 15); // (true || false) && !false ==> true && true ==> true
  console.log(" Can Relax : " + canRelax); // true

//CASE 6 Logical Assignment Operators
  let n = 5;
  let m = 10;
  n &&= m; // n contain truthy value so m assigned to n
console.log("Value of n after Logical AND Assignment : " + n); // 10
  m ||= 5; // m not contain  falsyt value so left value not assigned to m
console.log("Value of m after Logical OR Assignment : " + m); // 10
    let isActive = false;
    isActive ??= true; // isActive not contain falsyt value so left value not assigned to isActive 
    //this operator only check for null or undefined value
console.log("Value of isActive after Nullish Coalescing Assignment : " + isActive); // false
