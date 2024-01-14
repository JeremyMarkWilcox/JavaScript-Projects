// Function to reset error messages

function resetErrors() {
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
  }
  
  // Validate Form
  function validateForm() {
    resetErrors(); // Reset errors before validation
  
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  
    // Access form elements using the event parameter
    var form = event.target;
    var name = form["fname"].value;
    var email = form["email"].value;
  
    // Validate Name
    if (name.trim() === "") {
      document.getElementById("nameError").innerHTML = "Name is required";
      event.preventDefault(); // Prevent form submission
    }
  
    // Validate Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").innerHTML = "Enter a valid email address";
      event.preventDefault(); // Prevent form submission
    }
  }
  
  // Add event listener to the form with the name "myForm"
  document.forms["myForm"].addEventListener("submit", validateForm);
  