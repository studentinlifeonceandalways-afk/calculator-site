window.calcSquareFootage = function () {
  var L = num('length');
  var W = num('width');
  if (L <= 0 || W <= 0) throw new Error('Length and width must be greater than 0');

  var sqft = L * W;
  var sqyd = sqft / 9;
  return 'Square feet: ' + round(sqft, 2) + ' sq ft | Square yards: ' + round(sqyd, 2) + ' sq yd';
};
