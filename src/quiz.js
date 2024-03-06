// install node and readline-sync for input
// npm install node
// npm install readline-sync

const readlineSync = require('readline-sync');

//Global variable
const questions = [ //Array that stores question objects
  {
    question: "What is 2 + 2?",
    options: ["2", "3", "4", "5"],
    answer: "4"
  },
  {
    question: "What is the capital of New Zealand?",
    options: ["Auckland", "Wellington", "Nelson", "Christchurch"],
    answer: "Wellington"
  },
  // Add more questions here
];

//Declare Quiz function
function quiz() {
  let score = 0; //Declare score variable

  //Iterate through questions variable
  questions.forEach((q, index) => {
    console.log(`Question ${index + 1}: ${q.question}`); //String concatination, inserts each question into string template literal, displays the question
    q.options.forEach((option, i) => { 
      console.log(`${i + 1}. ${option}`);//Displays the options for the question one after the other.
    });

    //Request User Input via readline
    let userAnswer = readlineSync.question('Your answer (number): ');
    let answerIndex = parseInt(userAnswer, 10) - 1;

    if(answerIndex < 0 || answerIndex >= q.options.length) {
        console.log(`Please select an option from 1 to ${q.options.length}`);
      } else if(q.options[answerIndex] === q.answer) { // Compare the text of the selected option to the answer
        console.log("Correct!");
        score++;
      } else {
        console.log("Wrong!");
      }
    });
  //Display the final score out of the number of questions
  console.log(`Your final score is: ${score}/${questions.length}`);
}

// Start the quiz
quiz();
