// switch statement

// function name
function TV_Function() {
    // Naming the variable to take in the tv show name and the tvString
    var tvOutput;
    // Connects to HTML
    var tv = document.getElementById("TV_Input").value;
    // A string added to the result
    var tvString = " is an amazing Television Program!";
    switch(tv) {
        case "Succession":
            tvOutput = "Succession" + tvString;
        break;
        case "Squid Game": 
            tvOutput = "Squid Game" + tvString;
        break;
        case "The Mandalorian":
            tvOutput = "The Mandalorian" +tvString;
        break;
        case "The Witcher":
            tvOutput = "The Witcher" + tvString;
        break;
        case "Wednesday":
            tvOutput = "Wednesday" + tvString;
        break;
        case "The Crown":
            tvOutput = "The Crown" + tvString;
        break;
        case "Stranger Things":
            tvOutput = "Stranger Things" + tvString;
        break;
        default:
        tvOutput = "Please enter a tv show listed above."
    }
    document.getElementById("Output").innerHTML = tvOutput;
}

// GetElementsByClassName

function Only_One_Id() {
    var J = document.getElementsByClassName("Click");
    J[0].innerHTML = "I have made all things new!";
}

// 

// using the event for the document
document.addEventListener("DOMContentLoaded", function() {
    // Get the canvas element
    var canvas = document.getElementById("ID_Name");
  
    // if statement to run the program if it doesn't run properly there is an else statement to display the fact
    if (canvas.getContext) {
      // Get the 2D rendering context
      var ctx = canvas.getContext("2d");
      
       // Create a linear gradient

    // setting the gradient variable to the dimensions of the square
    var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    // setting the background-color inside of the canvas
    gradient.addColorStop(0, "red");
    gradient.addColorStop(0.5, "yellow");
    gradient.addColorStop(0.8, "blue");

    // Use the gradient as the fill style
    ctx.fillStyle = gradient;

    // Draw a rectangle with the linear gradient fill
    ctx.fillRect(10, 10, 280, 130);
    
      // Draw a rectangle
      ctx.fillStyle = "blue";
      ctx.fillRect(50, 50, 100, 80);
    } else {
      console.log("Canvas not supported!");
    }

   
  });
  