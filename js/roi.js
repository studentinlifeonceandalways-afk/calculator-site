window.calcROI = function () {
  var cost = num('cost');
  var value = num('value');
  var yearsEl = document.getElementById('years');
  var years = yearsEl && yearsEl.value !== '' ? parseFloat(yearsEl.value) : null;

  if (cost <= 0) throw new Error('Initial cost must be greater than 0');
  if (value < 0) throw new Error('Final value cannot be negative');

  var gain = value - cost;
  var roi = (gain / cost) * 100;

  var out = 'Net gain: ' + money(gain) + ' | Total ROI: ' + round(roi, 2) + '%';

  if (years !== null && years > 0) {
    var annualized = (Math.pow(value / cost, 1 / years) - 1) * 100;
    out += ' | Annualized ROI: ' + round(annualized, 2) + '%';
  }
  return out;
};
