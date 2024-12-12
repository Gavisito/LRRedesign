//This is for the carousel smooth scroll feaure
$(function () {
    var carousel = $("#carouselNav"); //this get the carousel section with cItem for slding effect on clicking button
    var itemWidth = 380; //this is the stadnard width i have set for cItem
    let currentIndex = 0; //counter for where it will slide to when they click on next or previous button

    function updateCarousel() { //this is the animation function for smooth scroll with 200 ms speed
        carousel.animate({ 
            scrollLeft: currentIndex * itemWidth
         }, 200);
    }

    $("#next").click(function () {// event for next button
        currentIndex++; //1-6 cItem
        updateCarousel(); //cals animation
    });

    $("#previous").click(function () {
        currentIndex-- //1-6 cItem
        updateCarousel(); //calls animation
    });
});

//The next portion is to use XML request to post comment dynamically
//i reviewed the following W3Schools to create the code for XML fnctionality because I wanted something more concise and modular and better understand of how things work
//https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
function startXML() {
    var request = new XMLHttpRequest(); // initaition xml request process
    request.open('GET', 'reviews.json', true); // gets the information from reviews.json

    //Using XMLHttpRequest to get json data
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {//confirm it is valid
            // Parse the JSON response for formatting
            var data = JSON.parse(request.responseText);//json is what im used to using comfortably
            displayComments(data.reviews); // Sending it to different function for readability to handle the creating of review coment cards. similar to lecture example
        }
    };
    //this sends it to the http server
    request.send();
}

function displayComments(reviews) {
    var carousel = document.getElementById("carouselNav");//to get the carousel slider div

    for (var cItem = 0; cItem < reviews.length; cItem++) { //traversing through the json data gathered from the startXML function
        
        var commentItem = ""; //blank slate for new future comments
            commentItem += "<div class='cItem'>"; // create individual comment item
            commentItem += "<h3>" + reviews[cItem].author + "</h3>" //name of commentor
            commentItem += "<p>" + reviews[cItem].comment + "</p>"; //commentor review information
            commentItem += "</div>"; //close comment item
            
        carousel.innerHTML += commentItem; //this allows for it to stack the comments instead of updating
    }
}

// This call the startXML once the user goes into te index.html and it full loa contet
window.addEventListener('load', startXML, false);