


function Imperial_calc() {
    var age = document.getElementById("age").value;
    var gender = document.getElementById("genderI").value;
    var feet = document.getElementById("feet").value;
    var inches = document.getElementById("inches").value;
    var pounds = document.getElementById("pounds").value;
    var stones = document.getElementById("stones").value;

    height = inches / 12 + feet
    weigth = stones * 14 + pounds;



    if (gender == "male") {
        bmrI = 66 + (6.2 * weigth) + (12.7 * height) - (6.76 * age);
    }
    else {
        bmrI = 655 + (4.35 * weigth) + (4.7 * height) - (4.7 * age);
    }
    document.getElementById('BMR Result-i').innerHTML = bmrI;
}








function Metric_calc() {
    var age = document.getElementById("age").value;
    var gender = document.getElementById("genderM").value;
    var height = document.getElementById("cm").value;
    var weigth = document.getElementById("kg").value;



    if (gender == "male") {
        bmrM = (10 * weigth) + (6.25 * height) - (5 * age) + 5;
    }
    else {
        bmrM = (10 * weigth) + (6.25 * height) - (5 * age) - 161;
    }
    document.getElementById('BMR Result-m').innerHTML = bmrM;
}








