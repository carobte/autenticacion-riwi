// form
const form = document.querySelector("#register-form")

// inputs
const username = document.querySelector("#user-name")
const lastName = document.querySelector("#last-name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm-password")

// database
const API_URL = "http://localhost:3000/users"

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const checkPasswords = validatePassword(password, confirmPassword)
    const checkEmail = await validateEmail(email)
    if (checkPasswords && checkEmail) {

        let user = {
            "username": username.value,
            "lastName": lastName.value,
            "email": email.value,
            "password": password.value
        }

        await registerUser(user)
        alert("Registrado")
        window.location.href = "/"


    }

form.reset()

}

)

// check if the entered passwords are the same.

function validatePassword(password, confirmPassword) {
    if (password.value === confirmPassword.value) {
        return true
    } else {
        return false
    }
}


// ------ Async functions ------ 

// check if email already exists
async function validateEmail(email) {
    const response = await fetch(`${API_URL}?email=${email.value}`)
    const data = await response.json()
    if (data.length === 0) {
        return true
    } else {
        return false
    }

}

// Get all users
async function getUsers() {
    const response = await fetch(API_URL)
    const data = await response.json()
    console.log(data)
    return data
}

// Register a new user
async function registerUser(user) {
    await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })
}

