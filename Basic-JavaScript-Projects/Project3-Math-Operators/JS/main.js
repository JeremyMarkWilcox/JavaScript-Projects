//------MATH---------------

//Addition---------------------
function addition_Function() {
    //removed the addition varible and instead gave each variable their own value
    var negativeTwentyFive = -25;
    var twenty = 20;
    //I could make a variable that handles the addition before the line below but the result would be the same, would just be adding one more variable name
    document.getElementById("negativeTotal").innerHTML = twenty + negativeTwentyFive;
  }
// Calling the function
addition_Function();

//Subtraction---------------------
function minus_Function() {
    //did the same as addition above
    var seven = 7;
    var eleven = 11;
    //If you reverse the numbers it will minus 7 - 11 = -4 (Note: Write math as normally read even when equation is on the left)
    document.getElementById("Sub").innerHTML = eleven - seven;
  }
// Calling the function
minus_Function();

//Multiplication---------------------
function timesNumbers() {
    //did the same as above
    var fifty = 50;
    var four = 4;
    //lets MULTIPLE!
    document.getElementById("Mult").innerHTML = fifty * four;
  }
// Calling the function
timesNumbers();

//Division---------------------
function dividNumbers() {
    //did the same as above
    var sixtyFour = 64;
    var thirtyTwo = 32;
    //lets Divide!
    document.getElementById("Divide").innerHTML = sixtyFour / thirtyTwo;
  }
// Calling the function
dividNumbers();

//A little of everything---------------------
function lotsofNumbers() {
    //You have to set the variables again even if it is the same name and number/value, I didn't change the names but if the functions had different meanings then you would definitely want to
    var sixtyFour = 64;
    var thirtyTwo = 32;
    var five = 5;
    var seventyOne = 71;

    //lets Do a little of everything!
    document.getElementById("LotofStuff").innerHTML = seventyOne + thirtyTwo - sixtyFour * five / thirtyTwo;
  }
// Calling the function
lotsofNumbers();

//Modulus Operator---------------------
function remainder() {
    //did the same as above
    var seventyEight = 78;
    var thirtyTwo = 32;
    //lets MODULATE hahaha!
    document.getElementById("Remain").innerHTML = seventyEight % thirtyTwo; //Result 14
  }
// Calling the function
remainder();

// Unary Operator(Negative)---------------------
function singleNegative() {
    //only one variable for the exercise
    var singleNumber = 9000;   
    //here we are adding a - (Negative operator to make the variable a negative operand)
    document.getElementById("Negative").innerHTML = -singleNumber;
  }
// Calling the function
singleNegative();

// Increment and Decrement Operators
var X = 125;
X++;
document.getElementById("Up").innerHTML = X;

var Y = 789;
Y--;
document.getElementById("Down").innerHTML = Y;

//Random
window.alert(Math.random() * 9000);

//Ceil
var J = 49.1; //This is a float number after Ceil it will be displayed as 50 because if a integer has a decimal after it then it will round to the next integer, this being 50
var JCeil = Math.ceil(J);
document.getElementById("Ceiled").innerHTML = JCeil;