AOS.init(
    {
        once: false, 
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