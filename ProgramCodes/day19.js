/*
Exercises: Level 1
1. Create a closure which has one inner function

Exercises: Level 2
1. Create a closure which has three inner functions

Exercises: Level 3
1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set
of incomes and its description and expenses is also a set of expenses and its description.
 */

//Answers

function outerFunc() {
  let str = "Hello World";
  function innerFunc() {
    str += "!";
    return str;
  }
  return innerFunc;
}
const innFun = outerFunc();
console.log(innFun());

function shell() {
  let str = "";
  function coreOne() {
    return str + "Welcome ";
  }
  function coreTwo() {
    return str + "To ";
  }
  function coreThree() {
    return str + "JS";
  }
  return { coreOne, coreTwo, coreThree };
}
const finalCore = shell();
console.log(finalCore.coreOne());
console.log(finalCore.coreTwo());
console.log(finalCore.coreThree());

// Exercise 3 is redundant
