// form
const form = document.querySelector("form")

// inputs
const email = document.querySelector("#email")
const password = document.querySelector("#password")

// API
const API_URL = "http://localhost:3000/users"

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const user = await validateEmail(email.value)
    if (!user) {
        alert("No está registrado")
    } else {
        if (user.password === password.value) {
            alert("Welcome to the jungle")
            localStorage.setItem("userOnline", JSON.stringify(user))
            window.location.href = "./src/pages/dashboard.html"
        } else {
            alert("Usuario o contraseña incorrecta")
        }
    }
    form.reset()


    if (confirm("holi")){
        console.log("holi");
    }
})


// Async functions

async function validateEmail(email) {
    const response = await fetch(`${API_URL}?email=${email}`)
    const data = await response.json()
    if (data.length === 1) {
        return data[0]
    } else {
        return false
    }
}
