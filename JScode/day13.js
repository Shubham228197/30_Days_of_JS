/*
Exercises:Level 1
1. Display the countries array as a table
2. Display the countries object as a table 3. Use console.group() to group logs

Exercises:Level 2
1. 10 > 2 * 10 use console.assert()
2. Write a warning message using console.warn() 3. Write an error message using console.error()

Exercises:Level 3
1. Check the speed difference among the following loops: while, for, for of, forEach
*/

// Answer

const names = ["Shubham", "Brook", "David", "John"];
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const user = {
  name: "Shubham",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
const users = [
  {
    name: "Shubham",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

console.table(countries);
//Question 2 Smiliar
console.group("Users");
console.log(user);
console.log(users);
console.groupEnd("Users");
console.assert(10 > 2 * 10, { messageError: "Galti ho Gayi" });
console.warn("Beware");
console.error("Error Shown");
console.time("For Loop");
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.timeEnd("For Loop");
console.time("While Loop");
let i = 0;
while (i++ < 10) {
  console.log(i);
}
console.timeEnd("While Loop");
console.time("ForOf Loop");
for (let i of names) {
  console.log(i);
}
console.timeEnd("ForOf Loop");
console.time("ForEach Loop");
names.forEach((item) => console.log(item));
console.timeEnd("ForEach Loop");
