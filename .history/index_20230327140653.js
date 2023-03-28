const btnBar = document.querySelector('.hd-bar')
const btnClose = document.querySelector('.hd-menu-close')
btnBar.onclick = function () {
    const hdMenu = document.querySelector('.hd-menu')
    hdMenu.classList.add('active')
}

btnClose.onclick = function () {
    alert('a')
}
