// ************************************************
//    
//     [Table of Contents]
//
//     - References to Elements
//     - Quiz Questions
//     - Functions
//     - Event Listeners
//
//
// ************************************************


// ======================
// References to Elements
// ======================

// timer 
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

// quiz box
var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

// quiz questions
var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

// results
var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");

// highscores
var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

// other
var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

// values
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;


// ==============
// Quiz Questions
// ==============

const questions = [
    {
        question: "Which of the following keywords is used to define a variable in JavaScript?",
        choices: ["a. var", "b. let", "c. Both a and b", "d. None of the above"],
        answer: "c. Both a and b"
    },
    {
        question: "Which built-in method returns the calling string value converted to upper case?",
        choices: ["a. toUpperCase()", "b. toUpper()", "c. changeCase(case)", "d. parentheses"],
        answer: "a. toUpperCase()"
    },
    {
        question: "A ____ represents a logical entity and can only have two values: true or false.",
        choices: ["a. string", "b. boolean", "c. number", "d. none of the above"],
        answer: "b. boolean"
    },
    {
        question: "To see if two variables are equal in an if / else statement you would use ____.",
        choices: ["a. =", "b. ==", "c. 'equals'", "d. !="],
        answer: "b. =="
    },
    {
        question: "The first index of an array is ____.",
        choices: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a. 0"
    },
    {
        question: "Which of the following is not a JavaScript framework?",
        choices: ["a. Node", "b. Vue", "c. React", "d. Cassandra"],
        answer: "d. Cassandra"
    },
];

