const box = document.querySelectorAll(".icon-b");
const btnDropDown = document.querySelector(".header_dropdown-language");
const menuLanguage = document.querySelector(".dropdown-menu");
const subMenu = document.querySelector(".navbar_submenu");
const subMenuList = document.querySelector(".navbar_submenu-list");
const headerLanguage = document.querySelector(".header_language");
const headerContainer = document.querySelector(".header_container");
const slickNext = document.querySelector(".slick-next");
const slickPrev = document.querySelector(".slick-prev");
const slickSlide = document.querySelector(".slick-track");
const barBottom = document.querySelector(".bar_bottom");
const barBottomIcon = document.querySelector(".bar_bottom-info-close-icon");
const btnMenu = document.querySelector(".menu-icon-btn");
const ulMobile = document.querySelector(".navbar-nav");
const navCol = document.querySelector(".navbar-collapse");
const btnBackToTop = document.querySelector(".back-to-top");
const btnScrollTopFooter = document.querySelector(".scroll-top-btn");
const listContainer = document.querySelectorAll(".container_top-choice-item");
const footerItem = document.querySelectorAll(".footer_head-item");
const layoutHealthCareRightTitle = document.querySelector(
    ".layout_health-care-right-title"
);
const layoutCertificationAward = document.querySelectorAll(
    ".layout_certification-awards-list"
);

const layoutCertificationAwardSideBar = document.querySelector(
    ".layout_certification-awards-sidebar"
);

const containerPartnerItem = document.querySelectorAll(
    ".container_partners-item "
);

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
});
btnMenu.addEventListener('click', () => {
    console.log("Hello world")
    navCol.classList.toggle('navbar-collapse-active');
});

let statusFixed = true;

window.scroll = () => scrollFunction();

const scrollFunction = () => {
    //root
    const windowBottom = window.pageYOffset + window.innerHeight;
    //header
    if (windowBottom > 300) {
        if (statusFixed) {
            headerLanguage.classList.add("header_language-disable");
            headerContainer.classList.add("header_fixed");
            subMenu.classList.add("navbar_submenu-show");
            statusFixed = false;
        }
    } else {
        if (!statusFixed) {
            headerLanguage.classList.remove("header_language-disable");
            subMenu.classList.remove("navbar_submenu-show");
            headerContainer.classList.remove("header_fixed");
            statusFixed = true;
        }
    }

    if (windowBottom > 300) {
        btnBackToTop.style.display = "block";
    } else {
        btnBackToTop.style.display = "none";
    }

    //container top choice item
    //   listContainer.forEach((item) => {
    //     const itemTop = item.offsetTop + 20;
    //     if (windowBottom > itemTop) {
    //       item.classList.add("scroll-animation");
    //     } else {
    //       item.classList.remove("scroll-animation");
    //     }
    //   });

    //   //layout health care right title
    //   windowBottom > layoutHealthCareRightTitle.offsetTop + 20
    //     ? (layoutHealthCareRightTitle.style.animation =
    //         "container_top-choice-item-right ease 0.8s forwards")
    //     : (layoutHealthCareRightTitle.style.animation = "none");

    //   //layout certification award
    //   windowBottom > layoutCertificationAward[0].offsetTop + 20
    //     ? (layoutCertificationAward[0].style.animation =
    //         "container_top-choice-item-right ease 0.8s forwards")
    //     : (layoutCertificationAward[0].style.animation = "none");

    //   windowBottom > layoutCertificationAward[1].offsetTop + 20
    //     ? (layoutCertificationAward[1].style.animation =
    //         "container_top-choice-item-left ease 0.8s forwards")
    //     : (layoutCertificationAward[1].style.animation = "none");

    //   windowBottom > layoutCertificationAward[2].offsetTop + 20
    //     ? (layoutCertificationAward[2].style.animation =
    //         "container_top-choice-item-right ease 0.8s forwards")
    //     : (layoutCertificationAward[2].style.animation = "none");

    //   //layout certification award sidebar
    //   windowBottom > layoutCertificationAwardSideBar.offsetTop + 20
    //     ? (layoutCertificationAwardSideBar.style.animation =
    //         "container_top-choice-item-left ease 0.8s forwards")
    //     : (layoutCertificationAwardSideBar.style.animation = "none");

    //   //container partner item
    //   containerPartnerItem.forEach((item, index) => {
    //     if (windowBottom > item.offsetTop + 20) {
    //       if (index % 2 === 0) {
    //         item.style.animation =
    //           "container_top-choice-item-right ease 0.8s forwards";
    //       } else {
    //         item.style.animation =
    //           "container_top-choice-item-left ease 0.8s forwards";
    //       }
    //     } else {
    //       item.style.animation = "none";
    //     }
    //   });

    //   windowBottom > footerItem[0].offsetTop
    //     ? (footerItem[0].style.animation =
    //         "container_top-choice-item-left ease 0.8s forwards")
    //     : (footerItem[0].style.animation = "none");

    //   windowBottom > footerItem[1].offsetTop
    //     ? (footerItem[1].style.animation =
    //         "container_top-choice-item-right ease 0.8s forwards")
    //     : (footerItem[1].style.animation = "none");

    //root

    //container top choice item
    listContainer.forEach((item) => {
        const itemTop = item.offsetTop + 20;
        if (windowBottom > itemTop) {
            item.classList.add('scroll-animation');
        } else {
            item.classList.remove('scroll-animation');
        }
    });

    //layout health care right title
    windowBottom > layoutHealthCareRightTitle.offsetTop + 20 ?
        (layoutHealthCareRightTitle.style.animation =
            'container_top-choice-item-right ease 0.8s forwards') :
        (layoutHealthCareRightTitle.style.animation = 'none');

    //layout certification award
    windowBottom > layoutCertificationAward[0].offsetTop + 20 ?
        (layoutCertificationAward[0].style.animation =
            'container_top-choice-item-right ease 0.8s forwards') :
        (layoutCertificationAward[0].style.animation = 'none');

    windowBottom > layoutCertificationAward[1].offsetTop + 20 ?
        (layoutCertificationAward[1].style.animation =
            'container_top-choice-item-left ease 0.8s forwards') :
        (layoutCertificationAward[1].style.animation = 'none');

    windowBottom > layoutCertificationAward[2].offsetTop + 20 ?
        (layoutCertificationAward[2].style.animation =
            'container_top-choice-item-right ease 0.8s forwards') :
        (layoutCertificationAward[2].style.animation = 'none');

    //layout certification award sidebar
    windowBottom > layoutCertificationAwardSideBar.offsetTop + 20 ?
        (layoutCertificationAwardSideBar.style.animation =
            'container_top-choice-item-left ease 0.8s forwards') :
        (layoutCertificationAwardSideBar.style.animation = 'none');

    //container partner item
    containerPartnerItem.forEach((item, index) => {
        if (windowBottom > item.offsetTop + 20) {
            if (index % 2 === 0) {
                item.style.animation =
                    'container_top-choice-item-right ease 0.8s forwards';
            } else {
                item.style.animation =
                    'container_top-choice-item-left ease 0.8s forwards';
            }
        } else {
            item.style.animation = 'none';
        }
    });

    windowBottom > footerItem[0].offsetTop ?
        (footerItem[0].style.animation =
            'container_top-choice-item-left ease 0.8s forwards') :
        (footerItem[0].style.animation = 'none');

    windowBottom > footerItem[1].offsetTop ?
        (footerItem[1].style.animation =
            'container_top-choice-item-right ease 0.8s forwards') :
        (footerItem[1].style.animation = 'none');
};

btnBackToTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

btnScrollTopFooter.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// hover
for (let i = 0; i < box.length; ++i) {
    box[i].addEventListener("mouseover", () => {
        console.log("Hello");
        slickSlide.style.transform =
            "translate3d(" + -610 * box[i].getAttribute("data-tab") + "px, 0px, 0px)";
    });
}

btnDropDown.addEventListener("click", () => {
    console.log("hello");
    menuLanguage.classList.toggle("dropdown-menu-show");
});

subMenu.addEventListener("click", () => {
    subMenuList.classList.toggle("navbar_submenu-list-show");
});
btnScrollTopFooter.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});