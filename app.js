let events = [];
let archive = [];
const buttonside = document.querySelectorAll(".sidebar__btn")
let affichage = document.querySelectorAll("section[data-screen]")
buttonside.forEach(element => {
    element.addEventListener("click", (e) => {
        buttonside.forEach(btn => btn.classList.remove("is-active"))
        element.classList.add("is-active")
        affichage.forEach(screen => screen.classList.toggle('is-visible', screen.dataset.screen === element.dataset.screen))
    })
})