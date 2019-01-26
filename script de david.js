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