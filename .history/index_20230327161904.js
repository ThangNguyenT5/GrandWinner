const btnBar = document.querySelector('.hd-bar')
const btnClose = document.querySelector('.hd-menu-close')
const bgPage = document.querySelector('.bg-page')

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
    document.body.style.overflow = 'auto'
}


window.onscroll = function() {
    console.log(document.body.srollTop);
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myP").className = "test";
      } else {
        document.getElementById("myP").className = "";
      }
};