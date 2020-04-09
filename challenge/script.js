const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: "Commonly used data types to NOT include:",
        choice1: "stirngs",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        answer: 3
    },
    {
        question: "Arrays in JavaScript can be used to store _____:",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        answer: 4
    },
    {
        question: "The condition in an if / else statement is enclosed with____.",
        choice1: "parenthesis",
        choice2: "curly brackets",
        choice3: "square brackets",
        choice4: "quotes",
        answer: 1
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choice1: "quotes",
        choice2: "commas",
        choice3: "parenthesis",
        choice4: "curly brackets",
        answer: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "JavaScript",
        choice2: "Terminal/bash",
        choice3: "for loop",
        choice4: "console.log",
        answer: 4
    },
    
];
//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startQuiz = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  console.log(availableQuesions);
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  console.log(availableQuesions);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    console.log(selectedAnswer);
    getNewQuestion();
  });
});

startQuiz();
