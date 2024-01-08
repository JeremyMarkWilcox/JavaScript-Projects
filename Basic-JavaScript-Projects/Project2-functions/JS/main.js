//FUNCTION/KEYWORD, IDENTIFER, PARENTHESES, CURLY BRACKETS/SECOND ONE CONTAINS THE FUNCTION 
function updateContent() {
    
    var dad = "Dad ";
    var best = "is the best";

    
    var connector = dad + " " + best;

    //DOM IS THE OBJECT BEING EFFECTED, THE GET IS A METHOD TO GET THE OBJECT, OUTPUT IS THE ARGUMENT BEING PASSED, THE SETTER METHOD, MY CONCATENATED VARIABLE
    document.getElementById('output').textContent = connector;
  }

  // HERE I AM CALLING THE FUNCTION
  updateContent();

//------------------FUNCTION-BUTTON--------------------
//keyword, identifier  
function createButton() {
    //Keyword, identifier, assignment, premade method to assign the variable to it, it is passing back the button element from HTML
    var jerButton = document.createElement("button");
    //named variable, .innerHTML is setting the value of the variable to "Click me" so that we will view that over the button.
    jerButton.innerHTML = "Click me";
    //this gives the variable an id that CSS can target
    jerButton.id = "myButton";
    //the method takes an identifier, the next method gives the new identifier its traits
    document.getElementById("buttonContainer").appendChild(jerButton);
    //my variable is being tracked by this method and if the condition "click" is met on the designated button then the function alert is sounded off
    jerButton.addEventListener("click", function() {
        alert("Button clicked!");
    });
}

//CALLING 1-800-FUNCTION
createButton();

//----------- += ------------------------
function knowledge() {
    var sentence = "I am learning";
    sentence += " so much from this course!";
    document.getElementById("learn").innerHTML = sentence;
}