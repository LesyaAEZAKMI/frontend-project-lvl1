import readlineSync from "readline-sync";
import {userName} from './src/cli.js';
const getRandomInt = (max) =>  Math.floor(Math.random() * max);
let i = 1;
let pruff;
console.log('Answer "yes" if the number is even, otherwise answer "no".');
export const brainEven = () => {
    while (i <= 3){
        let count = getRandomInt(1000);
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
    if (i === 4) 
        console.log('Congratulations, ' + userName + '!');
};