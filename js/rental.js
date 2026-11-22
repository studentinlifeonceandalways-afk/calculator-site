function calcYield() {
  const value = num("value");
  const rent = num("rent");
  const expenses = num("expenses");

  if (value <= 0) throw new Error("Property value must be greater than 0");
  if (rent < 0 || expenses < 0) throw new Error("Values cannot be negative");

  const gross = (rent / value) * 100;
  const net = ((rent - expenses) / value) * 100;

  return (
    "Gross yield: " +
    round(gross, 2) +
    "%" +
    " | Net yield: " +
    round(net, 2) +
    "%" +
    " | Annual net income: " +
    money(rent - expenses)
  );
}
