const btnBar = document.querySelector('.hd-bar')
const btnClose = document.querySelector('.hd-menu-close')
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
