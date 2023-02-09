window.onscroll = function() {
    var navbar = document.getElementById("navbarSupportedContent");
    if (window.pageYOffset === 0) {
        navbar.classList.remove("scrolled");
    } else {
        navbar.classList.add("scrolled");
    }
};


const text = "It's a brilliant ";
const textElement = document.getElementById("text");
let index = 0;

function type() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

type();
