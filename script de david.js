function calculateBmi() {
    var weightInput = document.getElementById("weight").value;
    var heightInput = document.getElementById("height").value;
    var bmi = weightInput/(heightInput*heightInput);
}

x = calculateBmi.bmi();
document.getElementById("bmiOutput").innerHTML = x;
