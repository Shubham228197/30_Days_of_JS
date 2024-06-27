/*
Exercises: Level 1
1.	Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
2.	Check if type of '10' is equal to 10
3.	Check if parseInt('9.8') is equal to 10
4.	Boolean value is either true or false.
a.	Write three JavaScript statement which provide truthy value.
b.	Write three JavaScript statement which provide falsy value.
5.	Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    i.	4 > 3
    ii.	4 >= 3
    iii.	4 < 3
    iv.	4 <= 3
    v.	4 == 4
    vi.	4 === 4
    vii.	4 != 4
    viii.	4 !== 4
    ix.	4 != '4'
    x.	4 == '4'
    xi.	4 === '4'
    xii.	Find the length of python and jargon and make a falsy comparison statement.
6.	Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
    i.	4 > 3 && 10 < 12
    ii.	4 > 3 && 10 > 12
    iii.	4 > 3 || 10 < 12
    iv.	4 > 3 || 10 > 12
    v.	!(4 > 3)
    vi.	!(4 < 3)
    vii.	!(false)
    viii.	!(4 > 3 && 10 < 12)
    ix.	!(4 > 3 && 10 > 12)
    x.	!(4 === '4')
    xi.	There is no 'on' in both dragon and python
7.	Use the Date object to do the following activities
    i.	What is the year today?
    ii.	What is the month today as a number?
    iii.	What is the date today?
    iv.	What is the day today as a number?
    v.	What is the hours now?
    vi.	What is the minutes now?
    vii.	Find out the numbers of seconds elapsed from January 1, 1970 to now.

===========================================================================================================

Exercises: Level 2
1.	Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
    •	Enter base: 20
    •	Enter height: 10
    •	The area of the triangle is 100
2.	Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
    •	Enter side a: 5
    •	Enter side b: 4
    •	Enter side c: 3
    •	The perimeter of the triangle is 12
3.	Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
4.	Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
5.	Calculate the slope, x-intercept and y-intercept of y = 2x -2
6.	Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
7.	Compare the slope of above two questions.
8.	Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
9.	Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
    •	Enter hours: 40
    •	Enter rate per hour: 28
    •	Your weekly earning is 1120
10.	If the length of your name is greater than 7 say, your name is long else say your name is short.
11.	Compare your first name length and your family name length and you should get this output.
    •	let firstName = 'Asabeneh'
    •	let lastName = 'Yetayeh'
    •	Your first name, Asabeneh is longer than your family name, Yetayeh
12.	Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
    •	let myAge = 250
    •	let yourAge = 25
    •	I am 225 years older than you.
13.	Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
    •	Enter birth year: 1995
    •	You are 25. You are old enough to drive
    •	Enter birth year: 2005
    •	You are 15. You will be allowed to drive after 3 years.
14.	Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
    •	Enter number of years you live: 100
    •	You lived 3153600000 seconds.
15.	Create a human readable time format using the Date time object
    i.	YYYY-MM-DD HH:mm
    ii.	DD-MM-YYYY HH:mm
    iii.	DD/MM/YYYY HH:mm

===========================================================================================================

Exercises: Level 3
1.	Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
    i.	YYY-MM-DD HH:mm eg. 20120-01-02 07:05

 */

// Answers:
let firstName = "Shubham";
let lastName = "Pandey";
let country = "India";
let city = "Varanasi";
let age = 26;
let isMarried = false;
let year = 2024;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);
console.log(typeof "10" == typeof 10);
console.log(parseInt("9.8") == 10);
console.log(100 == 100, 100 == "100", 100 !== "100");
console.log("100" === 100, 100 != "100", 100 !== 100);
console.log(
  4 > 3,
  4 >= 3,
  4 < 3,
  4 <= 3,
  4 == 4,
  4 === 4,
  4 != 4,
  4 !== 4,
  4 != "4",
  4 == "4",
  4 === "4"
);
console.log("python".length, "jargon".length, "python" == "jargon");
console.log(
  4 > 3 && 10 < 12,
  4 > 3 && 10 > 12,
  4 > 3 || 10 < 12,
  4 > 3 || 10 > 12,
  !(4 > 3),
  !(4 < 3),
  !false,
  !(4 > 3 && 10 < 12),
  !(4 > 3 && 10 > 12),
  !(4 === "4"),
  "dragon".includes("on"),
  "python".includes("on")
);
let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime());
let Tbase = parseInt(prompt("Enter Triangle Base: "));
let Theight = parseInt(prompt("Enter Triangle Height: "));
console.log("The area of the triangle is", 0.5 * Tbase * Theight);
let Ta = parseInt(prompt("Enter a"));
let Tb = parseInt(prompt("Enter b"));
let Tc = parseInt(prompt("Enter c"));
console.log("The perimeter of the triangle is", Ta + Tb + Tc);
let Rlength = parseInt(prompt("Enter Rectangle Length:"));
let Rwidth = parseInt(prompt("Enter Rectangle Width:"));
console.log("Rectangle Area: ", Rlength * Rwidth);
console.log("Rectangle Perimeter: ", 2 * (Rlength + Rwidth));
const pi = "3.14";
let radius = prompt("Enter radius:");
console.log("Circle Area: ", pi * radius * radius);
console.log("Circle Cirmumference: ", pi * 2 * radius);
//y=mx+c where m is slope and c is y-intercept and x is x-intercept
let Equation1 = "y=2x-2";
let Eq1Slope = 2;
// Slope formula: m = (y2-y1)/(x2-x1)
let x1,
  y1 = 2;
let x2 = 6;
let y2 = 10;
let Eq2Slope = (y2 - y1) / (x2 - x1);
console.log(Eq1Slope > Eq2Slope);
let Equation2 = "y = x2 + 6x + 9";
let Eq3X = 1;
console.log("Value of y: ", Eq3X * Eq3X + 6 * Eq3X + 9);
console.log("Value of x when y is 0: -9/x=x+6");
let NoOfHours = parseInt(prompt("Enter Number of Hours:"));
let HourlyRate = parseInt(prompt("Enter Hourly Rate:"));
console.log("Your weekly earning is ", NoOfHours * HourlyRate);
let UserName = prompt("Enter Name:");
UserName.length > 7
  ? console.log("your name is long")
  : console.log("your name is short");
firstName.length > lastName.length
  ? console.log(
      `Your first name, ${firstName} is longer than your family name, ${lastName}`
    )
  : false;
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you.`);
let UserDrivingAge = parseInt(prompt("Enter your age"));
UserDrivingAge > 18
  ? console.log(`You are ${UserDrivingAge}. You are old enough to drive`)
  : console.log(
      `You are ${UserDrivingAge}. You will be allowed to drive after ${
        18 - UserDrivingAge
      } years.`
    );
let YearsLived = parseInt(prompt("Enter AGE:"));
console.log(`You Lived ${YearsLived * 365 * 24 * 60 * 60} seconds`);
console.log(
  `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
);
console.log(
  `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
);
console.log(
  `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
);
let CurrentYear = date.getFullYear();
let CurrentDate = date.getDate();
let CurrentMonth = date.getMonth() + 1;
let CurrentHour = date.getHours();
let CurrentMinutes = date.getMinutes();
console.log(
  `${date.getFullYear()}-${
    CurrentMonth > 9 ? CurrentMonth : "0" + CurrentMonth
  }-${CurrentDate > 9 ? CurrentDate : "0" + CurrentDate} ${
    CurrentHour > 9 ? CurrentHour : "0" + CurrentHour
  }:${CurrentMinutes > 9 ? CurrentMinutes : "0" + CurrentMinutes}`
);
