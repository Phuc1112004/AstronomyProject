
window.onscroll = function() {
    var navbar = document.getElementById("navbarSupportedContent");
    if (window.pageYOffset === 0) {
        navbar.classList.remove("scrolled");
    } else {
        navbar.classList.add("scrolled");
    }
};
