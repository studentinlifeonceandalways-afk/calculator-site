window.calcMortgage = function () {
  var P = num('loan');
  var annualRate = num('rate');
  var years = num('years');
  if (P <= 0) throw new Error('Loan amount must be greater than 0');
  if (annualRate < 0) throw new Error('Interest rate cannot be negative');
  if (years <= 0) throw new Error('Loan term must be greater than 0');

  var n = years * 12;
  var monthly;
  if (annualRate === 0) {
    monthly = P / n;
  } else {
    var r = annualRate / 100 / 12;
    var pow = Math.pow(1 + r, n);
    monthly = P * r * pow / (pow - 1);
  }
  var total = monthly * n;
  var interest = total - P;

  return 'Monthly payment: ' + money(monthly) +
         ' | Total paid: ' + money(total) +
         ' | Total interest: ' + money(interest);
};
