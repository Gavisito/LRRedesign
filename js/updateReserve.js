var reservationData = JSON.parse(localStorage.getItem('reserveData'));
var updateBTN = document.getElementById('updateReserve');


function updateReserve(){
    window.open('empanada.html');
}

updateBTN.addEventListener('click', updateReserve, false);