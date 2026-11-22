const UNIT_DATA = {
  length: {
    m: 1,
    km: 1000,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.344,
    yd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  },
  weight: {
    kg: 1,
    g: 0.001,
    mg: 0.000001,
    t: 1000,
    lb: 0.45359237,
    oz: 0.0283495231,
    st: 6.35029318,
  },
  temp: {
    c: "Celsius",
    f: "Fahrenheit",
    k: "Kelvin",
  },
};

function populateUnits() {
  const cat = document.getElementById("category");
  if (!cat) return;
  const from = document.getElementById("from");
  const to = document.getElementById("to");

  function fill() {
    const units = Object.keys(UNIT_DATA[cat.value]);
    from.innerHTML = units
      .map((u) => `<option value="${u}">${u}</option>`)
      .join("");
    to.innerHTML = from.innerHTML;
    if (units.length > 1) to.selectedIndex = 1;
  }
  cat.addEventListener("change", fill);
  fill();
}

document.addEventListener("DOMContentLoaded", populateUnits);

function calcUnit() {
  const cat = document.getElementById("category").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const value = num("value");

  let result;

  if (cat === "temp") {
    // normalize to Celsius
    let c;
    if (from === "c") c = value;
    else if (from === "f") c = ((value - 32) * 5) / 9;
    else c = value - 273.15;

    if (to === "c") result = c;
    else if (to === "f") result = (c * 9) / 5 + 32;
    else result = c + 273.15;
  } else {
    const factors = UNIT_DATA[cat];
    const base = value * factors[from];
    result = base / factors[to];
  }

  return value + " " + from + " = " + round(result, 6) + " " + to;
}
