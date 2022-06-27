import getRandomInt from '../utile.js';

import playGame from '../engine.js';

const description = "Answer 'yes' if number even otherwise answer 'no'";
const isEven = (number) => number % 2 === 0;
const brainEven = () => {
  const getGameData = () => {
    const question = getRandomInt(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';
    return [question, answer];
  };
  playGame(description, getGameData);
};
export default brainEven;
