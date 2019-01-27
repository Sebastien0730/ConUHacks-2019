var weightInput;
var heightInput;
var start = document.getElementById("start");
var line = document.getElementById("line");
var heightSelec = document.getElementById("heightSelec");
var weightSelec = document.getElementById("weightSelec");
var type = document.getElementById("type");
var bodyParts = document.getElementById("bodyParts");



function hide() {
    start.style.display = "none";
    line.style.display = "none";
    heightSelec.style.display = "none";
    weightSelec.style.display = "none";
    type.style.display = "none";
    bodyParts.style.display = "none";

}

function start() {
    open.style.display = "none"
    start.style.display = "block";
    heightSelec.style.display = "block";

}

function storeH() {
    var heightSelec = document.getElementById("heightSelec");
    var weightSelec = document.getElementById("weightSelec");
    // input of height
    heightInput = document.getElementById("height").value;

    heightSelec.style.display = "none";
    weightSelec.style.display = "block";

}

function storeW() {

    var weightSelec = document.getElementById("weightSelec");
    var type = document.getElementById("type");
    var line = document.getElementById("line");

    weightInput = document.getElementById("weight").value;

    // Output of bmi
    document.getElementById("output").innerHTML = weightInput / (heightInput * heightInput);

    weightSelec.style.display = "none";
    line.style.display = "block";
    type.style.display = "block";

}

function showMuscle() {
    var bodyParts = document.getElementById("bodyParts");
    bodyParts.style.display = "block";
}
