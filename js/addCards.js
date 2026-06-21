const body = document.querySelector("body")
const modalWindow = document.querySelector(".modal-window")
const cardsStorage = document.querySelector(".cards-storage")
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

function addCard(e) {
    e.preventDefault()

    if (cardNumberInput.value.length === 16) {
        cardsStorage.innerHTML += `
            <div class="card ${selectPayment.value}">
                <span class="card__el title">${selectPayment.value}</span>
                <span class="card__el">${cardNumberInput.value}</span>
            </div>
        `
    } else {
        window.alert("Номере карты должно быть 16 цифр")
    }
}


closeBtn.addEventListener("click", closeWindow)
modalWindowOpenBtn.addEventListener("click", openWindow)
addBtn.addEventListener("click", addCard)