var state;
var muscle;
function cardio() {
    var cardio = document.getElementById("cardio");
    var type = document.getElementById("type");
    var slots = document.getElementById("slots");
    type.style.display = "none";
    cardio.style.display = "block";
    slots.style.display = "block";
    state = "cardio";
}

function endurance() {
    var endurance = document.getElementById("endurance");
    var type = document.getElementById("type");
    var slots = document.getElementById("slots");
    type.style.display = "none";
    endurance.style.display = "block";
    slots.style.display = "block";
    state = "endurance";

}
function hypertrophy() {
    var hypertrophy = document.getElementById("hypertrophy");
    var type = document.getElementById("type");
    var slots = document.getElementById("slots");
    type.style.display = "none";
    hypertrophy.style.display = "block";
    slots.style.display = "block";
    state = "hypertrophy";
}
function strength() {
    var strength = document.getElementById("strength");
    var type = document.getElementById("type");
    var slots = document.getElementById("slots");
    type.style.display = "none";
    strength.style.display = "block";
    slots.style.display = "block";
    state = "strength";
}

function chest() {
    var back = document.getElementById(state);
    var chest = document.getElementById("chest");
    back.style.display = "none";
    chest.style.display = "block";
    muscle = "chest";

}
function backMus() {
    var back = document.getElementById(state);
    var chest = document.getElementById("back");
    back.style.display = "none";
    chest.style.display = "block";
    muscle = "back";
}


function back() {
    var mus = document.getElementById(muscle);
    var back = document.getElementById(state);
    mus.style.display = "none";
    back.style.display = "block";


}
