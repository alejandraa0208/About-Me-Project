'use strict';

let name;
let numberOfTimeToAskName = 2;

while (!name && numberOfTimeToAskName) {
  name = prompt('What is your name?');
  if (name === null || name.trim() === '') {
    alert('Please enter a valid name.');
  }
  numberOfTimeToAskName--;
}

let message = 'Hello, ' + name + '! Thanks for wanting to get to know me. Here\'s a few questions to quiz you about me.';
alert(message);

//got assistance with a cleaner code from Chester
const questions = [
  'Do you think I\'m over the age of 21?',
  'Is my height over 5\'5?',
  'Is seattle my hometown?',
  'Do you think I have previous career experience in business?',
  'Have I gone skydiving?',
  'How many siblings do you think I have?',
  'What is my favorite thing to do?'
];

const answers = [
  ['yes'],
  ['no'],
  ['no'],
  ['no'],
  ['yes'],
  ['9'],
  ['binge TV series', 'listen to music', 'take naps']
];

const explanations = [
  'I\'m actually 25!',
  'It\'s giving midget, I\'m 5\'1.',
  'Born and kinda raised in sunny Arizona',
  'But I do own my own press on nail business.',
  'I have gone skydiving and I went alone for my 23rd birthday!',
  'I am the oldest of 9 siblings',
  '. These are my top three favorite things to do!'
];

let correctAnswersCount = 0; // helps keep track of score

questions.forEach((question, i) => {
  let response;
  let validResponse = false;
  let numberOfAttempts = (i === 5) ? 4 : (i === 6) ? 6 : 1; // lets question 7 get 6 attempts while the rest only get 2

  while (!validResponse && numberOfAttempts > 0) {
    response = prompt(question);
    if (response === null) {
      alert ('Please answer the question');
    } else {
      if (i === 5 && isNaN(response)) {
        alert('Invalid answer. Please enter a number.');
      } else {
        if (i === 5) {
          const answerNumber = parseInt(response);
          const correctNumber = parseInt(answers[i][0]);

          if (answerNumber === correctNumber) {
            validResponse = true;
            alert('Correct! ' + explanations[i]);
            correctAnswersCount++;
          } else if (answerNumber < correctNumber) {
            alert('Your guess is too low.');
          } else {
            alert('Your guess is too high.');
          }
        } else {
          let isCorrect = false;
          if (answers[i].length === 0) {
            isCorrect = true;
          } else {
            for (let j = 0; j < answers[i].length; j++) {
              if (answers[i][j].toLowerCase() === response.toLowerCase()) {
                isCorrect = true;
                break;
              }
            }
          }
          if (isCorrect) {
            validResponse = true;
            alert('Correct! ' + explanations[i]);
            correctAnswersCount++;
          } else {
            alert('Incorrect!');
          }
        }
      }
    }
    numberOfAttempts--;
  }

  if (!validResponse) {
    let correctAnswers = '';
    for (let j=0; j < answers[i].length; j++) {
      correctAnswers += answers[i][j];
      if (j !== answers[i].length - 1) {
        correctAnswers += ',';
      }
    }
    alert('The correct answer is: ' + correctAnswers + ' ' + explanations[i]);
  }
});

alert('Thank you for playing, ' + name + '! Your score is: ' + correctAnswersCount + ' out of ' + questions.length);
