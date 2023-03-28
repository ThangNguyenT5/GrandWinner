const btnBar = document.querySelector('.hd-bar')
const btnClose = document.querySelector('.hd-menu-close')
btnBar.onclick = function () {
    const hdMenu = document.querySelector('.hd-menu')
    hdMenu.classList.add('active')

    const bgPage = document.querySelector('.bg-page')
    bgPage.style.visibility = 'visible';
}

btnClose.onclick = function () {
    const hdMenu = document.querySelector('.hd-menu')
    hdMenu.classList.remove('active')
}
