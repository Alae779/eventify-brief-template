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
let theForm = document.getElementsByTagName("form")[0]
theForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById("event-title")
    let img = document.getElementById("event-image")
    let description = document.getElementById("event-description")
    let seats = document.getElementById("event-seats")
    let price = document.getElementById("event-price")
})