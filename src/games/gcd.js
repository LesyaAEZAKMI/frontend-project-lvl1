import playGame from '../engine.js';

import getRandomInt from '../utile.js';

const gcd = (a, b) => {
  if (a === 0 || b === 0) {
    return 0;
  }
  while (a !== b) {
    if (a > b) {
      a -= b;
    }
    else {
      b -= a;
    }
  }
  if (a === 0 || b === 0) {
    return 0;
  }
  return a;
};

const description = 'Find the greatest common divisor of given numbers.';
const brainGcd = () => {
  const getGameData = () => {
    const firstOperand = getRandomInt(1, 1000);
    const secondOperand = getRandomInt(1, 1000);
    const question = `${firstOperand} ${secondOperand}`;
    const answer = gcd(firstOperand, secondOperand);
    return [question, answer];
  };
  playGame(description, getGameData);
};
export default brainGcd;
