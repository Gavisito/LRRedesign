var count;//counts the ms 

//this functions display the mascot/little chef i created
function mascot(){
    console.log('mascot connected')
    var mascot = document.getElementById('mascot');
    mascot.setAttribute('style', 'display: flex');
    count = setInterval(transitionRemoval, 5000);//once 5 seconds has past, it will call the transitionRemoval function to end animation
}

//the the transitionRemoval provides a way to smoothly remove the mascot.
function transitionRemoval(){
    var mascot = document.getElementById('mascot');
    mascot.classList.add('removeMascot'); //this is the class that using opacity to remove the mascot from view
    setTimeout(removeMascot, 2000); //this sets a period of time for the opacity transition to run before calling the actuall removal from the DOM; otherwise without it it would not show opacity transition
}

function removeMascot(){
    var mascot = document.getElementById('mascot');
    var content = document.getElementById('mascotParent');
    content.removeChild(mascot); //this gets rid of the entire html to offload it from the DOM in case of unwanted interaction after removal
    clearInterval(count);
}

var mascotElmt = document.getElementById('mascot');
mascotElmt.addEventListener('click', transitionRemoval, false)

window.addEventListener('load', mascot, false);