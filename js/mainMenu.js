function mainMenuDD() {
    const menuStatus = document.querySelector('nav ul');

    if (menuStatus.style.display === 'none' || menuStatus.style.display === '') {
        menuStatus.style.display = 'flex';
    } else {
        menuStatus.style.display = 'none';
    }
}