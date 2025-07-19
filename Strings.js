let message = "I am learning JavaScript";

// Iterate over each character in the string
for (let i = 0; i < message.length; i++) {
    console.log(message[i]);
}

for (let char of message) {
    console.log(char);
}

// Filtering characters
let vowels = '';
const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

for (let char of message) {
    if (vowelSet.has(char)) {
        vowels += char;
    }
}

console.log(vowels);


// Example of string length
// The length of a string can be determined using the .length property  
(function(){
let message = "I am a mentor at GeeksforGeeks";
console.log(message.length); // Output: 30 
})();


let index = 5;
console.log(message.charAt(index)); // Output: a

// Example of charCodeAt : ASCII value of a character
// The charCodeAt() method returns the Unicode of the character at a specified index in a string
console.log(message.charCodeAt(0)); // Output: 73 (ASCII value of 'I')
console.log(message.charCodeAt(index)); // Output: 97

// JavaScript to illustrate indexOf() function
function func() {

    // Original string
    var str = 'Departed Train';

    // Finding index of occurrence of 'Train'
    var index = str.indexOf('Train');
    console.log(index); 
}
func();

// JavaScript to illustrate includes() function
// The includes() method determines whether a string contains the characters of a specified string.
var str = "Welcome to GeeksforGeeks.";
var check = str.includes("o",-2);
console.log(check);

//Practical example of includes()
let str1 = "Hello, world!";     
let str2 = "world";
if (str1.includes(str2)) {
    console.log(`The string "${str1}" contains "${str2}".`);
}   else {
    console.log(`The string "${str1}" does not contain "${str2}".`);
}   

(function() {
// Example of includes() method`
const displayMessage = "I love to code in light mode.";
const vowels = "aeiouAEIOU";

for (let character of displayMessage) {
    if (vowels.includes(character)) {
        console.log(`${character} is a vowel`);
    }
} 
})();

// Split(), Reduce(), Join(), Relpace(), Repeaat(), Trim(), // toLowerCase(), toUpperCase(), concat(), slice(), substring(), substr()

function func() {
    var str = 'geeksforgeeks';
    var string = str.toUpperCase();
    console.log(string);
}
func();

function func() {
    var str = 'geeksforgeeks#@';
    var string = str.toUpperCase();
    console.log(string);
}
func();

// substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
// Taking a string as variable
var string = "geeksforgeeks";
a = string.substring(0, 4)
b = string.substring(1, 6)
c = string.substring(5)
d = string.substring(0)

// Printing new string which are
// the part of the given string
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// Taking a string as variable
var string = "geeksforgeeks";
a = string.substring(-1)
b = string.substring(2.5)
c = string.substring(2.9)

// Printing new string which are
// the part of the given string
console.log(a);
console.log(b);
console.log(c);

const username = "prakashnarsingrao sakari";
const maxLength = 10;
let displayName = username;

if (username.length > maxLength) {
    displayName = username.substring(0, maxLength) + "...";
}

console.log(displayName); // Output: "prakashnar..."

// Responsive design example
(function() {
    const username = "prakashnarsingrao sakari";
    const maxLength = 10;

    function getDisplayName(username, maxLength) {
        return username.length > maxLength ? username.substring(0, maxLength) + "..." : username;
    }

    const displayName = getDisplayName(username, maxLength);
    console.log(displayName); // Output: "prakashnar..."
})();

(function() {
    const username = "prakashnarsingrao sakari";

// Using substring
console.log(username.substring(0, 10)); // Output: "prakashnar"

// Using slice
console.log(username.slice(0, 10)); // Output: "prakashnar"

// Using slice with negative indices
console.log(username.slice(-10)); // Output: "rao sakari"
})();

// trim() method removes whitespace from both ends of a string
// It does not affect the original string, but returns a new string with the whitespace removed.
// Example of trim() method
// Not working in this environment
function func() {
    var str = "  Geeks for Geeks      ";
    var st = str.trim();
    console.log(st);
}
func();

function func() {
    var str = "  Geeks for Geeks      ";
    var st = str.trimEnd();
    console.log(st);
}
func();
