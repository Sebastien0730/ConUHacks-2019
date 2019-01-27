var weightInput;
var heightInput;

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
    var bmi = document.getElementById("bmi");

    weightInput = document.getElementById("weight").value;

    // Output of bmi

    weightSelec.style.display = "none";
    bmi.style.display = "block";
    document.getElementById("output").innerHTML = weightInput / (heightInput * heightInput);
}

function typeDisplay() {
    var bmi = document.getElementById("bmi");
    var type = document.getElementById("type");

    bmi.style.display = "none";
    type.style.display = "block";
}
