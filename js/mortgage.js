function calcMortgage() {
  const P = num('loan');
  const annualRate = num('rate');
  const years = num('years');

  if (P <= 0) throw new Error('Loan amount must be greater than 0');
  if (annualRate < 0) throw new Error('Interest rate cannot be negative');
  if (years <= 0) throw new Error('Loan term must be greater than 0');

  const n = years * 12;
  let monthly;

  if (annualRate === 0) {
    monthly = P / n;
  } else {
    const r = annualRate / 100 / 12;
    monthly = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  }

  const total = monthly * n;
  const interest = total - P;

  return 'Monthly payment: ' + money(monthly) +
         ' | Total paid: ' + money(total) +
         ' | Total interest: ' + money(interest);
}
