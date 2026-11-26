window.calcPizzaDough = function () {
  var count = num('count');
  var ballWeight = num('ballWeight');
  var hydration = num('hydration');
  var saltPct = num('salt');
  var yeastPct = num('yeast');

  if (count <= 0 || Math.floor(count) !== count) throw new Error('Number of pizzas must be a positive integer');
  if (ballWeight < 50) throw new Error('Dough ball weight must be at least 50 g');
  if (hydration < 40 || hydration > 90) throw new Error('Hydration must be between 40% and 90%');
  if (saltPct < 0 || saltPct > 5) throw new Error('Salt must be between 0% and 5%');
  if (yeastPct < 0 || yeastPct > 3) throw new Error('Yeast must be between 0% and 3%');

  var totalDough = count * ballWeight;
  var flour = totalDough / (1 + hydration / 100 + saltPct / 100 + yeastPct / 100);
  var water = flour * hydration / 100;
  var salt = flour * saltPct / 100;
  var yeast = flour * yeastPct / 100;

  return 'Flour: ' + round(flour, 0) + ' g' +
         ' | Water: ' + round(water, 0) + ' g' +
         ' | Salt: ' + round(salt, 1) + ' g' +
         ' | Yeast: ' + round(yeast, 2) + ' g' +
         ' | Total: ' + round(totalDough, 0) + ' g';
};
