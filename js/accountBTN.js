var reservationData = localStorage.getItem('reserveData');
var accountBTN = document.getElementById('accountBTN');

if (reservationData) {
    accountBTN.style.display = 'block';
}
else{
    accountBTN.style.display = 'None';
}