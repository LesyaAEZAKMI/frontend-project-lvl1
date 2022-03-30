import readlineSync from "readline-sync";
import { userName } from '../src/cli.js';
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
};


const roundCount = 3;
export const brainProgression = () => {
    console.log("What number is missing in the progression?");
    let i = 1;
    
    while (i <= roundCount) {
        const length = getRandomInt(5, 10);
        const step = getRandomInt(1, 20);
        let arr = [];
        arr[0] = getRandomInt(1, 100);
        for (let i = 1; i < length; i++) {
            arr[i] = arr[i - 1] + step;
        }
        const index = Math.floor(Math.random() * length)
        const res = arr[index];
        arr[index] = '..';
        console.log('Question:', arr.join(' '));
        const answer = readlineSync.question("Your answer: ");
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