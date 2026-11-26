window.calcTemp = function () {
  var value = num('value');
  var from = document.getElementById('from').value;
  var to = document.getElementById('to').value;

  var c;
  if (from === 'c') c = value;
  else if (from === 'f') c = (value - 32) * 5 / 9;
  else c = value - 273.15;

  if (c < -273.15) throw new Error('Temperature is below absolute zero');

  var result;
  if (to === 'c') result = c;
  else if (to === 'f') result = c * 9 / 5 + 32;
  else result = c + 273.15;

  var units = { c: '°C', f: '°F', k: 'K' };
  return value + ' ' + units[from] + ' = ' + round(result, 2) + ' ' + units[to];
};
