// Scopes In Javascript
let a = 5;
const b = 7;
var c = 9;
//console.log("a : ",a,"b : ",b,"c : ",c); // a :  5 b :  7 c :  9 

var k = 120;
if(true){
  let i = 5;
  const j = 7;
  var k = 9;
}
// console.log(i);  // i is not defined
// console.log(j);  // j is not defined
//console.log(k); // 9
// due to this cause all of javascript not prefer use of var keyword

function increment(num){
    return num + 9;
}
//console.log(increment(5)); // 14
;
function decrement(num){
    return num - 1;
}
//console.log(decrement(10)); // 9

// notes

console.log(myName("Shabir"));

function myName (name){
    return "My Name Is " + name; // My Name Is Shabir
}

// marks(500); //marks is not defined
// because this function is store in a variable name " result " in this situation we print the value of result before it declare
let result = function(num){
    return num;
}

