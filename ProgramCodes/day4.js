/*
Exercises: Level 1
1. Get user input using prompt("Enter your age:"). If user is 18 or older, give feedback: You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
        Enter your age: 30
        You are old enough to drive.
        Enter your age:15
        You are left with 3 years to drive.
2. Compare the values of myAge and yourAge using if ... else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt("Enter your age:") to get the age as input.
        Enter your age: 30
        You are 5 years older than me.
3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
。 using if else
• ternary operator.
        let a = 4
        let b = 3
        4 is greater than 3
4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
        Enter a number: 2
        2 is an even number
        Enter a number: 9
        9 is is an odd number.

===========================================================================================================

Exercises: Level 2
1. Write a code which can give grades to students according to theirs scores:
        。 80-100, A
        。 70-89, B
        。 60-69, C
        • 50-59, D
        。 0-49, F
2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
        • September, October or November, the season is Autumn.
        • December, January or February, the season is Winter.
        o March, April or May, the season is Spring
        o June, July or August, the season is Summer
3. Check if a day is weekend day or a working day. Your script will take day as an input.
        What is the day today? Saturday
        Saturday is a weekend.
        What is the day today? saturDay
        Saturday is a weekend.
        What is the day today? Friday
        Friday is a working day.
        What is the day today? FrIDAY
        Friday is a working day.

===========================================================================================================

Exercises: Level 3
1. Write a program which tells the number of days in a month.
        Enter a month: January
        January has 31 days.
        Enter a month: JANUARY January has 31 day
        Enter a month: February February has 28 days.
        Enter a month: FEbruary
        February has 28 days.
1. Write a program which tells the number of days in a month, now consider leap year.
*/

//Answers

let UserDrivingAge = parseInt(prompt("Enter your age"));
UserDrivingAge > 18
  ? console.log(`You are old enough to drive`)
  : console.log(`You are left with ${18 - UserDrivingAge} years to drive.`);
let UserAge = parseInt(prompt("Enter Your age: "));
if (UserAge > 26) {
  console.log(`You are ${UserAge - 26} years older tha me`);
} else {
  console.log("I am older than you");
}
let a = 4;
let b = 3;
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${b} is greater than ${a}`);
}
a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${b} is greater than ${a}`);

let EvenTestNumber = 51;
EvenTestNumber % 2 == 0
  ? console.log(`${EvenTestNumber} is an even number`)
  : console.log(`${EvenTestNumber} is a odd number`);
let GivenGrade = 82;
if (GivenGrade >= 80 && GivenGrade <= 100) {
  console.log("A");
} else if (GivenGrade >= 70 && GivenGrade <= 79) {
  console.log("B");
} else if (GivenGrade >= 60 && GivenGrade <= 69) {
  console.log("C");
} else if (GivenGrade >= 50 && GivenGrade <= 59) {
  console.log("D");
} else if (GivenGrade >= 0 && GivenGrade <= 49) {
  console.log("F");
} else {
  console.log("Not Valid");
}
let SeasonInput = "December";
if (
  SeasonInput == "September" ||
  SeasonInput == "October" ||
  SeasonInput == "November"
) {
  console.log("Autumn");
} else if (
  SeasonInput == "December" ||
  SeasonInput == "January" ||
  SeasonInput == "February"
) {
  console.log("Winter");
} else if (
  SeasonInput == "March" ||
  SeasonInput == "April" ||
  SeasonInput == "May"
) {
  console.log("Spring");
} else if (
  SeasonInput == "June" ||
  SeasonInput == "July" ||
  SeasonInput == "August"
) {
  console.log("Summer");
} else {
  console.log("Invalid Input");
}
let FindWhichDay = "SUnday";
let findwhichday = FindWhichDay.toLowerCase();
if (
  findwhichday == "monday" ||
  findwhichday == "tuesday" ||
  findwhichday == "wednesday" ||
  findwhichday == "thursday" ||
  findwhichday == "friday"
) {
  console.log(
    `${findwhichday.charAt(0).toUpperCase()}${findwhichday.substring(
      1
    )} is a working day`
  );
} else if (findwhichday == "saturday" || findwhichday == "sunday") {
  console.log(
    `${findwhichday.charAt(0).toUpperCase()}${findwhichday.substring(
      1
    )} is a weekend`
  );
}
let MonthDayCount = "february";
let LowKeyCount = MonthDayCount.toLowerCase();
if (
  LowKeyCount == "january" ||
  LowKeyCount == "march" ||
  LowKeyCount == "may" ||
  LowKeyCount == "july" ||
  LowKeyCount == "august" ||
  LowKeyCount == "october" ||
  LowKeyCount == "december"
) {
  console.log(
    `${LowKeyCount.charAt(0).toUpperCase()}${LowKeyCount.substring(
      1
    )} has 31 days`
  );
} else if (
  LowKeyCount == "april" ||
  LowKeyCount == "june" ||
  LowKeyCount == "september" ||
  LowKeyCount == "november"
) {
  console.log(
    `${LowKeyCount.charAt(0).toUpperCase()}${LowKeyCount.substring(
      1
    )} has 30 days`
  );
} else if (LowKeyCount == "february") {
  console.log(
    `${LowKeyCount.charAt(0).toUpperCase()}${LowKeyCount.substring(
      1
    )} has 28 days`
  );
}
let MonthDayCount2 = "february";
let LowKeyCount2 = MonthDayCount2.toLowerCase();
if (
  LowKeyCount2 == "january" ||
  LowKeyCount2 == "march" ||
  LowKeyCount2 == "may" ||
  LowKeyCount2 == "july" ||
  LowKeyCount2 == "august" ||
  LowKeyCount2 == "october" ||
  LowKeyCount2 == "december"
) {
  console.log(
    `${LowKeyCount2.charAt(0).toUpperCase()}${LowKeyCount2.substring(
      1
    )} has 31 days`
  );
} else if (
  LowKeyCount2 == "april" ||
  LowKeyCount2 == "june" ||
  LowKeyCount2 == "september" ||
  LowKeyCount2 == "november"
) {
  console.log(
    `${LowKeyCount2.charAt(0).toUpperCase()}${LowKeyCount2.substring(
      1
    )} has 30 days`
  );
} else if (LowKeyCount2 == "february") {
  console.log(
    `${LowKeyCount2.charAt(0).toUpperCase()}${LowKeyCount2.substring(
      1
    )} has 29 days`
  );
}
