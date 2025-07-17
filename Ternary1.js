const readlineSync = require("readline-sync");
const physics = Number(readlineSync.question("Enter the Physics score: "));
const chemistry = Number(readlineSync.question("Enter the Chemistry score: "));     
const mathematics = Number(readlineSync.question("Enter the Mathematics score: "));
const biology = Number(readlineSync.question("Enter the Biology score: "));

console.log(physics > 85 && chemistry > 85 && mathematics > 85 && biology > 85 ? "You are eligible for the scholarship." : "You are not eligible for the scholarship.");
