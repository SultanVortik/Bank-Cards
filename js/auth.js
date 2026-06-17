import Users from './data.js'
const emailInput = document.querySelector(".emailInput")
const passwordInput = document.querySelector(".passwordInput")
const loginBtn = document.querySelector("button")

function auth(e) {
    e.preventDefault();

    const user = Users.find(
        user => user.email === emailInput.value &&
                user.password === passwordInput.value
    )
        if (user) {
            window.location.href = "account.html"
        } else {
            window.alert("Incorrect password or login")
        }
}

loginBtn.addEventListener("click", auth) 

console.log(Users)