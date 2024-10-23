function next(){//this function is activated when the user presses the next button/right arrow button
    console.log('next')
    carousel.scrollLeft += 380;//scroll to the right
    carousel.scrollTo('smooth')
}

function back(){ //this function is activated when the user presses the back button/left arrow button
    console.log('previous')
    carousel.scrollLeft -= 380;//scroll to the left
}

function settingUP(){ //getting and setting up clicking events for the buttons
    var nextBTN = document.getElementById('next');
    var previousBTN = document.getElementById('previous');

    nextBTN.addEventListener('click', next, false);
    previousBTN.addEventListener('click', back, false);
}

var carousel = document.getElementById('carouselNav') //getting the carousel id to scroll
window.addEventListener('load', settingUP, false) //loading up