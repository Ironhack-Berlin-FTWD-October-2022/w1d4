// Objects - unordered collections of labeled values

// Create an object
const emptyObj = {}
console.log(emptyObj);

// key: value
const student = {
    name: "Alice",
    age: 28,
    hobbies: [
        "coding",
        "swimming",
        "running"
    ],
    adress: {
        street: "Schönhauser Allee",
        city: "Berlin"
    }
}

// Accessing values
// Dot-notation
console.log(student);

// Accessing nested values
// Accessing a nested object
// Accessing a nested array
console.log(student.name);
console.log(student.adress.street);
console.log(student.hobbies[2])

// You can also use a variable as a key to access a value
// To do this, we use the bracket notation
const input = prompt("Which information of the student do you want to know?");
console.log("This is your requested information: ", student[input])

// You can add or change values with the dot-notation
student.age = 32;
student.age = 24;
console.log(student);

// Delete property in an object
delete student.age;
console.log(student);

// Check if a key exists in an object
if (student.name !== undefined) {
    console.log("key exists!");
}

// You can also use "in" for that
if ("name" in student) {
    console.log("key exists!");
}

// Looping over objects
const anotherStudent = {
    name: "Bob",
    age: 36
};

// for in loop loops over all keys in the object
for (let key in anotherStudent) {
    console.log(key);
}
// We can also get an array with all the keys from the object
const keys = Object.keys(anotherStudent);
console.log(keys);

// We can now use a for of loop to iterate over the array "keys"
for (let key of keys) {
    console.log(anotherStudent[key]);
}

// Create an array containing all values from an object
const values = Object.values(anotherStudent);
console.log(values);

// Create an array containing arrays with key value pairs
const entries = Object.entries(anotherStudent);
console.log(entries);

// Challenge: Iterate over persons and log every name
const students = [
    {
        name: "Alice",
        age: 28
    },
    {
        name: "Bob",
        age: 36
    }
]

// We can use the for of loop to iterate over the array
for (let student of students) {
    console.log(student.name);
}

// Having spaces in a key
const andAnotherStudent = {
    "first name": "Alice",
    "last name": "Smith"
}

// To access a key with spaces, we have to use brackets
andAnotherStudent["first name"]
