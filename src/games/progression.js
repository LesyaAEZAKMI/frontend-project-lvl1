import getRandomInt from '../utile.js';

import playGame from '../engine.js';

const generatePogression = (firstElement, difference, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstElement + (difference * i));
  }
  return progression;
};

const getProgression = () => {
  const firstElement = getRandomInt(1, 100);
  const difference = getRandomInt(1, 20);
  const length = getRandomInt(5, 10);
  const progression = generatePogression(firstElement, difference, length);
  const index = getRandomInt(0, length - 1);
  const answer = String(progression[index]);
  progression[index] = '..';
  return [progression, answer];
}

const description = 'What number is missing in the progression?';
const brainProgression = () => {
  const getGameData = () => {
    const [question, answer] = getProgression();
    return [question, answer];
  };
  playGame(description, getGameData);
};
export default brainProgression;
