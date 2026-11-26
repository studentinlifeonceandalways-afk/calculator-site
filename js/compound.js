window.calcCompound = function () {
  var P = num('principal');
  var annualRate = num('rate');
  var t = num('years');
  var n = parseFloat(document.getElementById('freq').value);
  if (P <= 0) throw new Error('Principal must be greater than 0');
  if (annualRate < 0) throw new Error('Interest rate cannot be negative');
  if (t < 0) throw new Error('Years cannot be negative');
  if (!n || n <= 0) throw new Error('Invalid compounding frequency');

  var r = annualRate / 100;
  var fv = P * Math.pow(1 + r / n, n * t);
  var interest = fv - P;
  var ear = (Math.pow(1 + r / n, n) - 1) * 100;

  return 'Future value: ' + money(fv) +
         ' | Total interest: ' + money(interest) +
         ' | Effective annual rate: ' + round(ear, 2) + '%';
};
