function bmiCalc(weight, height) {
  var bmi = weight / (height * height);
  // return bmi;
  return Math.round(bmi * 10) / 10;
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
