// Destructing  of Objects
let student = {
    name : "shabir",
    age : 33,
    isLoggedIn : false
}
//simple way 
student.name;//shabir
console.log(student.name); //shabir

//Destructing way

let {isLoggedIn} = student;

console.log(isLoggedIn);// false

let {isLoggedIn : log} = student; // here we are changing the name of variable isLoggedIn to log
console.log(log); // false

//API data
//API data is in the form of object and we can use destructing to get the data from API
const APIData = {
    id : 123,
    name : "shabir",
    age : 33,
    isLoggedIn : false
}

let {id, name} = APIData;
console.log(id); // 123
console.log(name); // shabir

//object in Array
let users = [
    {
        id : 2324,
        name :" shabir"
    },
    {  
        age:33
    },
    {
        location:"diKhan"
    }
]
console.log(users[0].name); // shabir