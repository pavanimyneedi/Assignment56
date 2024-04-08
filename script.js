// Function to convert CAD to USD
function convertToUSD() {
    var cadInput = document.getElementById("Input").value;
    if (isNaN(cadInput) || cadInput === "") {
        document.getElementById("result").innerHTML = "Please enter a valid CAD amount.";
        return;
    }
    var rate = 0.74; // Example rate, you can change this
    var usdAmount = parseFloat(cadInput) * rate;
   var result = document.getElementById("result")
   result.value = usdAmount
}

// Function to convert USD to CAD
function convertToCAD() {
    var usdInput = document.getElementById("Input").value;
    if (isNaN(usdInput) || usdInput === "") {
        document.getElementById("result").innerHTML = "Please enter a valid USD amount.";
        return;
    }
    var rate = 1.36; // Example rate, you can change this
    var cadAmount = parseFloat(usdInput) * rate;
    var result = document.getElementById("result")
    result.value = cadAmount
}
