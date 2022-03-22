import readlineSync from "readline-sync";
import {userName} from './src/cli.js';
const getRandomInt = (max) =>  Math.floor(Math.random() * max);
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
}
export const brainGcd = () => {
    console.log('Find the greatest common divisor of given numbers.');
    let i = 1;
    while(i <= 3) {
        let a = getRandomInt(100);
        let b = getRandomInt(100);
        console.log('Question:', a, b);
        const answer = readlineSync.question("Your answer: ");
        let res = gcd(a, b);
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