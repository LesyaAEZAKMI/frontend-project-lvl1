import getRandomInt from '../utile.js';

import playGame from '../engine.js';

const getProgression = () => {
  const progressionLength = getRandomInt(5, 10);
  const progressionStep = getRandomInt(1, 20);
  const progression = [];
  progression[0] = getRandomInt(1, 100);
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }
  const index = Math.floor(Math.random() * progressionLength);
  const correctAnswer = progression[index];
  progression[index] = '..';
  return [progression, correctAnswer];
};

const description = 'What number is missing in the progression?';
const brainProgression = () => {
  const getGameData = () => {
    const [question, answer] = getProgression();
    return [question, answer];
  };
  playGame(description, getGameData);
};
export default brainProgression;
