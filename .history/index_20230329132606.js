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
    let imgItems = it.querySelectorAll(".product-box-img .img-main");
    let imgItem = it.querySelector(".img-thumb-item > img");
    
    imgItems.forEach((img) => {
      img.onclick = () => {
        alert('a')
      }
    })

  })
  // item.forEach((it) => {

  //   imgItems.forEach((img) => {
  //     img.onclick = (e) => {
  //       let imgItemActive = it.querySelector(".item-list-img.active");
  //       let imgAniActive = it.querySelector(".item-img > img.active-ani");
  //       console.log(e.target.src);
  //       imgItemActive.classList.remove("active");
  //       imgAniActive.classList.remove("active-ani");
  //       img.classList.add("active");

  //       imgItem.src = e.target.src;

  //       setTimeout(() => {
  //         imgItem.classList.add("active-ani");
  //       }, 500);
  //     };
  //   });
  // });
}

activeProduct();