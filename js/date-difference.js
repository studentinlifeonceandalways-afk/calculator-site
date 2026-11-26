window.calcDateDiff = function () {
  var s = document.getElementById('start').value;
  var e = document.getElementById('end').value;
  if (!s || !e) throw new Error('Please select both start and end dates');

  var start = new Date(s + 'T00:00:00');
  var end = new Date(e + 'T00:00:00');
  if (isNaN(start) || isNaN(end)) throw new Error('Invalid date');

  var earlier = start <= end ? start : end;
  var later = start <= end ? end : start;

  var diffMs = later - earlier;
  var days = Math.round(diffMs / (1000 * 60 * 60 * 24));
  var weeks = days / 7;

  var y = later.getFullYear() - earlier.getFullYear();
  var m = later.getMonth() - earlier.getMonth();
  var d = later.getDate() - earlier.getDate();

  if (d < 0) {
    m--;
    var prevMonth = new Date(later.getFullYear(), later.getMonth(), 0);
    d += prevMonth.getDate();
  }
  if (m < 0) { y--; m += 12; }

  return 'Days: ' + days +
         ' | Weeks: ' + round(weeks, 2) +
         ' | Calendar: ' + y + ' years, ' + m + ' months, ' + d + ' days';
};
