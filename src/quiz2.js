const readlineSync = require('readline-sync');

// Global variable
const questions = [
  {
    question: "What is 2 + 2?",
    options: ["2", "3", "4", "5"],
    answer: "4"
  },
  // Add more questions here
];

function quiz() {
  let score = 0;

  questions.forEach((q, index) => {
    let questionAnswered = false; // Flag to track if the question has been successfully answered

    while (!questionAnswered) {
      console.log(`Question ${index + 1}: ${q.question}`);
      q.options.forEach((option, i) => {
        console.log(`${i + 1}. ${option}`);
      });

      let userAnswer = readlineSync.question('Your answer (number): ');
      let answerIndex = parseInt(userAnswer, 10) - 1; // Convert string to number with a base of 10 (Standard decimal) and adjust for 0-based index

      if (answerIndex >= 0 && answerIndex < q.options.length) {
        if (q.options[answerIndex] === q.answer) {
          console.log("Correct!");
          score++;
        } else {
          console.log("Wrong!");
        }
        questionAnswered = true; // Exit the while loop
      } else {
        console.log(`Please select an option from 1 to ${q.options.length}. Try again.`);
        // The loop will continue, repeating the question
      }
    }
  });

  console.log(`Your final score is: ${score}/${questions.length}`);
}

quiz();