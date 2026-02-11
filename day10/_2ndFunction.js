//      Case 1 
function number(num){
    return num;
}

console.log(number(5)); // 5
console.log(number(5,6,7));//only 5 will be printed because we have only one parameter in function

function calculateCardPrice(...num){
    return num;   
}
console.log(calculateCardPrice(100, 200, 600, 340, 120));// [ 100, 200, 600, 340, 120 ]
/*
    function calculateCardPrice(val1, val2, ...num){
    //this three dots is called rest operator and it will take all the remaining values and assign to num as an array
    return num;   
     }
   console.log(calculateCardPrice(100, 200, 600, 340, 120));// [ 600, 340, 120 ]
//Because we have 2 parameters before rest operator so first 2 values will be assigned to val1 and val2 and rest of the values will be assigned to num
*/

//Cae 2 Array in Function
let arr1 = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10];
function printValue(anyArray){
    // AnyArray is a parameter and it will take the value of arr1 when we call the function
    //Any Type OF Array Can Be Passed In Function And It Will Return The Value Of That Array
    return anyArray[3];
}

console.log(printValue(arr1)); // 4

//pass diesctly array in function
console.log(printValue([11, 12, 13, 14, 15, 45, 67, 34])); // 14

//Case 3 Object in Function
let user = {
    name: "Shabir Ahmad",
    age: 20,
    city: "Dera Ismail Khan"
}

function printObject(Anyobject){
    console.log(`My Name Is ${Anyobject.name} and Age Is ${Anyobject.age} and I Live In ${Anyobject.city}`);
}

printObject(user); // My Name Is Shabir Ahmad and Age Is 20 and I Live In Dera Ismail Khan

//Case 4 Directly Object In Function
printObject({
    name :" Shbair Ahmad",
    age : 20,
    city : "Dera Ismail Khan"
}) 
// Output :  My Name Is  Shbair Ahmad and Age Is 20 and I Live In Dera Ismail Khan

//Case 5 Function In Function   
function outerFunction(){
    console.log("This Is Outer Function");
    function innerFunction(){
        console.log("This Is Inner Function");
    }
    innerFunction(); 
    // Twe call The Inner Function Inside Outer Function So It Will Execute When We Call Outer Function
    /*
       When We Call The Outer Function It Will Execute The Code Inside It 
       And When It Comes To Inner Function It Will Execute That Function
       As Well Because We Called It Inside Outer Function
    */
}
console.log(outerFunction());
/*
Output :
   This Is Outer Function
   This Is Inner Function
   undefined (Because We Are Not Returning Anything From Outer Function So It Will Return Undefined)
*/
