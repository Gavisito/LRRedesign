function displayData() {
    var storage = "";//this variable is used to store html markup to insert for display into the account.html table
    
    // Retrieve data from LocalStorage
    var reservationData = JSON.parse(localStorage.getItem('reserveData')); //return into array format for me to index
    console.log(reservationData); //checking how the data looks in inspect dev tools

    var greetName = document.getElementById('greeting');
    storage = "<h2>Looking Forward To See You There, </br> " + reservationData[0] + "</h2>"
    greetName.innerHTML = storage;
    storage = ""//this reset the strorage variable for other uses

    var showResult = document.getElementById('reservationInformation');//this points to the table body to enter rows.
    // 'reservationData' is boolean to check if it is true that there is data in the local stroage object 'reserveData'
    if (reservationData) {//the case where there is data to insert into the table body from form submission.
        storage = `
        <div>
            <h2>Name</h2>
            <p> ${reservationData[0]} </p>
        </div>
        <div>
            <h2>Phone</h2>
            <p> ${reservationData[2]} </p>
        </div>
        <div>
            <h2>Email</h2>
            <p> ${reservationData[1]} </p>
        </div>
        <div>
            <h2>Date</h2>
            <p> ${reservationData[3]} </p>
        </div>
        <div>
            <h2>Time</h2>
            <p> ${reservationData[4]} </p>
        </div>
        <div>
            <h2>Attendance</h2>
            <p> ${reservationData[5]} </p>
        </div>
        <div>
            <h2>Reservation Notes</h2>
            <p> ${reservationData[6]} </p>
        </div>
        `
    }
    else{ //when no has been intially enter by the user the following row will be entered in the table.
        storage = `
        <div>
            <h2>Name</h2>
            <p> no data </p>
        </div>
        <div>
            <h2>Phone</h2>
            <p> no data </p>
        </div>
        <div>
            <h2>Email</h2>
            <p> no data </p>
        </div>
        <div>
            <h2>Date</h2>
            <p> no data </p>
        </div>
        <div>
            <h2>Time</h2>
            <p> no data </p>
        </div>
        <div>
            <h2>Attendance</h2>
            <p> no data </p>
        </div>
        <div>
            <h2>Reservation Notes</h2>
            <p> no data </p>
        </div>
        `
    }
    
    showResult.innerHTML = storage;
    storage = ""
    //this is for the edit name button to function whenever it gets redisplay it will directly call the update reserve function so it can be click again
    var updateName = document.getElementById('editName');
    updateName.addEventListener('click', updateReserve, false);
}
window.addEventListener("load", displayData, false)