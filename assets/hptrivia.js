let count = 150;
let intervalId;
$(document).ready(function () {
    countdown();

    function countdown() {
        intervalId = setInterval(function () {
            count--;
            $(".remaining-time").text(count);
            if (count <= 0) {
                $(".timezone").empty();
                let timeUp = $("<h2>").text("Time is up!");
                $(".timezone").append(timeUp);
                clearInterval(intervalId);
                result();
            }
        }, 1000);
    }

    function result() {
        const correct = $('input[type="radio"][value="true"]:checked').length;
        const incorrect = $('input[type="radio"][value="false"]:checked').length;

        $(".questionBlock").empty();
        $(".submitButton").empty();
        const correctDisplay = $("<b>").text("You have " + correct + " correct answers!");
        $(".questionBlock").append(correctDisplay);
        $(".questionBlock").append('<br/>');
        const incorrectDisplay = $("<b>").text("You have " + incorrect + " incorrect answers!");
        $(".questionBlock").append(incorrectDisplay);
        $(".timezone").empty();
        const congrats = $("<h2>").text("Congrats! You have completed the test. Now go have some fun.");
        $(".timezone").append(congrats);
    }

    $(".submitButton").on("click", function () {
        clearInterval(intervalId);
        result();
    })
});