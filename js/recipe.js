function calcRecipe() {
  const qty = num("qty");
  const orig = num("origServ");
  const newServ = num("newServ");

  if (qty < 0) throw new Error("Quantity cannot be negative");
  if (orig <= 0) throw new Error("Original servings must be greater than 0");
  if (newServ <= 0) throw new Error("New servings must be greater than 0");

  const factor = newServ / orig;
  const scaled = qty * factor;

  return (
    "Scaled quantity: " +
    round(scaled, 2) +
    " (factor ×" +
    round(factor, 3) +
    ")"
  );
}
