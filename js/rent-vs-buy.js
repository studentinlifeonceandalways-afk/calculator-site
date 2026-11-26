window.calcRentBuy = function () {
  var rent = num('rent');
  var price = num('price');
  var downPct = num('down');
  var ratePct = num('rate');
  var years = num('years');
  var taxPct = num('tax');
  if (rent < 0) throw new Error('Rent cannot be negative');
  if (price <= 0) throw new Error('Home price must be greater than 0');
  if (downPct < 0 || downPct >= 100) throw new Error('Down payment must be between 0 and 100%');
  if (ratePct < 0) throw new Error('Mortgage rate cannot be negative');
  if (years <= 0) throw new Error('Loan term must be greater than 0');
  if (taxPct < 0) throw new Error('Property tax rate cannot be negative');

  var loan = price * (1 - downPct / 100);
  var n = years * 12;
  var pi;
  if (ratePct === 0) {
    pi = loan / n;
  } else {
    var r = ratePct / 100 / 12;
    var pow = Math.pow(1 + r, n);
    pi = loan * r * pow / (pow - 1);
  }
  var tax = (price * taxPct / 100) / 12;
  var maint = (price * 0.01) / 12;
  var insurance = (price * 0.003) / 12;
  var ownMonthly = pi + tax + maint + insurance;
  var diff = ownMonthly - rent;

  return 'Monthly P&I: ' + money(pi) +
         ' | Ownership cost: ' + money(ownMonthly) +
         ' | vs Rent ' + money(rent) + ' → ' +
         (diff >= 0 ? money(diff) + ' more to own' : money(-diff) + ' more to rent');
};
