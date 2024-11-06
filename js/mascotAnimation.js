var count;//counts the ms 

//this functions display the mascot/little chef i created
function mascot(){
    var mascot = document.getElementById('mascot');
    mascot.setAttribute('style', 'display: flex')
    count = setInterval(removeMascot, 5000);//once 5 seconds has past, it will call the removeMascot function to end animation
}

function removeMascot(){
    var mascot = document.getElementById('mascot');
    var content = document.getElementById('contentMenu');
    content.removeChild(mascot); //this gets rid of the entire html to offload it from the DOM in case of unwanted interaction after removal
    clearInterval(count);
}

window.addEventListener('load', mascot, false);