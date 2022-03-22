import readlineSync from "readline-sync";
import { userName } from '../src/cli.js';
import { getRandomInt } from '../utile.js';

const gcd = (a, b) => {
    if (a === 0 || b === 0) 
        return 0;
    while (a !== b) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }
    return a;
};

const roundCount = 3;
export const brainGcd = () => {
    console.log('Find the greatest common divisor of given numbers.');
    let i = 1;
    while(i <= roundCount) {
        const a = getRandomInt(100);
        const b = getRandomInt(100);
        console.log('Question:', a, b);
        const answer = readlineSync.question("Your answer: ");
        const res = gcd(a, b);
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
}