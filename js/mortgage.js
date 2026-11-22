function calcConcrete() {
  const L = num("length");
  const W = num("width");
  const T = num("thickness");

  if (L <= 0 || W <= 0 || T <= 0)
    throw new Error("All dimensions must be greater than 0");

  const thicknessFt = T / 12;
  const cubicFt = L * W * thicknessFt;
  const cubicYards = cubicFt / 27;

  // 60 lb bag ≈ 0.45 cu ft; 80 lb bag ≈ 0.60 cu ft
  const bags60 = Math.ceil(cubicFt / 0.45);
  const bags80 = Math.ceil(cubicFt / 0.6);

  return (
    "Volume: " +
    round(cubicFt, 2) +
    " cu ft (" +
    round(cubicYards, 2) +
    " cu yd) | " +
    bags60 +
    " × 60lb bags or " +
    bags80 +
    " × 80lb bags"
  );
}
