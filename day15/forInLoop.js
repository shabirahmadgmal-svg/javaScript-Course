/* For...in Loop 
  Def: it is used to iterate over the properties of an object. It allows you to access the keys of an object one by one.
  its also works with arrays but it is not recommended to use for...in loop with arrays.
*/
//with Object
let person = {
    name:'shabir',
    age:20,
    city:'rawalpindi',
    Ispass:true
};
for (const key in person) {
//   console.log(key) // it will prints only keys of the  object 
}
//Output: name, age, city, Ispass

for (const key in person) {
    // console.log(`${key}: ${person[key]}`); // it will print key and values of object
}
/*Output
    name: shabir,
    age: 20,
    city: rawalpindi,
    Ispass: true
 */

    //With Array
    let arr = [1, 2, 3, 4, 5, 6, 7, 8 ];
    for (const no in arr) {
        //  console.log(no); // its will print the index of the array not the values of the array 
    }
    //Output: 0,1,2,3,4,5,6,7
   for (const element in arr) {
       console.log(`index : ${element} and Value : ${arr[element]}`); //it will print the index and values of the array      
   }
/*Output:
index : 0 and Value : 1
index : 1 and Value : 2
index : 2 and Value : 3
index : 3 and Value : 4
index : 4 and Value : 5
index : 5 and Value : 6
index : 6 and Value : 7
index : 7 and Value : 8
 */