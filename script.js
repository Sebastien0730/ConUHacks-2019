var weightInput;
var heightInput;
var start = document.getElementById("start");
var heightSelec = document.getElementById("heightSelec");
var weightSelec = document.getElementById("weightSelec");
var type = document.getElementById("type");
var cardio = document.getElementById("cardio");
var endurance = document.getElementById("endurance");
var hypertrophy = document.getElementById("hypertrophy");
var strength = document.getElementById("strength");
var slots = document.getElementById("slots");


function hide() {
    var heightSelec = document.getElementById("heightSelec");
    var weightSelec = document.getElementById("weightSelec");
    var type = document.getElementById("type");
    var cardio = document.getElementById("cardio");
    var endurance = document.getElementById("endurance");
    var hypertrophy = document.getElementById("hypertrophy");
    var strength = document.getElementById("strength");
    var slots = document.getElementById("slots");

    weightSelec.style.display = "none";
    type.style.display = "none";
    cardio.style.display = "none";
    endurance.style.display = "none";
    hypertrophy.style.display = "none";
    strength.style.display = "none";
    slots.style.display = "none";
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

    // weightInput = document.getElementById("weight").value;

    // Output of bmi
    //document.getElementById("output").innerHTML = weightInput / (heightInput * heightInput);

    weightSelec.style.display = "none";
    type.style.display = "block";


}

