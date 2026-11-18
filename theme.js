"use strict";

(() => {
  const key = "korean-exam:theme";
  const system = window.matchMedia("(prefers-color-scheme: dark)");
  let preference = null;
  try {
    const saved = localStorage.getItem(key);
    if (saved === "light" || saved === "dark") preference = saved;
  } catch {
    // Theme switching still works when browser storage is unavailable.
  }

  function applyTheme() {
    const dark = preference ? preference === "dark" : system.matches;
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    document.querySelector('meta[name="theme-color"]').content = dark ? "#151c19" : "#f8f6f0";
    const toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.hidden = false;
      toggle.setAttribute("aria-pressed", String(dark));
    }
  }

  applyTheme();
  system.addEventListener("change", applyTheme);
  window.addEventListener("storage", event => {
    if (event.key !== key && event.key !== null) return;
    preference = event.newValue === "light" || event.newValue === "dark" ? event.newValue : null;
    applyTheme();
  });
  document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    document.getElementById("theme-toggle").addEventListener("click", () => {
      preference = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(key, preference);
      } catch {
        // Keep the selected theme for the current page session.
      }
      applyTheme();
    });
  });
})();
