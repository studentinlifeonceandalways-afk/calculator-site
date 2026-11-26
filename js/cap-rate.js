window.calcCapRate = function () {
  var noi = num('noi');
  var value = num('value');

  if (noi < 0) throw new Error('NOI cannot be negative');
  if (value <= 0) throw new Error('Property value must be greater than 0');

  var cap = (noi / value) * 100;
  return 'Cap rate: ' + round(cap, 2) + '%';
};
