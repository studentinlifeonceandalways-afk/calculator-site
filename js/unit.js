var UNIT_DATA = {
  length: { m: 1, km: 1000, cm: 0.01, mm: 0.001, mi: 1609.344, yd: 0.9144, ft: 0.3048, in: 0.0254 },
  weight: { kg: 1, g: 0.001, mg: 0.000001, t: 1000, lb: 0.45359237, oz: 0.0283495231, st: 6.35029318 },
  temp: { c: 'Celsius', f: 'Fahrenheit', k: 'Kelvin' }
};

function populateUnits() {
  var cat = document.getElementById('category');
  if (!cat) return;
  var from = document.getElementById('from');
  var to = document.getElementById('to');

  function fill() {
    var units = Object.keys(UNIT_DATA[cat.value]);
    from.innerHTML = units.map(function (u) { return '<option value="' + u + '">' + u + '</option>'; }).join('');
    to.innerHTML = from.innerHTML;
    if (units.length > 1) to.selectedIndex = 1;
  }
  cat.addEventListener('change', fill);
  fill();
}

document.addEventListener('DOMContentLoaded', populateUnits);

window.calcUnit = function () {
  var cat = document.getElementById('category').value;
  var from = document.getElementById('from').value;
  var to = document.getElementById('to').value;
  var value = num('value');
  var result;

  if (cat === 'temp') {
    var c;
    if (from === 'c') c = value;
    else if (from === 'f') c = (value - 32) * 5 / 9;
    else c = value - 273.15;

    if (to === 'c') result = c;
    else if (to === 'f') result = c * 9 / 5 + 32;
    else result = c + 273.15;
  } else {
    var factors = UNIT_DATA[cat];
    var base = value * factors[from];
    result = base / factors[to];
  }
  return value + ' ' + from + ' = ' + round(result, 6) + ' ' + to;
};
