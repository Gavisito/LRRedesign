var reservationData = localStorage.getItem('reserveData'); //getting the data
var accountBTN = document.getElementById('accountBTN'); //getting the account button

if (reservationData) {//when data exist, then it will show the account button
    accountBTN.style.display = 'block';
}
else{//when data does not yet exist then it will be hidden
    accountBTN.style.display = 'None';
}