

let slideIndex = 0;
showSlides();

function openNav(){
    document.getElementById('overlay').style.height='100%'
}
function closeNav(){
    document.getElementById('overlay').style.height = '0'
}
function topFunction(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}
