

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
    setTimeout(showSlides, 2000);
}


function openNav(){
    document.getElementById('overlay').style.height='100%'
}
function closeNav(){
    document.getElementById('overlay').style.height = '0'
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {scrollFunction()}
let mybutton = document.getElementById('myBtn');
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = 'block'; 
    } 
    else {
        mybutton.style.display = 'none';
        mybutton.style.border = 'none'
    }
}
