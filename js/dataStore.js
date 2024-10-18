function storeData(){
    console.log('connected');
    var reservationInfo = [];
    reservationInfo.push(document.getElementById('reservationName').value);
    reservationInfo.push(document.getElementById('emailAddress').value);
    reservationInfo.push(document.getElementById('phoneNumber').value);
    reservationInfo.push(document.getElementById('reservationDate').value);
    reservationInfo.push(document.getElementById('reservationTime').value);
    reservationInfo.push(document.getElementById('attendance').value);
    reservationInfo.push(document.getElementById('otherNotes').value);
    console.log(reservationInfo);
    sendData = JSON.stringify(reservationInfo);
    localStorage.setItem('reserveData',sendData);
    window.open('account.html');
}

function setup(){
    var getForm = document.getElementById('submitBtn');
    getForm.addEventListener("click", storeData, false);
}
window.addEventListener("load", setup, false);