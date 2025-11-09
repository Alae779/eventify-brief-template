let events = [];
let archive = [];
const buttonside = document.querySelectorAll(".sidebar__btn")
let affichage = document.querySelectorAll("section[data-screen]")
buttonside.forEach(element => {
    element.addEventListener("click", (e) => {
        buttonside.forEach(element => element.classList.remove("is-active"))
        element.classList.add("is-active")
        affichage.forEach(screen => screen.classList.toggle('is-visible', screen.dataset.screen === element.dataset.screen))
    })
})
let theForm = document.getElementsByTagName("form")[0]
theForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById("event-title").value
    let img = document.getElementById("event-image").value
    let description = document.getElementById("event-description").value
    let seats = document.getElementById("event-seats").value
    let price = document.getElementById("event-price").value
    localStorage.setItem('titlename', title);
    console.log(localStorage.getItem("titlename"))
    if(title.value = " "){  
    document.getElementById("event-title").style.border = "1px solid red";
}
})