'use strict';

// 选择元素
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  playing = true;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  switchPlayer();
  diceEl.classList.remove('hidden');
};
init();

btnNew.addEventListener('click', init);

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 随机抛骰子
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 显示骰子
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 检查rolled 1 ：如果是正确的，就换成下一个玩家
    if (dice !== 1) {
      // 把骰子点数添加到当前玩家的分数上
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. 把分数加到当前活跃的玩家总分中
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. 检查是否达到100，如果是，就让玩家获胜，若没有，就换下一个玩家
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    } else {
      switchPlayer();
    }
  }
});
