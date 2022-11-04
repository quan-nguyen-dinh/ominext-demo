const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const carousel = document.querySelector(".container_review-carousel");
const reviewList = document.querySelector('.container_review-list');

var direction;

btnLeft.addEventListener("click", () => {
    if (direction === -1) {
        reviewList.append(reviewList.firstElementChild);
        direction = 1;
    }
    carousel.style.justifyContent = 'flex-end';
    reviewList.style.transform = 'translate(50%)';
})
btnRight.addEventListener('click', () => {
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    reviewList.style.transform = "translate(-50%)";
})
reviewList.addEventListener("transitionend", () => {
    console.log("Hello word", reviewList.firstElementChild)
        //! slider sẽ thêm element đầu tiên vào cuối  cùng của slider
    if (direction === -1) {
        reviewList.appendChild(reviewList.firstElementChild);

    } else if (direction === 1) {
        reviewList.prepend(reviewList.lastElementChild)
    }
    //! dòng này có tác dụng reset transform về 0, và do đó thì
    reviewList.style.transition = 'none';
    reviewList.style.transform = 'translate(0)';
    setTimeout(function() {
        reviewList.style.transition = 'all 0.5s';
    })

})