window.calcBreakeven = function () {
  var fixed = num('fixed');
  var varCost = num('varCost');
  var price = num('price');
  if (fixed < 0) throw new Error('Fixed costs cannot be negative');
  if (varCost < 0) throw new Error('Variable cost cannot be negative');
  if (price <= 0) throw new Error('Selling price must be greater than 0');

  var cm = price - varCost;
  if (cm <= 0) throw new Error('Selling price must exceed variable cost');

  var units = fixed / cm;
  var revenue = units * price;

  return 'Contribution margin: ' + money(cm) +
         ' | Break-even units: ' + Math.ceil(units) +
         ' | Break-even revenue: ' + money(revenue);
};
