document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to server

    // Collect form data
    let regNo = document.getElementById("regNo").value;
    let course = document.getElementById("course").value;
    let semester = document.getElementById("semester").value;
    let totalCredits = document.getElementById("totalCredits").value;
    let cgpa = document.getElementById("cgpa").value;
    let expectedCredits = document.getElementById("expectedCredits").value;
    let remainingCredits = 162-totalCredits;
    let averageCreditsPerSem = (remainingCredits/(8-semester)).toFixed(2);

    // Prepare acknowledgment message
    let ackMessage = `
        You Have To Run For ${remainingCredits} Credits <br> <br>
        Average Credits Per Semester To Complete Your Credits List: ${averageCreditsPerSem} <br>
        <br>Thank you for providing your details!
    `;

    // Display acknowledgment message
    document.getElementById("ackMessage").innerHTML = ackMessage;
    document.getElementById("acknowledgment").classList.remove("hidden");
});
