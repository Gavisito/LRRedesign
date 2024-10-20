function storeData(){
    console.log('connected');
    var reservationInfo = []; //used to store each form input and push into local storage

    //the following retrieves the submission from the form
    let reservationName = document.getElementById('reservationName').value;
    let emailAddress = document.getElementById('emailAddress').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let reservationDate = document.getElementById('reservationDate').value;
    let reservationTime = document.getElementById('reservationTime').value;
    let attendance = document.getElementById('attendance').value;
    let otherNotes = document.getElementById('otherNotes').value;

    //condition when they submit null values into the form. this mitigates the issue where "click" in the addeventlistner moves onto displaying it into the account pages
    if (!reservationName || !emailAddress || !phoneNumber || !reservationDate || !reservationTime || !attendance) {
        alert("Please fill in all required fields.");
        return;
    }
    //the conditiona where all the required fields have been filled out (assuming they are valid information and not sql injection ;())
    else{
        //sending form data into the array
        reservationInfo.push(reservationName);
        reservationInfo.push(emailAddress);
        reservationInfo.push(phoneNumber);
        reservationInfo.push(reservationDate);
        reservationInfo.push(reservationTime);
        reservationInfo.push(attendance);
        reservationInfo.push(otherNotes);
        console.log(reservationInfo);
        //this makes the array in a string '['data','data']' since slides mentioned string requirement for storing in localstorage
        sendData = JSON.stringify(reservationInfo);
        localStorage.setItem('reserveData', sendData);
        window.open('account.html');
    }
}

function setup(){
    var getForm = document.getElementById('submitBtn');
    getForm.addEventListener("click", storeData, false);
}
window.addEventListener("load", setup, false);