function mainMenuDD() {
    const menuStatus = document.querySelector('nav ul'); //this will help whether or not the css says if it hidden or not

    if (menuStatus.style.display === 'none' || menuStatus.style.display === '') {
        menuStatus.style.display = 'flex';// if the hamburger icon is hidden then it will bring into display for mobile
    } else {
        menuStatus.style.display = 'none'; //if the hamburger menu is displayed, then it will hide it for non-mobile platforms
    }
}