function bmi() {
    var weightInput = document.getElementById("weight").value;
    var heightInput = document.getElementById("height").value;
    var BMI = weightInput/(heightInput*heightInput);
    return BMI;
}