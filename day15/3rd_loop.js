//Do while Loop
/*
A do...while loop is used when you want the code to run at least one time, and the 
condition is checked after the code runs.
1.while loop → checks the condition first, then runs the code.
2.do...while loop → runs the code first, then checks the condition
 */

let i = 0;
do {
  // console.log(`${i}`);
   i++; 
} while (i<=5);// print values upto 5

// Check for while condition is false for first checking

let j = 11;
do {
    console.log( `${j}`);
   j++; 
} while (j<=10);// print  11 
/*
The code inside do loop  runs first print value of j = 11.
Then the condition j <= 10 is checked.
Since the condition is false, the loop stops.
 */

