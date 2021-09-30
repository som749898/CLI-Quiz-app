var readlineSync = require('readline-sync');
var userName = readlineSync.question("Please enter your name?\n");
console.log("Welcome " + userName + " to DO YOU KNOW ME game!!");
console.log(`
1. In this game you have to answer some personal questions about me
2. Total there are 8 questions
3. For each correct answer you get 1 point
4. No deduction for any wrong answer`);
console.log();
console.log("Let the game begin");

var highScorer = [
  {
    name: 'Pratik',
    score: 8
  },
  {
    name: 'Pritam',
    score: 7
  },
  {
    name: 'Sakshi',
    score: 7
  }
]
var score = 0;

var questionOne = {
  question: `
  1. What is my name?
  a. Manish
  b. Raj
  c. Pritam
  d. Ayush\n` ,
  answer: 'a'
};

var questionTwo = {
  question: `
  2. Where do I live?
  a. Delhi
  b. Goa
  c. Bhubaneswar
  d. Mumbai\n`,
  answer: 'c'
};

var questionThree = {
  question: `
  3. Where do I study?
  a. NIT
  b. IIT
  c. CET
  d. VSSUT\n` ,
  answer: 'd'
};

var questionFour = {
  question: `
  4. What is my favorite color?
  a. blue
  b. red
  c. green
  d. pink\n` ,
  answer: 'b'
};

var questionFive = {
  question: `
  5. What is my favorite anime?
  a. Attack on Titan
  b. Naruto
  c. Haikyuu
  d. All of these\n`,
  answer: 'd'
};

var questionSix = {
  question: `
  6. What is my favorite movie?
  a. John Wick
  b. Dark knight rises
  c. Bahubali
  d. Chak de India\n`,
  answer: 'a'
};

var questionSeven = {
  question: `
  7. What is my favorite snack?
  a. Egg roll
  b. Biriyani
  c. Pav bhaji
  d. Sandwhich\n`,
  answer: 'c'
};

var questionEight = {
  question: `
  8. Am I a vegetarian
  a. True
  b. False\n`,
  answer: 'a'
};

var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight];

function game(question,answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer===answer) {
    console.log("You are correct");
    score++;
    console.log("You scored 1 point");
  } else {
    console.log("You are wrong");
    console.log("You scored 0 point");
  }
  console.log("-------------------");
}

 for (var i=0 ; i<questions.length ; i++) {
  var aug1 = questions[i].question;
  var aug2 = questions[i].answer;
  game(aug1,aug2);
  }
console.log();
console.log("Your total score is " + score);
console.log("Highest scorer is Pratik with 8 points!!");
console.log("If you have beaten the highscorer plss send me your screenshot");