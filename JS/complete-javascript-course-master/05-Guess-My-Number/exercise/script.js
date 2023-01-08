'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Corrent Number!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 34;
// console.log(document.querySelector('.guess').value);

// document.querySelector('');
let secretNumber = Math.trunc(Math.random() * 20) + 1; // *20是生成一个20内的数，+1是生成一个1-20的数（大概是因为从0开始？
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
console.log(secretNumber);

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';

  console.log(secretNumber);
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // 当输入框没值
  if (!guess) {
    displayMessage('🙅‍No number!');

    // 当赢得比赛
  } else if (guess === secretNumber) {
    displayMessage('🎉Corrent Number!');
    // 这样设置样式会直接转化为内联样式
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // 当输入框有值，且大于猜中的数字
  else if (guess !== secretNumber) {
    if (score > 1) {
      // 这个三元表达式写得还挺漂亮
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = '';
    } else {
      displayMessage('💀You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     displayMessage('📈 Too high');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.guess').value = '';
  //   } else {
  //     displayMessage('💀You lost the game!');
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // 当输入框有值，且小于猜中的数字
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     displayMessage('📉 Too low');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.guess').value = '';
  //   } else {
  //     displayMessage('💀You lost the game!');
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
