// While Loop
/* A while loop is a control flow statement that allows code to be executed repeatedly based on a given
 boolean condition. The loop will continue to execute as long as the condition evaluates to true. 
 If the condition is false at the beginning, the code inside the loop will not execute at all.
 Or 
  this loop is use when itration is not known and we want to repeat a block of code until a certain 
  condition is met.
*/ 
let i = 0;
while (i<10) {
   // console.log(`value is ${i}`);
    i++; 
}

//table of 2
let j = 1;  
while(j<=10){
    //console.log(` 2 x ${j} = ${j*2}`);
    j++;
}


// array 
let number = [1,6,8,2,9,32,0,4,6,3,7,3];
let k = 0;
while(number[k] != 0){
   // console.log(`the value is ${number[k]}`);
    k++;
}// values in number[] prints = 1,6,8,2,9,32 



let marks = [23,56,768,45,34,23,435,5,67];
let n = 0 ;
while(n < marks.length -2)
{
    console.log(`value in marks array is ${marks[n]}`);  
    n++; 
} //  23,56,768,45,34,23,435 