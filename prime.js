import readlineSync from "readline-sync";
import {userName} from './src/cli.js';
const getRandomInt = (min, max) =>  Math.floor(Math.random() * (max - min + 1) + min);
const prime = (count) => {
    if (count === 2) 
        return 'yes';
    if (count <= 1)
        return 'no';
    for (let i = 2; i < count / 2 + 1; i++) {
        if (count % i === 0) 
            return 'no';
    }
    return 'yes';
};
export const brainPrime = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    let i = 1;
    while (i <= 3) {
        let count = getRandomInt(0, 1000);
        let res = prime(count);
        console.log('Question:', count);
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