import getRandomInt from '../utile.js';

import playGame from '../engine.js';

const getOption = (operator, firstOperand, secondOperand) => { 
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error('This operator is missing');
  }
};

const description = 'What is the result of the expression?';
const brainCalc = () => {
  const arr = ['+', '-', '*'];
  const getGameData = () => {
    const firstOperand = getRandomInt(1, 100);
    const secondOperand = getRandomInt(1, 100);
    const operation = arr[Math.floor(Math.random() * 3)];
    const question = `${firstOperand} ${operation} ${secondOperand}`;
    const answer = getOption(operation, firstOperand, secondOperand);
    return [question, answer];
  };
  playGame(description, getGameData);
};
export default brainCalc;
