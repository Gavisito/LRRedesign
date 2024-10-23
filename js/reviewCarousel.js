function next(){
    console.log('next')
    carousel.scrollLeft += 380;
    carousel.scrollTo('smooth')
}

function back(){
    console.log('previous')
    carousel.scrollLeft -= 380;
}

function settingUP(){
    var nextBTN = document.getElementById('next');
    var previousBTN = document.getElementById('previous');

    nextBTN.addEventListener('click', next, false);
    previousBTN.addEventListener('click', back, false);
}

var carousel = document.getElementById('carouselNav')
window.addEventListener('load', settingUP, false)