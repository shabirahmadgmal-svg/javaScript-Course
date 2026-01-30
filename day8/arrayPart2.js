// Array 2nd Part
// Use Of Array In Array 
const students = ["shabir"," Anees","Mustafa","Arshad"];
const teacher = ["Muzafar","Ahsan","Fasil"];
/* 
   Def : adds whatever you pass to it as a single element, even if that value is an array.
   Mutates the original array
   Returns the new length of the array
   Faster when you want to update an existing array
 */
 students.push(teacher);
 //console.log(students); // [ 'shabir','Mustafa',[ 'Muzafar', 'Ahsan', 'Fasil']]

/* 
   def : Combines arrays or values and returns a new array.
   Does NOT change the original array
   Returns a new array
   Better when you want immutability
 */

   let newArray = students.concat(teacher);
//   console.log(newArray);//['shabir',' Anees','Mustafa','Arshad','Fasil']

let  n1 = [1,2,3,4];
let  n2 = [5,2,7];
let  n3 = [9,6,1,0,5,2];

let sumOfArray = [...n1,...n2,...n3,"Shabir"];
 console.log(sumOfArray);//  [ 1, 2, 3, 4, 5, 2, 7, 9, 6, 1, 0, 5, 2, 'Shabir' ]

const complexArray = [1,4,7,9,[5,8,3,[6,8,9]]];
let arrangeArray = complexArray.flat(1); // flat Array on dept level 1(only remove the first Square [] in outer Array)
console.log(arrangeArray);//   [ 1, 4, 7, 9, 5, 8, 3, [ 6, 8, 9 ] ]

let arrangeArray2 = complexArray.flat(2);// flat Array on dept level 2(only remove the first,second Square [] in outer Array)
console.log(arrangeArray2);  // [1, 4, 7, 9, 5, 8, 3, 6, 8, 9]

let arrangedArray3 = complexArray.flat(Infinity);// no need to give the correct dept of array when we flat complete complex array into simple array
console.log(arrangedArray3);//   [1, 4, 7, 9, 5, 8, 3, 6, 8, 9] 

console.log(Array.isArray("Hitash")); // false (use to check this is array or not )
console.log(Array.isArray(sumOfArray)); // true

//Creates an array from an array-like or iterable object.
console.log(Array.from("SHABIR")); // [ 'S', 'H', 'A', 'B', 'I', 'R' ]

console.log(Array.from({ name: " Shabir"})); //  []
// We did not specify what to create the array from.Since a plain object has keys and values, we must explicitly choose
// whether to create the array from keys, values, or entries.

console.log(Array.from(Object.values({ name: " Shabir"}))); // [ ' Shabir' ]  only value 
console.log(Array.from(Object.keys({ name: " Shabir"}))); //   [ 'name' ]  only key
console.log(Array.from(Object.entries({ class : 5}))); //[ [ 'class', 5 ] ] both key and value


// Creates an array from the arguments you pass.
console.log(Array.of(n1,n2,n3)); // [ [ 1, 2, 3, 4 ], [ 5, 2, 7 ], [ 9, 6, 1, 0, 5, 2 ] ]



