//Switch statement
// swithc use to perform different actions based on different conditions
// syntax
/*switch(expression){
    case value1:
        // code to be executed if expression === value1 
        break;
    case value2:
        // code to be executed if expression === value2
        break;
    case value3:
        // code to be executed if expression === value3
        break;  
    default:
        // code to be executed if expression doesn't match any case
}
*/
// example  
let day = "Monday";
switch(day){
    case "Monday": 
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;  
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Question : Write a switch statement to check the grade of a student based on their marks and print the corresponding grade
let marks = 85; 
switch(true){   
    case marks >= 90 && marks <= 100:
        console.log("Grade A");
        break;  
    case marks >= 80 && marks < 90:
        console.log("Grade B");
        break;
    case marks >= 70 && marks < 80:
        console.log("Grade C");
        break;
    case marks >= 60 && marks < 70:
        console.log("Grade D");
        break;
    case marks >= 0 && marks < 60:
        console.log("Grade F");
        break;  
    default:
        console.log("Invalid marks");
}

//  when we note the break statement in switch case then it will execute all the cases after the
//  matching case until it finds a break statement or reaches the end of the switch statement
//except default case because it is executed when no matching case is found and it is not necessary
//  to have a break statement in default case because it is the last case in the switch statement

let day1 = "Monday";
switch(day1){
    case "Monday":  
    case "Tuesday":
    case "Wednesday":
    case "Thursday":    
    case "Friday":
        console.log("Today is a weekday");
    case "Saturday":
    case "Sunday":
        console.log("Today is a weekend");
    default:
        console.log("Invalid day");
}
/*  OUTPUT:
Today is a weekday
Today is a weekend
Invalid day
*/
let day2 = "Monday";
switch(day2){
    case "Monday":  
    case "Tuesday":
    case "Wednesday":
    case "Thursday":    
    case "Friday":
        console.log("Today is a weekday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Today is a weekend");
    default:
        console.log("Invalid day");
}
/*  OUTPUT:
Today is a weekday
*/
