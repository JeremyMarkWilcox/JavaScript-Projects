function getReceipt() {
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:<h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    // This variable takes in the size of the pizza
    var sizeArray = document.getElementsByClassName("size");
    // This for loop selects the pizza and gives a price to it as well
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + " .00");
    // these variables will get passed on to each function
    getTopping(runningTotal, text1);
};
// This function deals with connecting the JS and HTML with the toppings Id
// It also uses an array to select the topping
function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+ toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
// This section adds up the toppings added and minuses one for the one topping free deal
var toppingCount = selectedTopping.length;
if (toppingCount > 1) {
    toppingTotal = (toppingCount - 1);
} else {
    toppingTotal = 0;
}
// This adds the running total and topping total together
// The data is recorded in the console
runningTotal = (runningTotal + toppingTotal);
console.log("total selected topping items: " + toppingCount);
console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
console.log("topping text1: " + text1);
console.log("Purchase Total: " + "$" + runningTotal + ".00");
// These two get sent to their HTML Ids
document.getElementById("showText").innerHTML = text1;
document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" +
    runningTotal + ".00" + "</strong></h3>";
};










