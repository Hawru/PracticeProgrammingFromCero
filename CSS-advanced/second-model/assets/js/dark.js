document.addEventListener("DOMContentLoaded", ()=>{
    let switcher = document.querySelector('.switcher__btn')
    let dark = document.querySelector('.switcher__icon-dark')
    let light = document.querySelector('.switcher__icon-light')
    let logo_dark = document.querySelector('.navbar__logo--dark')
    let logo_light = document.querySelector('.navbar__logo--light')
    let mobile_logo_dark = document.querySelector('.menu-mobile__container-logo--dark')
    let mobile_logo_light = document.querySelector('.menu-mobile__container-logo--light')

    let darkArray = [dark, logo_dark, mobile_logo_dark]
    let lightArray = [light, logo_light, mobile_logo_light]

    function display(obj, display) {
        obj.forEach(element => {
            console.log(element)
            element.style.display = display;
        });
    }

    switcher.addEventListener("click", () =>{
        let head = document.head

        let link = document.createElement("link")
        link.rel = "stylesheet"
        link.type = "text/css"
        link.href = "./assets/css/dark.css"
        link.id = "theme-dark"
        let theme_dark = document.querySelector('#theme-dark')
        if(theme_dark){
            head.removeChild(theme_dark)
            display(darkArray, "none")
            display(lightArray, "block")
        } else {
            head.appendChild(link)
            display(darkArray, "block")
            display(lightArray, "none")
        }
    })
})