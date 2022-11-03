const slickNext = document.querySelector(".slick-next");
const slickPrev = document.querySelector(".slick-prev");
const slickSlide = document.querySelector(".slick-track");
const barBottom = document.querySelector(".bar_bottom")
const barBottomIcon = document.querySelector(".bar_bottom-info-close-icon");
const btnMenu = document.querySelector(".menu-icon-btn");

const ulMobile = document.querySelector(".navbar-nav");
const navCol = document.querySelector(".navbar-collapse");

let countNext = 0;
let countPrev = 6;
slickNext.addEventListener("click", () => {
    countNext++;
    if (countNext === 6) {
        countNext = 0;
    }
    let dem = -610 * countNext;
    slickSlide.style.transform = "translate3d(" + dem + "px, 0px, 0px)";
});

slickPrev.addEventListener("click", () => {
    countPrev--;
    if (countPrev == -1) {
        countPrev = 5;
    }
    let dem = -610 * countPrev;
    slickSlide.style.transform = "translate3d(" + dem + "px, 0px, 0px)";
});

barBottomIcon.addEventListener("click", () => {
    barBottom.style.display = "none";
})
btnMenu.addEventListener("click", () => {
    navCol.classList.toggle("navbar-collapse-active")
})