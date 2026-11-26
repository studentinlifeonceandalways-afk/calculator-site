window.calcBodyFat = function () {
  var sex = document.getElementById('sex').value;
  var height = num('height');
  var neck = num('neck');
  var waist = num('waist');

  if (height <= 0) throw new Error('Height must be greater than 0');
  if (neck <= 0) throw new Error('Neck must be greater than 0');
  if (waist <= 0) throw new Error('Waist must be greater than 0');

  var pct;
  if (sex === 'male') {
    if (waist - neck <= 0) throw new Error('Waist must be greater than neck circumference');
    pct = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
  } else {
    var hip = num('hip');
    if (hip <= 0) throw new Error('Hip measurement is required for women');
    var arg = waist + hip - neck;
    if (arg <= 0) throw new Error('Waist + hip must exceed neck circumference');
    pct = 495 / (1.29579 - 0.35004 * Math.log10(arg) + 0.22100 * Math.log10(height)) - 450;
  }

  if (pct < 0 || pct > 75) throw new Error('Result out of range — check measurements');
  return 'Estimated body fat: ' + round(pct, 1) + '%';
};
