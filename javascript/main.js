//nav-bar
window.onscroll = function() {
    var navbar = document.getElementById("navbarSupportedContent");
    if (window.pageYOffset === 0) {
        navbar.classList.remove("scrolled");
    } else {
        navbar.classList.add("scrolled");
    }

};
//end

//chuchay
const text = "It's a brilliant";
const textElement = document.getElementById("text");
let index = 0;

function type() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;

        setTimeout(type, 90);


    }
}  type();
//end
//Thư viện owl-carousel
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
            items:2
        },
        1000:{
            items:3
        }
    }
});
//end

//light box
$(document).ready(function() {
    $(".owl-carousel").owlCarousel();

    $(".gallery-list a.zoom").click(function(event) {
        event.preventDefault();
        var href = $(this).attr("href");
        var src = $(this).children("img").attr("src");
        var alt = $(this).children("img").attr("alt");
        $("#lightbox-img").attr("src", src);
        $("#lightbox-caption").text(alt);
        $("#lightbox").fadeIn();
    });

    $("#lightbox-close").click(function(event) {
        event.preventDefault();
        $("#lightbox").fadeOut();
    });

});
//end


//tab link
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

$(document).on('click', '#scroll-to-element', function(event) {
    event.preventDefault();
    var target = $(this).attr('data-scroll');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000, 'easeInOutExpo');
});

var xValues = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
var yValues = [72, 84, 65, 96, 88];
var barColors = ["#14a5d3", "#20baa0","#2e91d2","#f5b343","#ed5b66"];

new Chart("myChart", {
    type: "horizontalBar",
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
        },
        scales: {
            xAxes: [{ticks: {min: 50, max:100}}]
        }
    }
});

const element = document.querySelector('#my-element');

function slideInLeft() {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / .1;

    if (elementPosition < screenPosition) {
        element.classList.add('slideInLeft');
    }
}

window.addEventListener('scroll', slideInLeft);

const elementt = document.getElementById("elementt");
elementt.classList.add("slideInRight");








 // Kích hoạt hiệu ứng


// setTimeout(function() {
//     myDiv.classList.remove("slideInDown"); // Hủy hiệu ứng sau 1 giây
// }, 1000);
$(document).ready(function() {
    $('#myDiv').addClass('animated fadeInDown');
});




//Vòng tròn


    function arcMove(limit, can, spanProcent){
        var can = document.getElementById(can),
            spanProcent = document.getElementById(spanProcent),
        c = can.getContext('2d');

    var posX = can.width / 2,
        posY = can.height / 2,
        fps = 1000 / 200,
        procent = 0,
        oneProcent = 360 / 100,
            result = oneProcent * limit;

    c.lineCap = 'round';

        var deegres = 0;
        var acrInterval = setInterval (function() {
            deegres += 1;
            c.clearRect( 0, 0, can.width, can.height );
            procent = deegres / oneProcent;

            spanProcent.innerHTML = procent.toFixed();

            c.beginPath();
            c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
            c.strokeStyle = '#b1b1b1';
            c.lineWidth = '10';
            c.stroke();

            c.beginPath();
            c.strokeStyle = '#13aad3';
            c.lineWidth = '10';
            c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
            c.stroke();
            if( deegres >= result ) clearInterval(acrInterval);
        }, fps);

    }

// Xac dinh khi cuon chuot toi phan tu
// Get the target element you want to observe
const target = document.querySelector('#canvas-1');
const target0 = document.getElementById('intro');
const target1 = document.getElementById('fade-in-up')

// Create an Intersection Observer instance
const observer = new IntersectionObserver(entries => {
    // Loop through the entries array
    entries.forEach(entry => {
        // Check if the target element is intersecting with the viewport
        if (entry.isIntersecting) {
            // Target element is entering the viewport, do something
            arcMove(60, 'canvas-1', 'procent-1');
            arcMove(40, 'canvas-2', 'procent-2');
            arcMove(20, 'canvas-3', 'procent-3');
            arcMove(50, 'canvas-4', 'procent-4');
            target0.classList.add('fadeInDown');
            target1.classList.add('fade-in-up');
}
    });
});

// Observe the target element
observer.observe(target);
observer.observe(target0);
observer.observe(t)






//form

var prevImg = null;

function showFormat(img) {
    var selectedImage = document.getElementById("selectedImage");
    selectedImage.src = img.src;
    // Remove border from previous image
    if (prevImg != null) {
        prevImg.style.border = "none";
    }

    // Add border to clicked image
    img.style.border = "3px solid Pink";

    img.style.boxTopRightShadow = "10% 10% #FFC0CB";

    // Get format of the image and display it
    var format = img.src.split('.').pop().toUpperCase();
    document.getElementById("format").innerHTML ;

    // Set current image as previous image
    prevImg = img;
}

