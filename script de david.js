var weightInput = 10;
var heightInput = 10;
function storeW() {
    weightInput = document.getElementById("weight").value;
}
function storeH() {
    heightInput = document.getElementById("height").value;
}

document.getElementById("bmiOutput").innerHTML = weightInput / (heightInput * heightInput);
