function gcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { var t = b; b = a % b; a = t; }
  return a || 1;
}

window.calcFraction = function () {
  var n1 = num('n1');
  var d1 = num('d1');
  var op = document.getElementById('op').value;
  var n2 = num('n2');
  var d2 = num('d2');

  if (d1 === 0 || d2 === 0) throw new Error('Denominators cannot be zero');
  if (op === '/' && n2 === 0) throw new Error('Cannot divide by a fraction with numerator zero');

  var n, d;
  if (op === '+') { n = n1 * d2 + n2 * d1; d = d1 * d2; }
  else if (op === '-') { n = n1 * d2 - n2 * d1; d = d1 * d2; }
  else if (op === '*') { n = n1 * n2; d = d1 * d2; }
  else { n = n1 * d2; d = d1 * n2; }

  if (d < 0) { n = -n; d = -d; }
  var g = gcd(n, d);
  n /= g; d /= g;

  if (d === 1) return 'Result: ' + n;
  return 'Result: ' + n + '/' + d;
};
