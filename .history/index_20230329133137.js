AOS.init(
    {
        once: false, 
        startEvent: 'DOMContentLoaded',
        offset: 0
    }
);
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
    const menuSocial = document.querySelector('.menu-social-fixed')
    if (scrollY > 250) {
        menuSocial.classList.add('active')
      } else {
        menuSocial.classList.remove('active')
      }
};

function activeProduct() {
  let item = document.querySelectorAll(".product-list .product-item");
  console.log(item)
  item.forEach((it) => {
    let imgItems = it.querySelectorAll(".img-thumbs-list .img-thumb-item");
    let imgItem = it.querySelector(".product-box-img .img-main");
    
    imgItems.forEach((img) => {
      img.onclick = (e) => {
        let imgItemActive = it.querySelector(".img-thumb-item.current-menu-item");
        let imgAniActive = it.querySelector(".img-main > img.img-active");
        console.log(e.target.src);
        imgItem.src = e.target.src;

      }
    })

  })
  // item.forEach((it) => {

  //   imgItems.forEach((img) => {
  //     img.onclick = (e) => {
  //       imgItemActive.classList.remove("active");
  //       imgAniActive.classList.remove("active-ani");
  //       img.classList.add("active");


  //       setTimeout(() => {
  //         imgItem.classList.add("active-ani");
  //       }, 500);
  //     };
  //   });
  // });
}

activeProduct();