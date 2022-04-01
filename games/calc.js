import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';
import { getRandomInt } from '../utile.js';

const getOption = (operation, a, b) => { 
    if (operation === '+')
        return a + b;
    if (operation === '-')
        return a - b;
    if (operation === '*')
        return a * b;
};

const roundCount = 3;
export const brainCalc = () => {
    console.log('What is the result of the expression?');
    let arr = ['+', '-', '*'];
    let i = 1;
    while (i <= roundCount) {
        const operation = Math.floor(Math.random() * 3);
        const a = getRandomInt(100);
        const b = getRandomInt(100);
        console.log('Question:', a, arr[operation], b);
        const answer = readlineSync.question("Your answer: ");
        const res = getOption(arr[operation], a, b);
        if (answer == res){
            console.log('Correct!');
        }
        else {
            console.log("'" + answer + "' is wrong answer ;(. Correct answer was '" + res +"'.");
            console.log("Let's try again, " + userName +'!');
            break;
        }
        i++;
    }
    console.log('Congratulations, ' + userName + '!');
};
