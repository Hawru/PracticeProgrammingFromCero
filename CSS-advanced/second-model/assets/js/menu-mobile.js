document.addEventListener("DOMContentLoaded", (event) =>{
    let mobile_btn = document.querySelector(".navbar__mobile-btn")
    let mobile_menu = document.querySelector(".menu-mobile")
    let btn_close = document.querySelector(".menu-mobile__close")

    const showHiddenMenu = () =>{
        let show = document.querySelector(".menu-mobile--show")

        if(show){
            mobile_menu.classList.remove("menu-mobile--show")
        } else {
            mobile_menu.classList.add("menu-mobile--show")
        }
    }
    mobile_btn.addEventListener("click", showHiddenMenu)

    btn_close.addEventListener("click", showHiddenMenu)



    window.addEventListener("resize", ()=>{
        let windows_width = parseInt(document.body.clientWidth);
        if(windows_width > 1000) {
            mobile_menu.classList.remove("menu-mobile--show")
        }
    } )

    let menu_item = document.querySelectorAll(".menu-mobile__item")
    menu_item.forEach(item =>  {
        item.addEventListener("click", (event) => {
            let submenu = item.lastElementChild

            if(submenu.className === "menu-mobile__submenu-mobile") {
                if (submenu.style.display === "block") {
                    submenu.style.display = "none"
                } else {
                    submenu.style.display = "block"
                }
            }
        })
    })
    
})