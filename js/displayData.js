function displayData() {
    var storage = "";//this variable is used to store html markup to insert for display into the account.html table
    
    // Retrieve data from LocalStorage
    var reservationData = JSON.parse(localStorage.getItem('reserveData'));
    console.log(reservationData); //checking how the data looks in inspect dev tools


    var greetName = document.getElementById('greeting');
    storage += "<h2>Looking Forward To See You There, </br> " + reservationData[0] + "</h2>"
    greetName.innerHTML += storage;
    storage = ""//this reset the strorage variable for other uses

    var showResult = document.getElementById('reservationInformation');//this points to the table body to enter rows.
    // 'reservationData' is boolean to check if it is true that there is data in the local stroage object 'reserveData'
    if (reservationData) {//the case where there is data to insert into the table body from form submission.
        storage += "<tr>";
            storage += "<td>" + reservationData[0] + "</td>" ;
            storage += "<td>" + reservationData[1] + "</td>" ;
            storage += "<td>" + reservationData[2] + "</td>" ;
            storage += "<td>" + reservationData[3] + "</td>" ;
            storage += "<td>" + reservationData[4] + "</td>" ;
            storage += "<td>" + reservationData[5] + "</td>" ;
            storage += "<td>" + reservationData[6] + "</td>" ;
        storage += "</tr>" ;
    }
    else{ //when no has been intially enter by the user the following row will be entered in the table.
        storage += "<tr>";
            storage += "<td>" + "No Data" + "</td>" ;
            storage += "<td>" + "No Data" + "</td>" ;
            storage += "<td>" + "No Data" + "</td>" ;
            storage += "<td>" + "No Data" + "</td>" ;
            storage += "<td>" + "No Data" + "</td>" ;
            storage += "<td>" + "No Data" + "</td>" ;
            storage += "<td>" + "No Data" + "</td>" ;
        storage += "</tr>" ;
    }
    
    showResult.innerHTML += storage;
    storage = ""
    
}
window.addEventListener("load", displayData, false)