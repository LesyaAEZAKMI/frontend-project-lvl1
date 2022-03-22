import readlineSync from "readline-sync";
import {userName} from './src/cli.js';
const getRandomInt = (min, max) =>  Math.floor(Math.random() * (max - min + 1) + min);
const createProgression = () => {
    let length = getRandomInt(5, 10);
    let step = getRandomInt(1, 20);
    let arr = [];
    arr[0] = getRandomInt(1, 100)
    for (let i = 1; i < length; i++) {
        arr[i] = arr[i - 1] + step;
    }
    return arr;
}
export const brainProgression = () => {
    console.log("What number is missing in the progression?");
    let i = 1;
    while (i <= 3) {
        const arr = createProgression();
        const length = arr.length;
        let index = Math.floor(Math.random() * length)
        let res = arr[index];
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
    if (i === 4) 
        console.log('Congratulations, ' + userName + '!');
}