function calcBMI() {
  const weight = num("weight");
  const heightCm = num("height");

  if (weight <= 0) throw new Error("Weight must be greater than 0");
  if (heightCm <= 0) throw new Error("Height must be greater than 0");

  const h = heightCm / 100;
  const bmi = weight / (h * h);

  let cat;
  if (bmi < 18.5) cat = "Underweight";
  else if (bmi < 25) cat = "Normal weight";
  else if (bmi < 30) cat = "Overweight";
  else cat = "Obese";

  return "BMI: " + round(bmi, 1) + " — " + cat;
}
