window.calcCalorie = function () {
  var sex = document.getElementById('sex').value;
  var age = num('age');
  var weight = num('weight');
  var height = num('height');
  var factor = parseFloat(document.getElementById('activity').value);

  if (age < 15 || age > 100) throw new Error('Age must be between 15 and 100');
  if (weight <= 0) throw new Error('Weight must be greater than 0');
  if (height <= 0) throw new Error('Height must be greater than 0');

  var bmr = 10 * weight + 6.25 * height - 5 * age;
  bmr += (sex === 'male') ? 5 : -161;

  var tdee = bmr * factor;
  return 'BMR: ' + Math.round(bmr) + ' kcal/day' +
         ' | TDEE: ' + Math.round(tdee) + ' kcal/day' +
         ' | Lose (−15%): ' + Math.round(tdee * 0.85) + ' kcal' +
         ' | Gain (+15%): ' + Math.round(tdee * 1.15) + ' kcal';
};
