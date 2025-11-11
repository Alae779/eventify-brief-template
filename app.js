let events = [];
let archive = [];
let subtitle = document.getElementsByClassName("page-header__content")[0];
let sectitle = subtitle.querySelector("h2") ;
let secsubtitle = subtitle.querySelector("p") ;






const buttonside = document.querySelectorAll(".sidebar__btn")
let affichage = document.querySelectorAll("section[data-screen]")
buttonside.forEach(element => {
    element.addEventListener("click", (e) => {
        
        buttonside.forEach(element => element.classList.remove("is-active"))


        element.classList.add("is-active")
        let screeen = element.querySelectorAll("span")[1].textContent;
        
        console.log(screeen);

        if(screeen=="Add Event"){
            sectitle.textContent=screeen;
            secsubtitle.innerHTML="Add your events here";
        }
        else if(screeen=="Events"){
            sectitle.textContent=screeen;
            secsubtitle.innerHTML="Your events list";
        }
        else if(screeen=="Archive"){
            sectitle.textContent=screeen;
            secsubtitle.innerHTML="Your archived events";
        }
        else if(screeen=="Statistics"){
            sectitle.textContent=screeen;
            secsubtitle.innerHTML="Overview of your events";
        }
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
    if(title.value = " "){  
        document.getElementById("event-title").style.border = "1px solid red";
    }
    let variantname = document.getElementsByClassName("variant-row__name")[0].value;
    let variantqty = document.getElementsByClassName("variant-row__qty")[0].value;
    let variantvalue = document.getElementsByClassName("variant-row__value")[0].value;
    let varianttype = document.getElementsByClassName("variant-row__type")[0].value;
    let removevariant = document.getElementsByClassName("variant-row__remove")


    let eventobject = {
        title: title,
        eventimg: img,
        description: description,
        seats: seats,
        price: price,
    };
    events.push(eventobject);
    localStorage.setItem("eventos", JSON.stringify(events));
    console.log(events)








    // let variantobj = {
    //     name: variantname,
    //     quantity: variantqty,
    //     value: variantvalue,
    //     type: varianttype,
    // }










    // smya dyal tableau + push + smya dyal objet
})

