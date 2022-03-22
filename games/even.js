import readlineSync from "readline-sync";
import { userName } from '../src/cli.js';
import { getRandomInt } from '../utile.js';

let i = 1;
let pruff;
const roundCount = 3;
export const brainEven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    while (i <= roundCount){
        const count = getRandomInt(1000);
        console.log('Question: ' + count);
        const answer = readlineSync.question("Your answer: ");
        if (count % 2 === 0)
            pruff = 'yes';
        else
            pruff = 'no';
        if (answer === pruff) {
            console.log('Correct!');
        }
        else{
            console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
            console.log("Let's try again, " + userName +'!');
            break;
        }
        i++;
    }
    console.log('Congratulations, ' + userName + '!');
};