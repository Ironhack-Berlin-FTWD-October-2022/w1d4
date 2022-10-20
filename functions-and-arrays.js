// Functions

// Function declaration
function greet() {
    console.log("hello");
}

// Function expression
const greetAgain = function () {
    console.log("hello");
};

greet();
greetAgain();

// You can use arguments in a function
function welcome(word, name) {
    const result = word + " " + name;
    console.log(result);
}

welcome("Hi", "Antonio!");

function welcomeAgain(word, name) {
    const result = word + " " + name;
    return result;
    result = "new";
}

const welcomeMessage = welcomeAgain("Hello", "Matias");
console.log(welcomeMessage);

function display(text) {
    console.log(text);
}

function sum(a, b) {
    result = a + b;
    display(result)
}

sum(3, 6);

// console.log(result);

console.clear();

// Arrays
// Arrays: ordered collections of (different) values

const numbers = [2, 4, 5, 6];
console.log(numbers);

console.log(numbers[0]);

console.log(numbers.at(0));
console.log(numbers.at(-1));

const characters = [];
characters[0] = "a";
characters[2] = "c";

characters.push("d");
characters.push("e");


characters.pop();

characters.splice(3, 1);

console.log(characters);

// To add and remove elements from the beginning, we use: shift() and unshift()

// Search for elements
console.log(characters.indexOf("c"));
console.log(characters.lastIndexOf("c"));

console.log(characters.includes("c"));

console.clear();

// Iterating over an array
const countries = ["usa", "france", "uruguay", "england", "poland"];

for (let i = 0; i < countries.length; i++) {
    console.log(countries[i])
}

for (let country of countries) {
    console.log(country);
}

countries.forEach(function(country, i) {
    console.log(i)
    console.log(country);
})

// Challenge: Write a function that recieves an array of countries and returns
// an array containing only the countries that start with "u"

// 1. Create a function that recieves an array
// 2. Create an new array
// 3. Check each element for the first character
// 4. Add only the elements to the array which start with "u"

function filterCountries(array) {
    const result = [];

    for (let i= 0; i < array.length; i++) {
        if (array[i][0] === "u") {
          result.push(array[i])
        }
    }

    return result;
}

const filtered = filterCountries(countries);
console.log(filtered);

const multidimensional = [["a", "f"], ["x", "i"], ["j", "g"]];
console.log(multidimensional[0][1]);

const phrase = "This is a long string";
const words = phrase.split(" ").join("####");
console.log(words);
