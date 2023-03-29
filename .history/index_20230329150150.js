AOS.init(
    {
        once: true, 
        startEvent: 'DOMContentLoaded',
        offset: 0
    }
);

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
    document.body.style.overflow = 'hidden'

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
  item.forEach((it) => {
    let imgItems = it.querySelectorAll(".img-thumbs-list .img-thumb-item");
    let imgItem = it.querySelector(".product-box-img .img-main > img");
    
    imgItems.forEach((img) => {
      img.onclick = (e) => {
        let imgItemActive = it.querySelector(".img-thumb-item.current-menu-item");
        console.log(imgItemActive)
        imgItemActive.classList.remove("current-menu-item");
        img.classList.add("current-menu-item");
        imgItem.src = e.target.src;
      }
    })

  })
}

activeProduct();

function activeTab() {
  let tabs = document.querySelectorAll('.product-nav')
  console.log(tabs)
}

activeProduct();
