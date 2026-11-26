window.calcConcrete = function () {
  var L = num('length');
  var W = num('width');
  var T = num('thickness');
  if (L <= 0 || W <= 0 || T <= 0) throw new Error('All dimensions must be greater than 0');

  var thicknessFt = T / 12;
  var cubicFt = L * W * thicknessFt;
  var cubicYards = cubicFt / 27;
  var bags60 = Math.ceil(cubicFt / 0.45);
  var bags80 = Math.ceil(cubicFt / 0.60);

  return 'Volume: ' + round(cubicFt, 2) + ' cu ft (' + round(cubicYards, 2) + ' cu yd)' +
         ' | ' + bags60 + ' × 60lb bags or ' + bags80 + ' × 80lb bags';
};
