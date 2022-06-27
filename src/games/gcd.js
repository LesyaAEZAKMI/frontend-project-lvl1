import playGame from '../engine.js';

import getRandomInt from '../utile.js';

const gcd = (firstValue, secondValue) => {
  if (secondValue > 0) {
    return gcd(secondValue, firstValue % secondValue);
  }
  return Math.abs(firstValue);
};

const description = 'Find the greatest common divisor of given numbers.';
const brainGcd = () => {
  const getGameData = () => {
    const firstOperand = getRandomInt(1, 1000);
    const secondOperand = getRandomInt(1, 1000);
    const question = `${firstOperand} ${secondOperand}`;
    const answer = String(gcd(firstOperand, secondOperand));
    return [question, answer];
  };
  playGame(description, getGameData);
};
export default brainGcd;
