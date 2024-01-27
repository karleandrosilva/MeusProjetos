function menuShow() {
    let nav__mobile = document.querySelector('.nav__mobile');
    if (nav__mobile.classList.contains('open')) {
        nav__mobile.classList.remove('open');
    } else {
        nav__mobile.classList.add('open');
    }
}