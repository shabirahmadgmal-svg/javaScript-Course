/*  String in  javascript

    -string concatenation
    -pre defined string methods
 */
//case 1: string concatenation
let firstName = "Shabir";
let lastName = " Khan";

// string concatenation
let fullName = firstName + lastName;
console.log("Full Name:", fullName); // Output: Full Name: Shabir Khan
//this is old way of concatenation.

// case 2: pre defined string methods
let statement = new String("  javaScript is the most-popular-programing-language in the world%20 .  ");
console.log("Original Statement:", statement);

// 1. length property
console.log("Length of Statement:", statement.length); 
// Length function used to find the length of the string
// Output: Length of Statement: 59

// 2. toUpperCase() method
console.log("Uppercase Statement:", statement.toUpperCase()); 
//toUpperCase function used to convert the string to uppercase
// Output: Uppercase Statement:  JAVASCRIPT IS THE MOST-POPULAR-PROGRAMING-LANGUAGE IN THE WORLD%20 .

// 3. toLowerCase() method
console.log("Lowercase Statement:", statement.toLowerCase());
 // tolowerCase function used to convert the string to lowercase
// Output: Lowercase Statement:  javascript is the most-popular-programing-language in the world%20 .

// 4. trim() method
console.log("Trimmed Statement:", statement.trim());
 // trim function used to remove whitespace from start and end of the string
// Output: Trimmed Statement: javaScript is the most-popular-programing-language in the world%20 .
// it has two part strimstart() and strimend()

// 5. replace() method
console.log("Replaced Statement :", statement.replace('programing', 'Computer'));
// replace use to change a word or space in a string
// Output: Original Statement after trim():   javaScript is the most-popular-Computer-language in the world%20 .

//6. Include() method
console.log("Includes Statement:", statement.includes('javaScript'));
// include method use to check the word is present in string or not
// Output: Includes Statement: true

// 7. indexOf() method
console.log("Index of Statement:", statement.indexOf('20'));
// indexOf method use to find the index of a word or character in a string
// Output: Index of Statement:  66

// 8. EndsWith() method
console.log("EndsWith Statement:", statement.trim().endsWith('.'));
// endsWith method use to check the string ends with a specific word or character
// Output: EndsWith Statement: true
//because after trim(remove whitespace in start and end of statement) the string ends with '.'

// 9.substring() method
console.log("Substring Statement:", statement.substring(2, 15));
// substring method use to extract a part of the string between two specified indices
// Output: Substring Statement: javaScript is


//10. slice() method
console.log("Slice Statement:", statement.slice(65, statement.length));
// slice method use to extract a part of the string between two specified indices
// Output: Slice Statement: javaScript is   

//11.split() method
console.log("Split Statement:", statement.split(' '));
// split method use to split the string into an array of substrings based on a specified separator
// Output: Split Statement: [ '  javaScript', 'is', 'the', 'most-popular-programing-language', 'in', 'the', 'world%20', '.' ]

//12 .charAt() method
console.log("Character at Statement:", statement.charAt(2));
// charAt method use to get the character at a specified index in the string
// Output: Character at Statement: j

// etc
/*
    1. anchor()
    2. at()
    3. big()
    4. blink()
    5. bold()
    6. charAt()
    7. charCodeAt()
    8. codePointAt()
    9. concat()
    10. constructor()
    11. endsWith()
    12. fixed()
    13. fontcolor()
    14. fontsize()
    15. includes()
    16. indexOf()
    17. isWellFormed()
    18. italics()
    19. lastIndexOf()
    20. length
    21. link()
    22. localeCompare()
    23. match()
    24. matchAll()
    25. normalize()
    26. padEnd()
    27. padStart()
    28. repeat()
    29. replace()
    30. replaceAll()
    31. search()
    32. slice()
    33. small()
    34. split()
    35. startsWith()
    36. strike()
    37. sub()
    38. substr()
    39. substring()
    40. sup()
    41. toLocaleLowerCase()
    42. toLocaleUpperCase()
    43. toLowerCase()
    44. toString()
    45. toUpperCase()
    46. toWellFormed()
    47. trim()
    48. trimEnd()
    49. trimLeft()
    50. trimRight()
    51. trimStart()
    52. valueOf()
    53. [Symbol.iterator]()
*/