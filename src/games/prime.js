import getRandomInt from '../utile.js';

import playGame from '../engine.js';

const isPrime = (count) => {
  if (count === 2) {
    return true;
  }
  for (let i = 2; i < (count / 2 + 1); i += 1) {
    if (count % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';
const brainPrime = () => {
  const getGameData = () => {
    const question = getRandomInt(2, 1000);
    const answer = isPrime(question) ? 'yes' : 'no';
    return [question, answer];
  }
  playGame(description, getGameData);
}
export default brainPrime;
