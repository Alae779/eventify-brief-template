const buttonside = document.querySelectorAll(".sidebar__btn")
buttonside.forEach(element => {
    element.addEventListener("click", (e) => {
        buttonside.forEach(btn => btn.classList.remove("is-active"))
        element.classList.add("is-active")
    })
})