// Exercise on SAT and Harvard
function harvard() {
    var SAT, emission;
    SAT = document.getElementById("SAT").value;//the editor kept changing .value to .ariaValueMax
    emission = (SAT < 1500) ? "You scored too low, sorry!" : "Congratulations! Throw a party,  you are now enrolled in Harvard!";
    document.getElementById("Emission").innerHTML = emission + '<br><br>Best Wishes,<br><br>- Harvard Emissions';
}
// Excerise asked for
function license() {
    var Age, GoodDay;
    Age = document.getElementById("Age").value;
    GoodDay = (Age < 18) ? "You are too young, sorry! Come back when you turn 18 and have registered." : "The voting booths are right this way.";
    document.getElementById("GoodDay").innerHTML = GoodDay + '<br><br> "Have a good day!"';
}

// First Constructor
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
    // Objects made with the template above. This creates the placeholders and new creates the new instance for the new object
    var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
    var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "white and Black");
    var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
    // This is where we call the function and send it to the HTML file with an Id, for Erik in this case
    function myFunction() {
        document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
    }

// Keyword exercise

// Class Name
class myHero {
    // The Constructor, then placeholding the hero's stats
    constructor(heroName, Hp, Atk, Def) {
        this.myHero_Name = heroName;
        this.hero_HP = Hp;
        this.hero_Atk = Atk;
        this.hero_Def = Def;
    }
}

// Creating an instance of the MyHero class
var Tidus = new myHero("Tidus", 100, 20, 10);


// Function to handle click events
function onClick() {
    // Accessing properties of the Tidus instance
    document.getElementById("New_and_This").innerHTML = "Tidus <br>" + " HitPoints: " + Tidus.hero_HP + "<br> Attack: " + Tidus.hero_Atk
    + "<br> Defense: " + Tidus.hero_Def;  
  }


//Below is an example of attempting to use a reserved keyword to name an identifier -muted so my other code can run  
//var new = poo; 

// Nested Function Example

// The function keyword, identifier
function Counting_Down() {
    // Connecting the documents together with an Id
    document.getElementById("Nested_Function").innerHTML = Count_Down();
    // Nested function inside of a function, it is in the scope if Counting_Down
    function Count_Down() {
        //declaring and assiging the variable that we are targeting
        var beginnningPoint = 25;
        // Third function inside of the nest/ scope if you count the initial function
        function Down_Two() {
            // Decreases the affected number by two
            beginnningPoint -= 2;
        }
    // Calling function    
    Down_Two();
    // returning the value of beginningPoint after the alteration, which results in 23
    return beginnningPoint;
    }
} // <--- End of Counting_Down scope