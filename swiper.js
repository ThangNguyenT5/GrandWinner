let numCount = document.querySelector('.numCount')
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    navigation: {
        nextEl: '.banner-swiper .swiper-navi.next',
        prevEl: '.banner-swiper .swiper-navi.prev',
    },
    on: {
        slideChange: function (sw) {
          if (this.activeIndex < 9) {
            numCount.innerHTML = (`0${this.activeIndex + 1}`);
          } else {
            numCount.innerHTML = (this.activeIndex + 1);
          }
        }
    }
});