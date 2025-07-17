const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("Enter a number: "));
const remainderAfterDivisionByThree = number % 3;
const remainderAfterDivisionByFive = number % 5;

if (remainderAfterDivisionByThree === 0 || remainderAfterDivisionByFive === 0) {
    console.log("Buzz");
} else {
    console.log("The number is not divisible by 3 or 5.");
}