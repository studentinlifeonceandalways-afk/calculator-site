// Common utilities shared across all calculators

document.addEventListener("DOMContentLoaded", function () {
  // Set footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Attach calculate buttons
  document.querySelectorAll("[data-calc]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const fn = window[btn.dataset.calc];
      if (typeof fn === "function") {
        try {
          const result = fn();
          showResult(btn, result);
        } catch (err) {
          showResult(btn, "Error: " + err.message, true);
        }
      }
    });
  });

  // Attach reset buttons
  document.querySelectorAll("[data-reset]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const form = btn.closest(".calc-page");
      form.querySelectorAll("input, select").forEach(function (el) {
        if (el.type === "number") el.value = "";
        else if (el.tagName === "SELECT") el.selectedIndex = 0;
        else el.value = "";
      });
      const result = form.querySelector(".result");
      if (result) {
        result.classList.remove("show");
        result.textContent = "";
      }
    });
  });
});

function showResult(button, text, isError) {
  const page = button.closest(".calc-page");
  let result = page.querySelector(".result");
  if (!result) {
    result = document.createElement("div");
    result.className = "result";
    page.appendChild(result);
  }
  result.textContent = text;
  result.classList.add("show");
  if (isError) {
    result.style.background = "#fef2f2";
    result.style.borderColor = "#fecaca";
    result.style.color = "#b91c1c";
  } else {
    result.style.background = "#ecfdf5";
    result.style.borderColor = "#a7f3d0";
    result.style.color = "#059669";
  }
}

function num(id) {
  const el = document.getElementById(id);
  if (!el) throw new Error("Missing input: " + id);
  const v = parseFloat(el.value);
  if (isNaN(v)) throw new Error('Please enter a valid number in "' + id + '"');
  return v;
}

function money(n) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
}

function round(n, dp) {
  const f = Math.pow(10, dp);
  return Math.round(n * f) / f;
}
