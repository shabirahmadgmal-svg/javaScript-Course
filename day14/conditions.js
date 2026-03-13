// Conditions 

//Operators use in conditions
// 1. Comparison operators
   // ==, ===, !=, !==, >, <, >=, <=
// 2. Logical operators
    // &&, ||, !
// 3. Ternary operator
  // ? : 
// 1. If statement
let age = 18;
if(age >= 18){
    console.log("You are eligible to vote");
}
if (true){
    console.log("This is true");
}
if(2>="2"){
    console.log("This is true");
}

// if else statement
let age1 = 17;
if(age1 >= 18){
    console.log("You are eligible to vote");
}else{
    console.log("You are not eligible to vote");
}

// if else if statement
let age2 = 20;
if(age2 < 18){
    console.log("You are a minor");
}
else if(age2 >= 18 && age2 < 60){
    console.log("You are an adult");
}
else{
    console.log("You are a senior citizen");
}

