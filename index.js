import { addBtn, substractBtn, saveBtn, resetBtn } from "./buttons.js"

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