function updateReserve(){
    console.log('connected');//verifier
    var reservationData = JSON.parse(localStorage.getItem('reserveData'));
    var newName = prompt('Enter the new name for this reservation:')//this prompt the user to enter a new name
    if (newName) {
        //this assigns a the update name for the reservation once click on the button.
        reservationData[0] = newName;
        console.log(reservationData)
        updateData = JSON.stringify(reservationData); //this convert the array into a string array '[data, data]'
        localStorage.setItem('reserveData', updateData); //this is method i used to update the reservation data
        displayData()//this will redisplay the new updated name for the user once they submit it in the prompt
    } else {
        alert('enter a proper name.');
    }
}