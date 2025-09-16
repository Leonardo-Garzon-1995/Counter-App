// THIS MODULE HAS NOT BEEN EXPORTED YET


// THEME: state, init, toggle, persistence
const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle-checkbox");

// read saved theme or system preference
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  const isDark = theme === "dark";
  if (themeToggle) themeToggle.checked = isDark;
  // Optional: set body color to reduce flash during image cross-fade
  document.body.style.backgroundColor = getComputedStyle(root).getPropertyValue("--color-bg");
}

// initial theme: saved > system > light
applyTheme(savedTheme || (prefersDark.matches ? "dark" : "light"));

// user toggles
themeToggle?.addEventListener("change", (e) => {
  const theme = e.target.checked ? "dark" : "light";
  applyTheme(theme);
  localStorage.setItem("theme", theme);
});

// if user never chose (no localStorage), follow system changes dynamically
prefersDark.addEventListener?.("change", (e) => {
  if (!localStorage.getItem("theme")) {
    applyTheme(e.matches ? "dark" : "light");
  }
});