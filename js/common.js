// Common utilities shared across all calculators
(function () {
  'use strict';

  window.num = function (id) {
    var el = document.getElementById(id);
    if (!el) throw new Error('Missing input element: #' + id);
    var v = parseFloat(el.value);
    if (isNaN(v)) throw new Error('Please enter a valid number for "' + id + '"');
    return v;
  };

  window.money = function (n) {
    return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
  };

  window.round = function (n, dp) {
    var f = Math.pow(10, dp);
    return Math.round(n * f) / f;
  };

  window.showResult = function (button, text, isError) {
    var page = button.closest('.calc-page');
    if (!page) return;
    var result = page.querySelector('.result');
    if (!result) {
      result = document.createElement('div');
      result.className = 'result';
      var anchor = page.querySelector('.example-box') || page.querySelector('.notes') || page.querySelector('h2');
      if (anchor) page.insertBefore(result, anchor);
      else page.appendChild(result);
    }
    result.textContent = text;
    result.classList.add('show');
    if (isError) {
      result.style.background = '#fef2f2';
      result.style.borderColor = '#fecaca';
      result.style.color = '#b91c1c';
    } else {
      result.style.background = '#ecfdf5';
      result.style.borderColor = '#a7f3d0';
      result.style.color = '#059669';
    }
  };

  function wire() {
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    document.querySelectorAll('[data-calc]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var name = btn.getAttribute('data-calc');
        var fn = window[name];
        if (typeof fn !== 'function') {
          showResult(btn, 'Error: calculator "' + name + '" not loaded.', true);
          console.error('Missing global function:', name);
          return;
        }
        try {
          showResult(btn, fn(), false);
        } catch (err) {
          console.error(err);
          showResult(btn, 'Error: ' + err.message, true);
        }
      });
    });

    document.querySelectorAll('[data-reset]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var page = btn.closest('.calc-page');
        if (!page) return;
        page.querySelectorAll('input, select').forEach(function (el) {
          if (el.tagName === 'SELECT') el.selectedIndex = 0;
          else el.value = '';
        });
        var result = page.querySelector('.result');
        if (result) {
          result.classList.remove('show');
          result.textContent = '';
        }
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire);
  else wire();
})();
