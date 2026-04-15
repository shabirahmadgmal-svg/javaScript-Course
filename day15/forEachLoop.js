/*For Each Loop 
Def: it is used to execute element of an array one by one.
its take a callBack function as an argument and execute the code for each/every element of the array. 
its cannot change the original array but it can change the value of the element of the array.
*/
let marks = [34, 56, 78, 90, 78, 67];
marks.forEach(function (m){
    // console.log(m);
})
//Output :34, 56, 78, 90, 78, 67

marks.forEach((m)=>{
    // console.log(m);
})
//Output :34, 56, 78, 90, 78, 67

let objectsArray = [
    {
        name:'shabir',
        age:20
    },
    {
        name:'Anees',
        age:23
    },
    {
        name:'Arshad',
        age:28
    }
];

objectsArray.forEach((element) => {
    // console.log(element); // it will print all the objects of the array one by one
});
/*Output: 
    { name: 'shabir', age: 20 }
    { name: 'Anees', age: 23 }
    { name: 'Arshad', age: 28 }
 */
objectsArray.forEach( (a) => {
    // console.log(`name is ${a.name} and age is ${a.age}`); // it will print name and age of all objects of the array one by one  
})
/*Output: 
  name is shabir and age is 20
  name is Anees and age is 23
  name is Arshad and age is 28
*/


// Not Return value in forEach loop
let arr = [1, 3, 8, 5, 6, 2, 1, 3];
let result = arr.forEach( (num) => {
    console.log(num);//it will print all the number of array one by one and return undefined
})
//Output : 1, 3, 8, 5, 6, 2, 1, 3
console.log(result);
//output : undefined