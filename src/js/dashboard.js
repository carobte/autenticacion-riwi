const user = localStorage.getItem("userOnline")
const btnLogOut = document.querySelector("#btn-logout")

if (!user){
    window.location.href = "/"
} else {
    alert(`Bienvenido ${user.username}`)
}

btnLogOut.addEventListener("click", ()=> {
    localStorage.removeItem("userOnline")
})

