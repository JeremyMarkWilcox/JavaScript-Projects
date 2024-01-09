//Type of Operator

//Variables
var Words = "King Jeremy, the Wicked!";

var num = 7;

var numF = 7.5;

var liar = false;

var zero = null;

var unknown = undefined;


// Use typeof operator to display the data type
document.write("Data Type: " + typeof Words + "<br><br>");

document.write("Data Type: " + typeof num + "<br><br>");
//Doesn't verify that the number is a Float, I just read in the course that all JS numbers are Float point numbers
document.write("Data Type: " + typeof numF + "<br><br>");

document.write("Data Type: " + typeof liar + "<br><br>");
//Apparently Null is an object as well, from what I read it is a mistake in the language
document.write("Data Type: " + typeof zero + "<br><br>");

document.write("Data Type: " + typeof unknown + "<br><br>");

// NaN, Infinity, -Infinity

function my_function() {
    // NAN
    document.getElementById("Test").innerHTML = 0/0;
    // True
    document.getElementById("Test1").innerHTML = isNaN("This is a String");
    // False
    document.getElementById("Test2").innerHTML = isNaN("007");
    // Infinity
    document.getElementById("Test3").innerHTML = (2E310);
    // -Infinity
    document.getElementById("Test4").innerHTML = (-2E310);
};

// Boolean

// The variables
var X = 124;
var Y = 45;

// Greater Than Symbol
var isGreaterThan = X > Y;
// Less Than Symbol
var isLessThan = X < Y;
function myPlaceHolder() {
document.getElementById("Great").innerHTML = (isGreaterThan); //true

document.getElementById("Less").innerHTML = (isLessThan); //false
}

// Using console.log to show math
var x = 100;
var y = 52;

// Addition
console.log("Addition:", x + y);

// Subtraction
console.log("Subtraction:", x - y);

// Multiplication
console.log("Multiplication:", x * y);

// Division
console.log("Division:", x / y);

// Modulus (Remainder)
console.log("Modulus:", x % y);


// Using console.log to show Boolean

console.log("GreaterThan:", x > y);

console.log("LessThan:", x < y);

// Using console.log to show ==

// Below is false
console.log("Is x and y equivalent? :", x == y);
// Below is true
console.log("Is x and y + 48 equivalent? :", x == y + 48);

// Using console.log to show ===


var eightyTwo = 82;
var theSameNum = 82;
var thirtyFive = "Thirty Five";
var sameButNum = 35;
var thirtyTwo = "Thirty Two";

// 1) a. Return true, same data type and value
console.log("The Data Type and Value are equal: ", eightyTwo === theSameNum);
// 1) b. Return false, different data type and value
console.log("The Data Type and Value are equal: ", eightyTwo === thirtyFive);
// 1) c. Return false, different data type but the same value
console.log("The Data Type and Value are equal: ", thirtyFive === sameButNum);
// 1) c. Return false, same data type but different value
console.log("The Data Type and Value are equal: ", thirtyFive === thirtyTwo );


// Logical Operators AND && , OR || , NOT !

// && both sides of the && must be true in order to recieve the result, in this case true
console.log("The answer is: " , (eightyTwo >= theSameNum && 32 <= sameButNum));

// && both sides of the && must be true in order to recieve the result, in this case false
console.log("The answer is: " , (eightyTwo <= theSameNum && 32 >= sameButNum));

// || only one side needs to be true for a true result, the result below will be true because 82 is <= to 82 || 32 is not >= to 35 but that's okay only one needs a true result
console.log("The answer is: " , (eightyTwo <= theSameNum || 32 >= sameButNum));

// || if both are false like below then it results in a false answer
console.log("This answer is: " , ( 92 == 34 || 67 == 88));


// ! The example switches back to the HTML to display the answer

// This function will display true because the ! operator is a false and 3000 is not greater than 9000 so in this case two wrongs do make a right or true result
function double_Negative_Function() {
    document.getElementById("NotNot").innerHTML = !(3000 > 9000);
}
// This function will display false because the operator is a f, and the answer to the equation is t. And a false and true = false
function notNot_Function() {
    document.getElementById("Not").innerHTML = !(3000 < 9000);
}

//In case none of the other exercises counted here is an expression with String and Number data types

// String variable
var stringText = "The answer is: ";
// Operand variable
var numberValue = 42;
// using the + Operator to make an expression
var result = stringText + numberValue;
// putting the result in the console
console.log(result); // Output: "The answer is: 42"