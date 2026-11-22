function calcPercent() {
  const pct = num("pct");
  const of = num("of");
  const result = (pct / 100) * of;
  return pct + "% of " + of + " = " + round(result, 4);
}
