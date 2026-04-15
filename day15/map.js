/* Map Method 
  Def :it is used to execute element of array one by one and return a new array with the result of the callback function.
  it takes a callback function as an argument and execute the code for each element of the array and return a new array .
  it does not change the original array but it can change the values of the element of the array.
*/
let number = [1, 6, 4, 2, 8, 5 ];
let newArr = number.map( function (n){
    // console.log(n); // it will print all the number of array one by one and return a new array with the result of 
    // callback function .;
    return n*2;    
})
//Output: 1 6 4 2 8 5

// console.log(newArr);
//output : [ 2, 12, 8, 4, 16, 10 ]

let Snames = new Map();
Snames.set(1, 'Shabir');
Snames.set(2, 'shahid');
Snames.set(3, 'Anees');

// For Of Loop
for (const key of Snames) {
    console.log(key); 
}
/*Output: 
[ 1, 'Shabir' ]
[ 2, 'shahid' ]
[ 3, 'Anees' ]
*/

// For In Loop
for (const k in Snames) {
      console.log(k);// it will not return anything because it map is not an object it is a collection
      //  of key values pairs and it dose not have index like array and object.     
}
// Output : not output 