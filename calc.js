import readlineSync from "readline-sync";
import {userName} from './src/cli.js';
const getRandomInt = (max) =>  Math.floor(Math.random() * max);
const getRandomOp = (operation, a, b) => {
    if (operation === '+')
        return a + b;
    if (operation === '-')
        return a - b;
    if (operation === '*')
        return a * b;
};
export const brainCalc = () => {
    console.log('What is the result of the expression?');
    let arr = ['+', '-', '*'];
    let i = 1;
    while (i <= 3) {
        let operation = Math.floor(Math.random() * 3);
        let a = getRandomInt(100);
        let b = getRandomInt(100);
        console.log('Question:', a, arr[operation], b);
        const answer = readlineSync.question("Your answer: ");
        let res = getRandomOp(arr[operation], a, b);
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
    if (i === 4) 
        console.log('Congratulations, ' + userName + '!');
};