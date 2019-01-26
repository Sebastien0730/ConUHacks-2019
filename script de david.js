function calculateBmi() {

    var weightInput = document.getElementById("weight").value;
    var heightInput = document.getElementById("height").value;
    var bmi = weightInput / (heightInput * heightInput);

    document.getElementById("bmiOutput").innerHTML = 5;

}

