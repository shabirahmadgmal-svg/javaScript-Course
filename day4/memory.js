/*
   Memory management in JavaScript
   JavaScript handles memory allocation and deallocation automatically through garbage collection.
   Developers should understand how memory is managed to write efficient code.

   Types of Memory:
   1. Stack Memory : 
        Stack memory is a fast memory area where JavaScript stores simple values and function call information.
        static means that the memory for your variables is allocated at compile time.
         - Stores primitive data types (numbers, strings, booleans) and function calls.
    2. Heap Memory :
        Heap memory is a large memory area where JavaScript stores objects, arrays, and complex data.
        - Stores objects, arrays, and functions.
 */
// case 1 : Stack Memory Example
 let number1 = 25; // Stored in Stack Memory
 let number2 =number1; // Stored in Stack Memory
 number2 = 30; // Modifying number2 does not affect number1
 console.log(number1); // Output: 25
 /* in stack memory when we assign  the value of one variable to another, a copy of the value is created 
    and stored in a separate memory location. Therefore, modifying one variable does not affect the other.
 */
 // case 2 : Heap Memory Example
 let obj1 = { name: "Alice", age: 25 }; // Stored in Heap Memory
 let obj2 = obj1; // obj2 references the same object in Heap Memory
 obj2.age = 50; // Modifying obj2 affects THE obj1
 console.log(obj1.age); // Output: 50
 /* in heap memory when we assign the reference of one object to another variable, both variables point to the same memory location.
    Therefore, modifying the object through one variable affects the other.
 */