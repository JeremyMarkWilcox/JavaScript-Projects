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