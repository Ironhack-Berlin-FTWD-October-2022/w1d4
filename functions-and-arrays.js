// Functions

// Declaring a function
// A function that was declared with the function-keyword, is hoisted (moved to the top of the file before execution)
// That means, it is also available above the declaration
greet();

function greet() {
    console.log("hello");
}

// We can also use function expression to create a function
// This will create an anonymous function and then store it in a variable
const greetAgain = function () {
    console.log("hello");
};

// Calling a function
greet();
greetAgain();

// You can use arguments in a function
function welcome(word, name) {
    const result = word + " " + name;
    console.log(result);
}

// When we call the function, it logs "Hi Antonio!"
welcome("Hi", "Antonio!");

// We can also return a value in a function
function welcomeAgain(word, name) {
    const result = word + " " + name;
    return result;
    // If you return a value, the function execution is stopped
    // This code is not reachable
    result = "new";
}

const welcomeMessage = welcomeAgain("Hello", "Matias");
console.log(welcomeMessage);

// You can also call a function in another function
function display(text) {
    console.log(text);
}

function sum(a, b) {
    result = a + b;
    // We call the function "display" in another function
    display(result)
}

sum(3, 6);

// Scope

// Let- and const-variables are block-scoped. 
// If they are declared in a function, they are only accessible there.
// The variable "result" is not accessible here:
// console.log(result);

// If I declare a variable outside of a function, it is accessible in this file.
const result = 8;
console.log(result);

console.clear();


// Arrays
// Arrays: ordered collections of (different) values

// Create an Array
const numbers = [2, 4, 5, 6];
console.log(numbers);

// Access elements in an array
// Bracket notation
console.log(numbers[0]);

// at()-function
console.log(numbers.at(0));
// You can also use negative numbers, to for example access the last element
console.log(numbers.at(-1));

// Add elements to an array
// We can use the index
const characters = [];
characters[0] = "a";
characters[2] = "c";

// We use push() to add an element to the end
characters.push("d");
characters.push("e");

// We can also remove elements from the end with pop()
characters.pop();

// To remove a specific element from an array, we use splice()
characters.splice(3, 1);

console.log(characters);

// To add and remove elements from the beginning, we use: shift() and unshift()

// indexOf() gives us the index of an element
console.log(characters.indexOf("c"));
console.log(characters.lastIndexOf("c"));

// includes() checks if the element is in the array and returns true or false
console.log(characters.includes("c"));

console.clear();

// Iterating over arrays
// "Normal" for-loop
const countries = ["usa", "france", "uruguay", "england", "poland"];

for (let i = 0; i < countries.length; i++) {
    console.log(countries[i])
}

// Or we can also use the for-of-loop
for (let country of countries) {
    console.log(country);
}

// Or we can use forEach(), wich iterates over every element in the array
countries.forEach(function(country, i) {
    console.log(i)
    console.log(country);
})

// Challenge: Write a function that gets an array of countries and returns
// an array containing only the countries that start with "u"
// Important: Never modify the original array, always create a new one

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

// Multidimensional arrays: We can also create arrays in arrays in arrays... ;)
const multidimensional = [["a", "f"], ["x", "i"], ["j", "g"]];
// How to access "f" now?
console.log(multidimensional[0][1]);

// A function you will often need for katas: String.split()
// It creates an array out of your string
const phrase = "This is a long string";
const words = phrase.split(" ").join("####");
console.log(words);
