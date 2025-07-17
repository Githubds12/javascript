/*
const totalMarks = 60;

if (totalMarks < 40) {
    console.log("You need to work hard.");
} else if (totalMarks < 60) {
    console.log("B grade");
} else if (totalMarks < 75) {
    console.log("A grade");
} else if (totalMarks < 85) {
    console.log("A+ grade");
} else {
    console.log("Genius");
}
*/
const readlineSync = require("readline-sync");
const score = Number(readlineSync.question("Enter the score: "));

const grade = score > 90 ? 'A' :
            score > 80 ? 'B' :
            score > 70 ? 'C' :
            score > 60 ? 'D' : 'F';

console.log(`Your grade is: ${grade}`);