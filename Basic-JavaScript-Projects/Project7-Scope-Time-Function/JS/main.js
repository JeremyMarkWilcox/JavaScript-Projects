// Global Variable
var x = 50;
// Function showing that we have access to the global variable
function Adding() {
    // Sending the results (100) to the console
    console.log(x + 50);
}
// Calling the function so that is visable
Adding();

// Brief function to show a local variable
function With_Holding() {
    var hiddenNum = 87;
}
// Delcaring the function
With_Holding();

/* Attempting to access the variable from the local scope of the function above, It is muted out to run the other code
function Attempting_To_Retrieve() {
   console.log(hiddenNum - 43);
};

Declaring the function
Attempting_To_Retrieve (); // Which was an expected failure
*/

/* Function cannot be captialized when used, must be function with a lowercase

Function Wrong_Syntax() {
    var oppies = "Better luck next time!"
}
*/

// If statment

// Function that changes the greeting based on the current time
function flexibleGreeting(hours) {   
    // variable, new instance of a pre-made Object Date() and it uses a pre-made method .getHours();
    var currentTime = hours !== undefined ? hours : new Date().getHours();
    // A variable to connect the "Greeting" Id to the HTML
    var greetingsMortal = document.getElementById("Greeting");
    // if is setting a condition if it is before noon or 12pm then the "Good morning!" message displays
    if (currentTime < 12) {
        greetingsMortal.textContent = "Good morning!";
    // else if will trigger when the "if statement" doesn't 
    // If the "else if" fullfils the requirements the "if statement" will end, otherwise it will trigger the "else statement"
    // If the "if statement" reaches this point then it is pass 12:00/ 12pm
    // But before 18:00 or 6pm then the afternoon message will be displayed
    } else if (currentTime < 18) {
        greetingsMortal.textContent = "Good afternoon!";
    // When the program reaches else it will display or trigger whatever event it has
    // In this case it is because it is past 18:00 or 6pm but that is only because of the "if" and "else if" conditions
    // Else functions have no condition connected to them so there is no processing, when it reaches this point it will return this value
    } else {
        greetingsMortal.textContent = "Good evening!";
    }
  }
  
  // Calls the function
  flexibleGreeting();

  function updateGreeting() {
    var inputTime = document.getElementById("InputTime").value;
    console.log("Input Time:", inputTime);
    
    // Check if the inputTime is in the format HH:mm
    if (/^\d{2}:\d{2}$/.test(inputTime)) {
        var hours = parseInt(inputTime.split(":")[0], 10);
        flexibleGreeting(hours);
    } else {
        alert("Please enter a valid time in the format HH:mm.");
    }
}



// "How many dogs you got?" function
function dogInquiry() {
    // Get the input value and convert it to a number
    var numberOfDogsInput = document.getElementById("numberOfDogsInput").value;
    var numberOfDogs = parseInt(numberOfDogsInput, 10);

// Variable 'numberOfDogs' holds the number of dogs someone has
    var dogsElement = document.getElementById("Dogs");

    // If statement to provide feedback based on the number of dogs
    if (isNaN(numberOfDogs)) {
        dogsElement.textContent = "Please enter a valid number.";
        }if (numberOfDogs === 0) {
            dogsElement.textContent = "No dogs? Consider adopting a furry friend!";
        } else if (numberOfDogs === 1) {
            dogsElement.textContent = "One loyal companion! Enjoy your time together.";
        } else if (numberOfDogs <= 2) {
            dogsElement.textContent = "A pair of dogs! That's wonderful.";
        } else if (numberOfDogs === 3) {
            dogsElement.textContent = "Three's a charm! Great company.";
        } else if (numberOfDogs >= 4 && numberOfDogs <= 5) {
            dogsElement.textContent = "A handful of dogs! That's fantastic.";   
        } else if (numberOfDogs >= 6) {
            dogsElement.textContent = "That's too many mutts! Are you running a doggy shelter?";
        } else {
            dogsElement.textContent = "Invalid input. Please enter a valid number of dogs.";
    }
}

// Else if assignment

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time > 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}