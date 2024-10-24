function randomIMG() {
    //list of images i chose to randomly to be selected
    var imgs = ['./images/sky1.jpeg', './images/sky2.jpg', './images/sky3.jpeg', './images/sky4.jpeg', './images/menuBGL.jpg'];
    var recipiebg = document.getElementsByClassName('externalRecipies'); //i used classnmae because i felt it was easier ot use the css backgroundimage property
    
    //this gets the random index from the imgs array. adjusted based on lecture 6 method
    var random = Math.floor(Math.random() * imgs.length);
    
    //recipebg[0] points to the first element because apparently it can store more than one element witht same class name and add the backgorund image to css property based on the index randomly selected
    recipiebg[0].style.backgroundImage = "url(" + imgs[random] + ")" ;
}

window.addEventListener("load", randomIMG, false);
