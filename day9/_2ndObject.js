// 2nd Part of Object in Javascript 
//two way to create Object
/*
const first =new Object(); // {}  this is singleton object 
const tinderUser = {

}; // {} this object literal
// there is no difference between them but one is singleton and second is object literal
*/

//Object in object
const tinderUser = {};
tinderUser.id = 123;
tinderUser.name = "shabir";
tinderUser.isLoggedIn = false;
console.log(tinderUser); // { id: 123, name: 'shabir', isLoggedIn: false }

let regularUser = {
      age : 45,
      fullName:{
        userName:{
            firstName :" shabir",
            lastName : "Ahmad"
        }
      }
}
console.log(regularUser.fullName); // { userName: { firstName: ' shabir', lastName: 'Ahmad' } }
console.log(regularUser.fullName.userName);  // { firstName: ' shabir', lastName: 'Ahmad' }
console.log(regularUser.fullName.userName.firstName);  //  shabir
console.log(regularUser.fullName.userName.lastName);  //  Ahmad

let obj1 = { 1:"a" , 2:"b"}
let obj2 = { 3:"c" , 4:"d"}
let obj3 = { 5:"e" , 6:"f"}

//Combine 
//1st Way
const obj4 = {obj1 , obj2 , obj3}
console.log(obj4); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' }, obj3: { '5': 'e', '6': 'f' }}

//2ND
const obj5 = Object.assign(obj1, obj2, obj3); 
console.log(obj5);// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
// Prefer This Below  trick
const obj6 = Object.assign({},obj1, obj2, obj3);
console.log(obj6);//  { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }  no difference b/w this and above one
// this empty Object {} is Our Target and obj1, obj2, obj3 is sours 

//3rd Way
const newObject = {...obj1,...obj2,...obj3}; // ... is spread rule
console.log(newObject); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// Object of Array
const user = [
    {
        id : 2324,
        name :" shabir" 
    },
    {
        location:"diKhan"
    },
    {
        age:33
    }

] 

console.log( user[0].id); //  2324
console.log( user[1].location); // diKhan
console.log(tinderUser);
console.log(Object.keys(tinderUser));//   [ 'id', 'name', 'isLoggedIn' ] show key of Object
console.log(Object.values(tinderUser));//  [ 123, 'shabir', false ]   show Values of Object
console.log(Object.entries(tinderUser));//  [ [ 'id', 123 ], [ 'name', 'shabir' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("name")) // true
// this is use to check this key are present in this Object or not
console.log(tinderUser.hasOwnProperty("location"));  // false (this is not exist in this object)
