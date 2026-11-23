function calcAge() {
  const dobStr = document.getElementById('dob').value;
  if (!dobStr) throw new Error('Please select a date of birth');

  const dob = new Date(dobStr + 'T00:00:00');
  const now = new Date();
  if (dob > now) throw new Error('Date of birth cannot be in the future');

  let years = now.getFullYear() - dob.getFullYear();
  let months = now.getMonth() - dob.getMonth();
  let days = now.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const totalDays = Math.floor((now - dob) / (1000 * 60 * 60 * 24));
  const totalMonths = years * 12 + months;

  return years + ' years, ' + months + ' months, ' + days + ' days | Total: ' +
         totalMonths + ' months, ' + totalDays + ' days';
}
