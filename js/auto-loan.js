window.calcAutoLoan = function () {
  var P = num('amount');
  var annualRate = num('rate');
  var n = num('months');

  if (P <= 0) throw new Error('Amount financed must be greater than 0');
  if (annualRate < 0) throw new Error('Interest rate cannot be negative');
  if (n <= 0 || Math.floor(n) !== n) throw new Error('Loan term must be a whole number of months');

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
