/*
Exercises: Level 1
1. Store you first name, last name, age, country, city in your browser localStorage.

Exercises: Level 2
1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

Exercises: Level 3
1. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
 */

//Answers

localStorage.clear();
localStorage.setItem("first name", "Shubham");
localStorage.setItem("last name", "Pandey");
localStorage.setItem("age", "27");
localStorage.setItem("country", "India");
const student = {
  firstname: "Ajeet",
  lastname: "Agharkar",
  age: 55,
  skills: ["HTML", "CSS", "JavaScript"],
  country: "nagaland",
};
localStorage.setItem("student object", JSON.stringify(student));
// Exercise 3 is not related to Web Storages
