window.calcPercent = function () {
  var pct = num('pct');
  var of = num('of');
  var result = (pct / 100) * of;
  return pct + '% of ' + of + ' = ' + round(result, 4);
};
