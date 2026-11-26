window.calcProfit = function () {
  var cost = num('cost');
  var price = num('price');
  if (cost < 0 || price < 0) throw new Error('Values cannot be negative');
  if (price === 0) throw new Error('Selling price must be greater than 0');

  var profit = price - cost;
  var margin = (profit / price) * 100;
  var markup = cost > 0 ? (profit / cost) * 100 : 0;

  return 'Profit: ' + money(profit) +
         ' | Margin: ' + round(margin, 2) + '%' +
         ' | Markup: ' + round(markup, 2) + '%';
};
