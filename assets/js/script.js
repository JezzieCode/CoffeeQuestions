// This event listener ensures that the JavaScript code runs after the DOM (HTML content) has been fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // An array to store the correct answers for each question
    const correctAnswers = ["C", "B", "B"];

    // Get references to the HTML elements
    const submitButton = document.getElementById("submit");
    const resultText = document.getElementById("result");


    // Add a click event listener to the "Submit" button
    submitButton.addEventListener("click", function () {
        // Get the selected answers for each question
        const selectedAnswers = [
            document.querySelector('input[name="answer1"]:checked'),
            document.querySelector('input[name="answer2"]:checked'),
            document.querySelector('input[name="answer3"]:checked')
        ];

        // Initialize variables to track the user's score and feedback
        let score = 0;
        let feedback = "";

        // Loop through each question
        for (let i = 0; i < selectedAnswers.length; i++) {
            if (!selectedAnswers[i]) {
                feedback += `Question ${i + 1}: Please select an option.\n`;
            } else if (selectedAnswers[i].value === correctAnswers[i]) {
                score++;
                feedback += `Question ${i + 1}: Correct!\n`;
            } else {
                feedback += `Question ${i + 1}: Wrong.\n`;
            }
        }

        // Display the user's score and feedback
        resultText.textContent = `You got ${score} out of ${correctAnswers.length} correct!\n\n${feedback}`;
    });
});
