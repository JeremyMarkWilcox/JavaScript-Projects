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