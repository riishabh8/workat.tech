const readLineSync = require("readline-sync");


//Questions
const data = [
  {
    question: "Does edith has a full form ?",
    answer: "Yes",
    options: ["Yes", "No", "May be", "Are you kidding"],
    message: "Even Dead, I'm The Hero"
  },
  {
    question: "Captain's sheid is made up of material ",
    answer: "Wakanda",
    options: ["Uganda", "Wakanda", "Paragua ", "West Indies "]
  },
  {
    question: "Peter is a ?",
    answer: "Teenager",
    options: ["Kid", "Adult", "Mature", "Teenager"]
  },
  {
    question: "Does jarvis has a full form ?",
    answer: "Yes",
    options: ["Yes", "No", "May be", "Are you kidding"],
    message: "Just A Really Very Intelligent System"
  },
  {
    question: "Material used in spiderman's suit ?",
    answer: "spandex",
    options: ["spandex", "Elastic", "Rubber", "Microfiber"]
  }
];

function correctAnswer(obj, idx) {
  let selectedOption = obj.options[idx - 1];

  if (obj.answer === selectedOption) return true;
  return false;
}

function displayQuestion(obj) {
  console.log(obj.question);
  obj.options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });
}

function takeInput(name) {
  return Number(readLineSync.question(`What's your guess ${name}\n`));
}

function takeName() {
  return readLineSync.question(`What's your name?\n`);
}

function displayAnswer(obj, name) {
  bool = correctAnswer(obj, takeInput(name));
  if (bool) {
    console.log("You guessed it correct");
    if (obj.message) console.log(obj.message);
    return 1;
  } else {
    console.log("Nahhh, better luck next time!!!");
    if (obj.message) console.log(obj.message);
    return 0;
  }
}


//Driver Function
const quiz = () => {
  let score = 0;
  const name = takeName();
  console.log(
    `Hello ${name},\nWelcome to the quiz on Marvel Cinematic Universe`
  );

  data.forEach((element) => {
    displayQuestion(element);
    score += displayAnswer(element, name);
  });

  console.log(`Your Score for the quiz is ${score}`);
};

quiz();
