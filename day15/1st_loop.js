/* Loops
 definition: loops are used to repeat a block of code until a specified condition is met.
 or 
    a loop is a programming structure that allows you to repeat a block of code multiple times based
    on a condition. It helps to automate repetitive tasks and can be used to iterate over data 
    structures, perform calculations, or execute a set of instructions until a certain condition is met.
Or 
this loop is used when we know number of iteration and we want to repeat a block of code for a 
specific number of times.
    types of loops:
1. for loop
2. while loop
3. do while loop
4. for...in loop
5. for...of loop
6. forEach loop
etc
*/
/* FOR LOOP
 syntax:
for(initialization; condition; increment/decrement){
    // code to be executed
}
*/
for(let i=0; i<5; i++){
   // console.log(`the Value id ${i}`);
}

//table of 2
for(let i=1; i<=10; i++){
   // console.log(`2 x ${i} = ${2*i}`);
}

//table of 5
for(let i=1; i<=10; i++){
    //console.log(`5 x ${i} = ${5*i}`);
}

//for array
let fruits = ["apple", "banana", "orange", "grape", "mango"];
for(let i =0 ; i<fruits.length; i++){
   // console.log(fruits[i]);
}

//use of break and continue in for loop
//break statement is used to exit the loop when a certain condition is met
for(let i = 0; i<10 ; i++){
    if(i==5){
       // console.log(`${i} is detected `);
        break;// Exit the loop when 5 is detected
    }
    //console.log(` value id ${i}`); 
}

//continue statement is used to skip the current iteration of the loop when a certain condition is met
for(let i = 0; i<10 ; i++){
    if(i==5){
      // console.log(`${i} is detected `);
        continue;
    }
    //console.log(` value id ${i}`); // Skip 5 number
}

// nested loop
for (let i = 0; i < 5; i++) {

    // console.log(`outer loop ${i}`);
      for (let j = 0; j < 5; j++) {
        //console.log(`inner loop j= ${j} and outer loop i = ${i}`);        
      }
    
}
// array undefined index
let arr = [1,2,3,4,5,6,7];
for(let i = 0; i<=arr.length; i++){
    console.log(`values at index ${i} is ${arr[i]}`);
   // the index 7 is out of bounds for the array, it will return undefined 
}