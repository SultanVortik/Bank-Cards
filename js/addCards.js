const body = document.querySelector("body")
const modalWindow = document.querySelector(".modal-window")
const cardNumberInput = document.querySelector(".card-number-input")
const selectPayment = document.querySelector(".payment-system")
const addBtn = document.querySelector(".add-card-btn")
const closeBtn = document.querySelector(".close-window-btn")
const modalWindowOpenBtn = document.querySelector(".modal-window-open-btn")

function closeWindow(e) {
    e.preventDefault()
    
    modalWindow.classList.remove("modal-window-open")
    body.classList.remove("window-open")
}

function openWindow(e) {
    e.preventDefault()

    modalWindow.classList.add("modal-window-open")
    body.classList.add("window-open")
}

closeBtn.addEventListener("click", closeWindow)
modalWindowOpenBtn.addEventListener("click", openWindow)