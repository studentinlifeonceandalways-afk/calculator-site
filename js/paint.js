window.calcPaint = function () {
  var L = num('length');
  var W = num('width');
  var H = num('height');
  var doors = num('doors');
  var windows = num('windows');
  var coats = parseFloat(document.getElementById('coats').value);
  if (L <= 0 || W <= 0 || H <= 0) throw new Error('Room dimensions must be greater than 0');
  if (doors < 0 || windows < 0) throw new Error('Door and window counts cannot be negative');

  var wallArea = 2 * (L + W) * H;
  var openings = doors * 21 + windows * 15;
  var paintable = Math.max(0, wallArea - openings);
  var totalArea = paintable * coats;
  var gallons = totalArea / 350;

  return 'Wall area: ' + round(wallArea, 1) + ' sq ft' +
         ' | Paintable: ' + round(paintable, 1) + ' sq ft' +
         ' | Total for ' + coats + ' coat(s): ' + round(totalArea, 1) + ' sq ft' +
         ' | Gallons needed: ' + Math.ceil(gallons);
};
