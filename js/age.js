window.calcAge = function () {
  var dobStr = document.getElementById('dob').value;
  if (!dobStr) throw new Error('Please select a date of birth');

  var dob = new Date(dobStr + 'T00:00:00');
  var now = new Date();
  if (dob > now) throw new Error('Date of birth cannot be in the future');

  var years = now.getFullYear() - dob.getFullYear();
  var months = now.getMonth() - dob.getMonth();
  var days = now.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    var prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  var totalDays = Math.floor((now - dob) / (1000 * 60 * 60 * 24));
  var totalMonths = years * 12 + months;

  return years + ' years, ' + months + ' months, ' + days + ' days' +
         ' | Total: ' + totalMonths + ' months, ' + totalDays + ' days';
};
