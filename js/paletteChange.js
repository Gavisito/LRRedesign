function chooseColor(){
    var color = prompt('Choose a color (Format Red, #F4F0EC, rgb(255, 255, 255))');
    localStorage.setItem('pageColor', color);
    getColor()
}

function getColor(){
    color = localStorage.getItem('pageColor');
    paletteColor(color);
}

function paletteColor(color){    
    var width = window.innerWidth;//this is specifically for the sidebar when it goes to the top for navigation

    //getting all element with background property in css
    var footer = document.getElementsByTagName('footer');
    var companyCore = document.getElementsByClassName('companyCore')[0];
    var cItems = document.getElementsByClassName('cItem');
    var menuCard = document.getElementsByClassName('menuCard')[0];
    var reserveCard = document.getElementsByClassName('reserveCard')[0];
    var menuHeader = document.getElementById('menuHeader');
    var reservationIntro = document.getElementsByClassName('reservationIntro')[0];
    var submitBtn = document.getElementById('submitBtn');
    var rowShade = document.getElementsByClassName('rowShade');
    var userHeader = document.getElementsByClassName('userHeader')[0];
    var rBtn = document.getElementById('rBtn');
    var sidebar = document.getElementsByClassName('sidebar')[0];
    var resInfoHead = document.getElementById('resInfoHead');

    //the following if statements are used because it check if it exist on respective html pages. 
    //if it does then it changes the style. if it doesnt exist on the pgae then it does nothing
    if (companyCore) {
        companyCore.style.backgroundColor = color; 
    }
    if (cItems){
        for (let i = 0; i < cItems.length; ++i){ //when using getElementsByClassName, it is needed to iterate because it returns array/collection
            cItems[i].setAttribute('style','background-color:' + color);
        }
    }
    if (menuCard) {
        menuCard.setAttribute('style','background-color:' + color)
    }
    if (reserveCard) {
        reserveCard.setAttribute('style','background-color:' + color)
    }

    if (reservationIntro){
        reservationIntro.setAttribute('style','background-color:' + color)
    }

    if (menuHeader){
        menuHeader.setAttribute('style','background-color:' + color)
    }

    if (submitBtn){
        submitBtn.setAttribute('style','background-color:' + color)
    }

    if (userHeader){
        userHeader.setAttribute('style','border-color:' + color)
    }

    if (resInfoHead){
        resInfoHead.setAttribute('style','background-color:' + color)
    }

    if (rowShade){
        for (let i = 0; i < rowShade.length; ++i){
            rowShade[i].setAttribute('style','background-color:' + color);
        }
    }

    if(sidebar){
        if(width < 1025){ //this is the breakpoint where the sidebare becomes the topbar on mobile devices
            sidebar.setAttribute('style','background-color:' + color) //when it is mobile
        }
        else{
            sidebar.setAttribute('style', 'backgroundColor: transparent');//when its laptop devices and above. return to no background color
        }
       
    }
    if(rBtn){
        rBtn.setAttribute('style','background-color:' + color);
    }

    if(footer){
        footer[0].setAttribute('style','background-color:' + color);
    }
}
var colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', chooseColor, false );//when the change color button is click in the footer it ask user for color and adjust accordingly
window.addEventListener('load', getColor, false);
window.addEventListener('resize', getColor);//when the viewport changes width then it will adjust the navbar bgcolo accordingly. 
                                            //Useful when user on mobile changes between landscape and vertical view

//companyCore

//cItem

//cardContainer section
  //menuCard
  //reserveCard

//menuHeader

//sidebar

//itemDescription a

//rowShade

//blankSpace

//userHeader border

//reservationIntro

//submitBtn

//footer