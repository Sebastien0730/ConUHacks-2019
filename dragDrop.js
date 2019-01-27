function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function hide() {
    var weightSelec = document.getElementById("weightSelec");
    var bmi = document.getElementById("bmi");
    var type = document.getElementById("type");
    var cardio = document.getElementById("cardio");
    var endurance = document.getElementById("endurance");
    var hypertrophy = document.getElementById("hypertrophy");
    var strength = document.getElementById("strength");
    var slots = document.getElementById("slots");
    var chest = document.getElementById("chest");
    var backMus = document.getElementById("backMus");
    var biceps = document.getElementById("biceps");

    var end = document.getElementById("end");

    weightSelec.style.display = "none";
    bmi.style.display = "none";
    type.style.display = "none";
    cardio.style.display = "none";
    endurance.style.display = "none";
    hypertrophy.style.display = "none";
    strength.style.display = "none";
    slots.style.display = "none";
    chest.style.display = "none";
    backMus.style.display = "none";
    biceps.style.display = "none";
    end.style.display = "none";
}