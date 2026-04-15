// For...of Loop
/*
    definition: it is special type of loop which is used to iteration on some special datatype like array, string, 
    arguments object. 
 */
let number = [1, 3, 8, 5, 6, 2, 1, 3];

for (const n of number) {
    // console.log(` number is ${n}`);    
}
//output : prints all number with (number is) in front of it.

let address = 'i am from dera ismail khan';
for (const addr of address) {
    // console.log(` address is ${addr}`);    
}
/*Output:address is i
address is 
address is a
address is m
address is 
address is f
......
*/

let arr = [
    {
        name:'ali',
        age:23
    },
   {
         name:'anees',
        age: 24
    },
    {
         name:'Arshad',
        age: 28
    }
];

for (const obj of arr) {
    // console.log(obj);  
}
/*Output:
{ name: 'ali', age: 23 }
{ name: 'anees', age: 24 }
{ name: 'Arshad', age: 28 }
 */

//use of return in for of loop
let arr2 = [1, 3, 8, 5, 6, 2, 1, 3];
for (const num of arr2) {
    if (num === 5) {
        return num;// it will return 5 and break the loop
        //break;// it will return 5 and break the loop
    }
    console.log(num);   
}
//Output : 1,3,8
