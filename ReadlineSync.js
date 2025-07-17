console.log('Script is running!');
const readlinesync = require('readline-sync');
const userName = readlinesync.question('May I know your name? ');
console.log(`Welcome, ${userName}!`);