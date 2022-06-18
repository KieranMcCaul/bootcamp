function bmiCalc(weight, height) {
  var equation = weight / (height * height);
  return Math.round(equation * 10) / 10;
}

var bmi = bmiCalc(80, 1.8);

if (bmi < 18.5) {
  bmi = `your BMI is ${bmi}, so you are underweight.`;
} else if (bmi > 18.5 && bmi < 24.9) {
  bmi = `your BMI is ${bmi}, so you have a normal weight.`;
} else {
  bmi = `your BMI is ${bmi}, so you are overweight`;
}

console.log(bmi);