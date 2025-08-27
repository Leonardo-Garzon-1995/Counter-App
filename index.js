import { addBtn, substractBtn, saveBtn, resetBtn } from "./buttons.js"

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


// COUNTER APP FUNCTUONALITY CODE

const displayNumber = document.querySelector(".display-number")
const savedDataUl = document.querySelector(".saved-data")

let num = 0

addBtn.addEventListener("click", () => {
    num += 1
    displayNumber.textContent = num
})

substractBtn.addEventListener("click", () => {
    num -= 1
    displayNumber.textContent = num
})

saveBtn.addEventListener("click", () => {
    let listEl = document.createElement("li")
    listEl.textContent = num

    savedDataUl.appendChild(listEl)
})

resetBtn.addEventListener("click", () => {
    savedDataUl.innerHTML = ""
    num = 0
    displayNumber.textContent = num
})