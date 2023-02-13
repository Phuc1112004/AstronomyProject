
window.onscroll = function() {
    var navbar = document.getElementById("navbarSupportedContent");
    if (window.pageYOffset === 0) {
        navbar.classList.remove("scrolled");
    } else {
        navbar.classList.add("scrolled");
    }
};


const text = "It's a brilliant";
const textElement = document.getElementById("text");
let index = 0;

function type() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;

        setTimeout(type, 90);


    }
}

type();

$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});


$("a").click(function(event) {
    event.preventDefault();
    var href = $(this).attr("href");
    var src = $(this).children("img").attr("src");
    var alt = $(this).children("img").attr("alt");
    $('#lightbox-img').attr("src", src);
    $('#lightbox-caption').text(alt);
    $("#lightbox").fadeIn();
});

$("#lightbox-close").click(function(event) {
    event.preventDefault();
    $("#lightbox").fadeOut();
});

var xValues = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
var yValues = [72, 84, 65, 96, 88];
var barColors = ["red", "green","blue","orange","brown"];




function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: ""
        }
    }
});




