const slickNext = document.querySelector(".slick-next");
const slickPrev = document.querySelector(".slick-prev");
const slickSlide = document.querySelector(".slick-track");
const barBottom = document.querySelector(".bar_bottom")
const barBottomIcon = document.querySelector(".bar_bottom-info-close-icon");

let countNext = 0;
let countPrev = 5;
console.log('slicslide', slickSlide)
slickNext.addEventListener("click", () => {
    console.log("next", countNext)
    countNext++;
    if (countNext === 6) {
        countNext = 0;
    }
    let dem = -610 * countNext;
    console.log("dem", dem)
    slickSlide.style.transform = "translate3d(" + dem + "px, 0px, 0px)";
});

slickPrev.addEventListener("click", () => {
    countPrev--;
    if (countPrev == -1) {
        countPrev = 5;
    }
    let dem = -610 * countPrev;
    console.log("dem prev", -dem)
    slickSlide.style.transform = "translate3d(" + dem + "px, 0px, 0px)";
});

barBottomIcon.addEventListener("click", () => {
    barBottom.style.display = "none";
})