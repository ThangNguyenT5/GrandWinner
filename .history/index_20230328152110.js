AOS.init(
    {
        once: false, 
        startEvent: 'DOMContentLoaded',
        offset: 0
    }
);

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 1000,
    autoplay: {
      delay: 5000,
    },

    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "fraction",
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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

const btnBar = document.querySelector('.hd-bar')
const btnClose = document.querySelector('.hd-menu-close')
const bgPage = document.querySelector('.bg-page')
const btnSearch = document.querySelector('.hd-search')

btnBar.onclick = function () {
    const hdMenu = document.querySelector('.hd-menu')
    hdMenu.classList.add('active')

    const bgPage = document.querySelector('.bg-page')
    bgPage.classList.add('active')

    document.body.style.overflow = 'hidden'
}

btnClose.onclick = function () {
    const hdMenu = document.querySelector('.hd-menu')
    hdMenu.classList.remove('active')
    const bgPage = document.querySelector('.bg-page')
    bgPage.classList.remove('active')
    document.body.style.overflow = 'auto'
}

bgPage.onclick = () => {
    const hdMenu = document.querySelector('.hd-menu')
    hdMenu.classList.remove('active')
    const bgPage = document.querySelector('.bg-page')
    bgPage.classList.remove('active')
    const searchForm = document.querySelector('.hd-search-form')
    searchForm.classList.remove('active')
    document.body.style.overflow = 'auto'
}

btnSearch.onclick = () => {
    const searchForm = document.querySelector('.hd-search-form')
    searchForm.classList.add('active')
    bgPage.classList.add('active')
}




window.onscroll = function() {
    console.log(scrollY)
    const menuSocial = document.querySelector('.menu-social-fixed')
    if (scrollY > 250) {
        menuSocial.classList.add('active')
      } else {
        menuSocial.classList.remove('active')
      }
};