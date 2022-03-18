var toggle = function() {
    document.querySelector(this.showSelector).classList.toggle("d-none");
}

document.querySelectorAll('.pop-up-btn').forEach(btn => {
    btn.addEventListener('click', { showSelector: '.p', handleEvent: toggle });
});

var humberger = function() {
    document.querySelector(this.showSelector).classList.toggle("d-none");
    document.querySelector('.humberger').classList.toggle("close");
}

document.querySelectorAll('.humberger').forEach(btn => {
    btn.addEventListener('click', { showSelector: '.h-nav-ul', handleEvent: humberger });
});

document.querySelectorAll('.h-nav-li').forEach(btn => {
    btn.addEventListener('click', { showSelector: '.h-nav-ul', handleEvent: humberger });
});
