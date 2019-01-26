<<<<<<< HEAD
function calculateBmi() {
    var weightInput = document.getElementById("weight").value;
    var heightInput = document.getElementById("height").value;
    var bmi = weightInput/(heightInput*heightInput);
}

x = calculateBmi.bmi();
document.getElementById("bmiOutput").innerHTML = x;
=======
var weightInput = document.getElementById("weight").value;
var heightInput = document.getElementById("height").value;

function bug() {
    console.log(weightInput);
    console.log(heightInput);
}


function bmi() {

    var BMI = weightInput / (heightInput * heightInput);
    console.log(heightInput);


}
>>>>>>> 051df4aeb4597b1a71976d3a9fddc478b8d75131
