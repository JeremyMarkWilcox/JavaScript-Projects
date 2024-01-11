// naming and initializing the function
 async function Calling_Loop() {
    // naming the variable and connecting it to thr HTML
    var loopie = document.getElementById("Loop");
    // This will initialize the counter
    var i = 1;

    // initializing the while loop
    while (i <= 5) {
        // Updates the content in the <p> element
        loopie.textContent = "Loop iteration: " + i;

        // This adds a small delat to see the change more clearly
        await sleep(1000); // this is in milliseconds, therefore one second

        // Increment the counter
        i++;
    }
}

// function to trigger the sleep/ delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// String Length Property Challenge
// It is a function to demonstrate the string's length

//name the function
function displayStringLength() {
    // Added a string value to the variable
    var iAm = "I am Machine, I never sleep!";

    var lengthOfMyString = iAm.length;
    // Display the length in an alert
    alert("The length of the string is: " + lengthOfMyString); //28 stringies
}

// For loop
// list of string variables
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
// Empty variable to take in the string values
var Content = "";
// Variable Y
var Y;
// for loop function
function for_Loop() {
    // It establishes that Y = 0
    // and then if Y is less than the total Instrument index then the loop continues and Y is incremented by 1
    // This iteration happens 7 times before Y > the Instrument index
    // there are 7 instruments but indexes begin at 0, 7 > 6
    for (Y = 0; Y < Instruments.length; Y++) {
    // Content is is equal to itself and the value on the right
    // Which is the current index of where the loop is present from 0 - 6 which are the strings in the Instrument variable
    Content += Instruments[Y] + "<br>";
    }
    // This takes the data from above and enters it into the HTML
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Arrays and Objects

// function name
function array_Function() {
    // assigning variable to an empty array, then list of arrays
    var familyPicture = [];
    familyPicture[0] = "playing inside with toys";
    familyPicture[1] = "swimming at Grandma's House";
    familyPicture[2] = "building a snowman";
    familyPicture[3] = "on vacation";
    // Connects to the HTML and adds the string below to it
    document.getElementById("Array").innerHTML = "In this picture, my family is " +
        // Here I choose index 1, and then it concatenates a " . " on the end
        familyPicture[1] + ".";
}


// const keyword assignment

// Object

const myObject = {
    name: "Jeremy",
    age: 36,
    city: "New York",
    state: "New York"
};

// function to display a string of the object property values

function constant_function() {
    var showMeTheString = "Name: " + myObject.name + "<br>" +
                          "Age: " + myObject.age + "<br>" +
                          "City: " + myObject.city + "<br>" +
                          "State: " + myObject.state;


// Displays String in the HTML
document.getElementById("Constant").innerHTML = showMeTheString;
}

function newLet() {
    let Jer = 5;
    document.getElementById("let").innerHTML = Jer;
}


// Return Statement

// function name, plus parameters a and b, defining the function
function addNumbers(a, b) {
    // variable that adds the two values, it is a placeholder code
    var sum = a + b;
    // return sum sends back the result to the calling code
    return sum;
} 
  
// Call the function and store the result in a variable named result
var result = addNumbers(3896, 555);

// display in the HTML
  document.getElementById("add").innerHTML = result;


// Output the result to the console
  console.log(result); // Output: 4451
  

// Creating an object using let

let Jer = {
    DoB:       "05/18/1988",
    species:   "human being",
    ethnicity: "Anglo Saxon",   
    ancestor:  "Alexander Hamilton",
    height:    "6 Feet",
    weight:    "200lbs",
    description: function() {
    return "Jer is a " + this.species + " of " + this.ethnicity + " descent, " + " from the family line of "
    + this.ancestor + "." + "<br><br>"
    + "Date of Birth: " + this.DoB + "<br><br>" 
    + "Height: " + this.height +  "<br><br>" 
    + "Weight: " + this.weight;
    }
};
document.getElementById("Jer").innerHTML = Jer.description();


// Break loop

// declaring variable
var i = 0;
// the loop continues as long as i is less than 10
while (i < 10) {
  // if i strictly equals 5 then the break statement will break the loo[]   
  if (i === 5) {
    break; // Break the loop when i is 5
  }
  document.getElementById("Break").innerHTML = i; // This will display 4 because that is the last number before the loop breaks
  console.log(i); // shows what happens better
  i++;
}


// Continue statement

// i = 1 and as long as i is less or equal to 5 then i will increment by 1
for (var i = 1; i <= 5; i++) {
    // Skip the loop iteration when i is 3
    if (i === 3) {
      // This documents the event that the third 3rd iteration is skipped
      console.log("Skipping iteration 3");
      // This tells the program to skip the 3rd iteration but also to continue the rest of the loop
      continue;
    }
    // Shows the iteration process
    console.log("Iteration: " + i);
  }