// Concatenate Method
function Jer_Sentence() {
    var sen = "I ";
    var ten = "am the ";
    var ce = "best!";
    var jerCompleted = sen.concat(ten, ce);
    document.getElementById("Concatenate").innerHTML = jerCompleted;
}

// Slice Method the example 

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

// My Personal Slice Method

// the slice method initalization
function jerSlice_Method() {
    // Setting the variable to the string
    var jerSentence = "I am a computer programmer already, I just have more room for growth than some, I'll wait patiently until I am an established Senior Dev.";
    // Setting the variable for the result of the slice method that is slicing at the first(0) and ending the slice at the fifth index(4)
    var SectioningWords = jerSentence.slice(0,4); // this will result in " I am " when you push the button in the HTMl display
    // This makes the connection to the HTML file
    document.getElementById("JersSlicer").innerHTML = SectioningWords;
}

// toUpperCase() Method
// function name/ declaring
function changingCaps() {
    // Setting the string variable
    var lowerCaseWords = "i am machine, i never sleep!";
    // Setting the variable after the toUpperCase() method capitializes it all
    var alteringToUpper = lowerCaseWords.toUpperCase();
    // Connecting the result to the HTMl
    document.getElementById("LowerToUpper").innerHTML = alteringToUpper;
} 
// I declared the function after like it is good to do in some cases but 
// With this function it was triggering the result before you would pressing the button

// search() Method
// function name/ declaring
function letsFind() {
    // Setting the string variable
    var myAwesomeWords = "I climb trees for fun and side work!";
    // Setting the variable to the index of where the string "trees" begins
    // This is accomplished by using the search Method
    var trees = myAwesomeWords.search("trees");
     // Connecting the result to the HTMl
    document.getElementById("Trees").innerHTML = trees; //resulting in displaying 8, which is where the string "trees" starts
}

// toStrings() **Experiment**
// I tried to use an input to get the integer from the user
// I learned that whenever using input and .value method that the data type will always be a string and therefore the toString isn'y needed here
function stringInputValue() {
    var inputValue = document.getElementById("numberInput").value;
    var stringValue = inputValue.toString();
    document.getElementById("NewString").innerHTML = stringValue;
    // Comfirmed this with this code typeof
    console.log(typeof stringValue);
}

// toStrings

// function name
function String_Method() {
    // Setting the float Variable
    var X = 4567;
    // Converting the float number to a string using toString() then displaying in HTML
    var newX = document.getElementById("floatsToString").innerHTML = X.toString();
    // displaying the result of the data type in the console using typeof method
    console.log(typeof newX) // Confirmed that the data type is a String after conversion
}

// toPrecision

// function name
function Precision_Method() {
    // Declaring long float
    var myNum = 38545.463466663636363636663664643663
    // Reducing the float to 38545.5, it rounded it up, I thought that was neat, it is a string data type
    // the number used will begin targeting the numbers after the decimal point 
    // However the number you state is the total amount of numbers not just after the decimal point
    document.getElementById("ShotInTheDark").innerHTML = myNum.toPrecision(6);
}


// toFixed() 

// function name
function FixNums() {
    // Setting the variable to a float
    var num = 123.456789;
    // Using the toFixed() Method to create a fixed amount of decimals after the decimal point (Does not take the left numbers into account)
    var formattedNum = num.toFixed(2);
// Connecting back to the HTML and showing results, it returns a string not a float
document.getElementById("FixedNums").innerHTML = formattedNum;  // Output: "123.46" It rounds up as well
}

// valueOf()

// The valueOf() method  is used to retrieve the primitive value associated with an object 
// If the object has a specific implementation of the valueOf() method 
// That implementation can return a primitive value that might be of a different type.

// object name
var myObject = {
    value: 42,
    valueOf: function() {
      return this.value;
    }    
  }
    console.log( typeof myObject.valueOf());  // Output: 42, it is a number data type
    console.log(myObject + 8); 
  
 