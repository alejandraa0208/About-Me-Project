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

function askQuestion(promptText, yesAnswer, yesAnswerOutput, noAnswer, noAnswerOutput) {
  let response;
  let validResponse = false;
  let numberOfTimeToAskQuestion = 1;

  while (!validResponse && numberOfTimeToAskQuestion) {
    response = prompt(promptText);
    if (response === null) {
      alert('Please answer the question.'); // Display a message to prompt the user to answer
    } else {
      if (response.toLowerCase() === yesAnswer) {
        validResponse = true;
        //console.log('User responded with: ' + response);
        //console.log('Displaying output for "yes" answer...');
        alert(yesAnswerOutput);
      } else if (response.toLowerCase() === noAnswer) {
        validResponse = true;
        //console.log('User responded with: ' + response);
        //console.log('Displaying output for "no" answer...');
        alert(noAnswerOutput);
      } else {
        //console.log('User provided an invalid response: ' + response);
        alert('Invalid response. Please answer \'yes\' or \'no\'.');
      }
    }
    numberOfTimeToAskQuestion--;
  }
}
askQuestion('Do you think I\'m over the age of 21?','yes', 'Correct! Continue to find out my age.', 'no', 'Sorry, that\'s not correct. Continue to the next question.');
askQuestion('Am I an only child?', 'yes', 'I\'m actually the oldest of 10 siblings!', 'no','Bingo! I\'m the oldest of 10 siblings.');
askQuestion('Is Seattle my hometown?', 'yes', 'I\'m actually from Arizona','no','Correct! I\'m from sunny Arizona.');
askQuestion('Do you think I have previous career experience in business?', 'yes','Nope. Continue to the webpage to see my career experience', 'no', 'You\'re right. Continue to the webpage to see my career experience.');
askQuestion('Have I gone skydiving?', 'yes', 'I have! I went alone for my 23rd birthday.','no','Surprisingly, I have.');

alert('Thank you for getting to know me ' + name);
