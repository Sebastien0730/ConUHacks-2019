var muscle;
function back() {
    var mus = document.getElementById(muscle);
    var back = document.getElementById(getState());
    mus.style.display = "none";
    back.style.display = "block";
}


function chest() {
    var back = document.getElementById(state);
    var chest = document.getElementById("chest");
    back.style.display = "none";
    chest.style.display = "block";
    muscle = "chest";

}

function biceps() {
    var back = document.getElementById(state);
    var biceps = document.getElementById("biceps");
    back.style.display = "none";
    biceps.style.display = "block";
    muscle = "biceps";
}
function backMus() {
    var back = document.getElementById(state);
    var backMus = document.getElementById("backMus");
    back.style.display = "none";
    backMus.style.display = "block";
    muscle = "backMus";
}


function end() {
    var back = document.getElementById(muscle);
    var end = document.getElementById("end");
    var slots = document.getElementById("slots");
    var bar = document.getElementById("lol");
    back.style.display = "none";
    end.style.display = "block";
    slots.style.display = "block";
    slots.style.transform = "translateX(-600px)";
    bar.style.display = "none";
}