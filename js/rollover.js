function mouseOver(){
    console.log('mouseover');
    heroIMG.style.transform = 'scale(1.25)';
    heroIMG.style.transition = 'transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
}

function mouseOut(){
    console.log('mouseout');
    heroIMG.style.transform = 'scale(1)';
}
var heroIMG = document.getElementById('heroIMG');
heroIMG.addEventListener('mouseover', mouseOver, false);
heroIMG.addEventListener('mouseout', mouseOut, false);

