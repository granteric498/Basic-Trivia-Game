// Establish counters for correct, incorrect, and unanswered questions.
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// Establish variable for the timer.
var time = 60;

// Establish variable for the clock interval (1 second)
var intervalId;

// When user clicks on start, function "run" will start.
$("#start").on("click", run);

function run() {
    // Displays the questions:
    $("#text").css("display", "inline");

    // Hides the start button
    $("#start").css("display", "none");

    // Sets the variable for the clock interval at one second
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};  

function decrement() {
    // Clock will go down one second and display each second
    time--;
    $("#clock").html("<h2>Time remaining: " + time + "</h2>");

        // If time reaches 0, function "stop" is run.
        if (time === 0) {
            stop();
            end;
        };
};

function stop() {
    // This stops the clock from running.
    clearInterval(intervalId);

    // Hide the questions and the clock
    $("#text").css("display", "none");
    $("#clock").css("display", "none");

    // Calculates the correct and incorrect answers: 
    $("#start").css("display", "none");

    if ($("input[name='question1']:checked").val() == 1) {
        // All correct answers have a value of one.
        // If selected answer has value of one, correct answer ++
        correct++;
    } else if ($("input[name='question1']:checked").length == 0) {
        // If the question does not have any checked boxes,
        // it counts as an unanswered question. Unanswered++
        unanswered++;
    } else {
        // All remaining values are 0, which is an incorrect answer.
        incorrect++;
    };
    if ($("input[name='question2']:checked").val() == 1) {
        correct++;
    } else if ($("input[name='question2']:checked").length == 0) {
        unanswered++;
    } else {
        incorrect++;
    };
    if ($("input[name='question3']:checked").val() == 1) {
        correct++;
    } else if ($("input[name='question3']:checked").length == 0) {
        unanswered++;
    } else {
        incorrect++;
    };
    if ($("input[name='question4']:checked").val() == 1) {
        correct++;
    } else if ($("input[name='question4']:checked").length == 0) {
        unanswered++;
    } else {
        incorrect++;
    };
    if ($("input[name='question5']:checked").val() == 1) {
        correct++;
    } else if ($("input[name='question5']:checked").length == 0) {
        unanswered++;
    } else {
        incorrect++;
    };
    if ($("input[name='question6']:checked").val() == 1) {
        correct++;
    } else if ($("input[name='question6']:checked").length == 0) {
        unanswered++;
    } else {
        incorrect++;
    };
    if ($("input[name='question7']:checked").val() == 1) {
        correct++;
    } else if ($("input[name='question7']:checked").length == 0) {
        unanswered++;
    } else {
        incorrect++;
    };
    if ($("input[name='question8']:checked").val() == 1) {
        correct++;
    } else if ($("input[name='question8']:checked").length == 0) {
        unanswered++;
    } else {
        incorrect++;
    };

    /*
    for (i = 1; i < 8; i++) {
        if ($("input[name='question'" + i + "']:checked").val() === 1) {
        correct++;
    } else {
        incorrect++;
    }};
    */

    // Calculating the result:
    $("#result").html("<h2>All Done!</h2>");
    $("#correct").html("<h3>Correct Answers: " + correct + "</h3>");
    $("#incorrect").html("<h3>Incorrect Answers: " + incorrect + "</h3>");
    $("#unanswered").html("<h3>Unanswered: " + unanswered + "</h3>");
};

if ($('#submit').click(function() {
    stop();
}));


    /*
    Adding a retry button:
    $("#retry").html("Would you like to go again?")
    $("#retryButton").html("<button id='retryActiveButton'>Yes!</button>"
    $("#retryActiveButton").on("click", run);
    */

    // Make sure you convert time into minutes and seconds!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
