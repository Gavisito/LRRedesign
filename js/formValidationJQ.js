$("#reservationForm").validate({
    rules: {
        reservationName: {
            required: true,
            minlength: 2
        },
        emailAddress: {
            required: true,
            email: true
        },
        phoneNumber: {
            required: true,
        },
        reservationDate: {
            required: true,
            date: true
        },
        reservationTime: {
            required: true,
            time: true
        },
        attendance: {
            required: true,
            digits: true,
            range: [1, 6] 
        }
    },
    messages: {
        reservationName: {
            required: "Please enter your name.",
            minlength: "Your name must be at least 2 characters long."
        },
        emailAddress: {
            required: "Please enter your email address.",
            email: "Please enter a valid email address."
        },
        phoneNumber: {
            required: "Please enter your phone number.",
            pattern: "Please enter a valid phone number in the format (123)-456-7890."
        },
        reservationDate: {
            required: "Please select a reservation date.",
            date: "Please enter a valid date."
        },
        reservationTime: {
            required: "Please select a reservation time."
        },
        attendance: {
            required: "Please enter the number of attendees.",
            digits: "Please enter only numbers for attendance.",
            range: "Attendance must be between 1 and 6."
        }
    }
});