const btnDropDown = document.querySelector(".header_dropdown-language");
const menuLanguage = document.querySelector(".dropdown-menu");
const subMenu = document.querySelector(".navbar_submenu");
const subMenuList = document.querySelector(".navbar_submenu-list");
const headerLanguage = document.querySelector(".header_language");
const headerContainer = document.querySelector(".header_container");
let statusFixed = true;

btnDropDown.addEventListener("click", () => {
    console.log("hello");
    menuLanguage.classList.toggle("dropdown-menu-show");
});

subMenu.addEventListener("click", () => {
    subMenuList.classList.toggle("navbar_submenu-list-show");
});

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        if (statusFixed) {
            headerLanguage.style.display = "none";
            headerContainer.classList.add("header_fixed");
            subMenu.style.display = "block";
            statusFixed = false;
        }
    } else {
        if (!statusFixed) {
            headerLanguage.style.display = "flex";
            subMenu.style.display = "none";
            headerContainer.classList.remove("header_fixed");
            statusFixed = true;
        }
    }
});