/**************************************************************************/
//Day 2
/**************************************************************************/

/*
let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
let UpperCaseChallenge = challenge.toUpperCase();
let LowerCaseChallenge = challenge.toLowerCase();
let FirstChar = challenge.substring(0, 1);
let SecondCharSlice = challenge.slice(3);
let CheckWord = challenge.includes("Script");
const ChallengeArray = challenge.split(" ");
let GivenNames = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const GivenNamesArray = GivenNames.split(",");
let ChallengeNameReplace = challenge.replace("JavaScript", "Python");
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
let GivenSentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(GivenSentence.indexOf("because"));
console.log(GivenSentence.lastIndexOf("because"));
console.log(GivenSentence.search("because"));
let WhiteTrails = " 30 Days Of JavaScript ";
console.log(WhiteTrails.trim());
console.log(challenge.startsWith("3"));
console.log(challenge.endsWith("JavaScript"));
console.log(challenge.match(/a/g));
let MergingStringPart1 = "30 Days of";
let MergingStringPart2 = " JavaScript";
let FinalMerge = MergingStringPart1.concat(MergingStringPart2);
console.log(challenge.repeat(2));
console.log(
  `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
);
console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);
console.log(typeof "10" == typeof 10);
console.log(parseFloat("9.8") == 10);
let OldParseNumber = "9.8";
let NewNumberFromParse = Math.ceil(OldParseNumber);
console.log(NewNumberFromParse);
console.log(
  "jargon".includes("on") ? ("pyhton".includes("on") ? true : false) : false
);
console.log("I hope this course is not full of jargon".includes("jargon"));
console.log(Math.floor(Math.random() * 100));
console.log(50 + Math.floor(Math.random() * 50));
console.log(Math.floor(Math.random() * 255));
console.log(
  "JavaScript".charAt(Math.floor(Math.random() * "Javascript".length))
);
console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125");
let TakingBcozOut = GivenSentence.substr(31, 23);
console.log(TakingBcozOut);
let FindingLove =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(FindingLove.match(/love/gi).length);
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching.";
const FilteredSentence = sentence.replace(/[%@&$#;!?]/g, "");
const IncomeText =
  "Hiei earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
const IncomeArray = IncomeText.match(/\d+/g);
const AnnualIncome =
  parseInt(IncomeArray[0] * 12) +
  parseInt(IncomeArray[1]) +
  parseInt(IncomeArray[2] * 12);
console.log(AnnualIncome);
*/

/**************************************************************************/
//Day 3
/**************************************************************************/

/*
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
*/

/**************************************************************************/
//Day 4
/**************************************************************************/

/*
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
*/

/**************************************************************************/
//Day 5
/**************************************************************************/

/*
const EmptyArray = [];
const ArrayWithFiveEle = ["one", "two", "three", "four", "five"];
console.log(ArrayWithFiveEle.length);
console.log(
  ArrayWithFiveEle[0],
  ArrayWithFiveEle[Math.floor(ArrayWithFiveEle.length / 2)],
  ArrayWithFiveEle[ArrayWithFiveEle.length - 1]
);
const mixedDataTypes = ["one", 1, true, { hello: "world" }, null, undefined];
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);
let itCompLen = itCompanies.length;
console.log(
  itCompanies[0],
  itCompanies[Math.floor(itCompanies.length / 2)],
  itCompanies[itCompLen - 1]
);
for (let i of itCompanies) {
  console.log(i);
}
const itCompaniesCap = [];
for (let i of itCompanies) {
  itCompaniesCap.push(i.toUpperCase());
}
console.log(itCompaniesCap);
let CommaSeparateditCompamies = "";
for (let i = 0; i < itCompanies.length - 1; i++) {
  if (i < itCompanies.length - 2) {
    CommaSeparateditCompamies += itCompanies[i] + ",";
  } else {
    CommaSeparateditCompamies +=
      itCompanies[itCompanies.length - 2] +
      " and " +
      itCompanies[itCompanies.length - 1];
  }
}
console.log(CommaSeparateditCompamies + " are big IT companies");
let CheckitCompanyName = "";
if (itCompanies.includes(CheckitCompanyName)) {
  console.log(CheckitCompanyName);
} else {
  console.log("company is not Found");
}

//JUST FOR LEARNING PURPOSE
const withOarraybyFilter = itCompanies.filter(function(val){
  if(val.includes('o')){
    const gg = val.match(/o/g)
    if(gg.length>1){
      return true
    }
  }else{
    return false
  }
})

console.log(withOarraybyFilter)
const withOitCompanies = [];
for (let g of itCompanies) {
  if (g.includes("o")) {
    const gg = g.match(/o/g);
    if (gg.length > 1) {
      withOitCompanies.push(g);
    }
  }
}
console.log(withOitCompanies);
const itCompaniesCopy = [...itCompanies];
console.log(itCompaniesCopy.sort());
console.log(itCompaniesCopy.reverse());
console.log(itCompaniesCopy.slice(3));
console.log(itCompaniesCopy.slice(0, -3));
console.log(
  itCompaniesCopy.slice(
    Math.floor(itCompaniesCopy.length / 2),
    -Math.floor(itCompaniesCopy.length / 2)
  )
);
console.log(itCompaniesCopy);
console.log("removing first it Company: ", itCompaniesCopy.shift());
const itCompaniesCopy2 = [...itCompanies];
const cut1 = itCompaniesCopy2.slice(0, Math.floor(itCompaniesCopy2.length / 2));
const cut2 = itCompaniesCopy2.slice(
  Math.floor(itCompaniesCopy2.length / 2) + 1,
  Math.floor(itCompaniesCopy2.length)
);
const itCompaniesCopy3 = [...cut1, ...cut2];
console.log(itCompaniesCopy3);
console.log(itCompaniesCopy3.pop());
itCompaniesCopy3.splice(0, itCompaniesCopy3.length);
console.log("All Deleted: ", itCompaniesCopy3);
import { countries, webTechs } from "./additionaldata.js";
console.log(countries, webTechs);
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const BreakingPoint1 = text.split(".");
const RemovingComma = BreakingPoint1[1].replaceAll(",", "");
const WordArray1 = BreakingPoint1[0].split(" ");
const WordArray2 = RemovingComma.trim().split(" ");
const finalWord = [...WordArray1, ...WordArray2];
console.log(finalWord);
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}
// let UserAllergies = prompt("are you allergic to Honey (Y/N): ")
let UserAllergies = "N";
if (UserAllergies.toUpperCase() == "Y") {
  let HoneyIndex = 0;
  for (let i = 0; i < shoppingCart.length - 1; i++) {
    if (shoppingCart[i] == "Honey") {
      HoneyIndex = i;
      break;
    }
  }
  shoppingCart.splice(HoneyIndex, 1);
}
const shoppingCartMod = shoppingCart.map((val) => {
  if (val == "Tea") {
    return "Green Tea";
  } else {
    return val;
  }
});
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
}
console.log(webTechs);
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [...frontEnd, ...backEnd];
console.log(fullStack);
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a, b) => a - b);
console.log(ages);
console.log("min: ", ages[0], ", max: ", ages[ages.length - 1]);
let AgeArrayLen = ages.length;
if (AgeArrayLen % 2 == 0) {
  let mid1 = AgeArrayLen / 2 - 1;
  let mid2 = AgeArrayLen / 2;
  console.log(ages[mid1], ages[mid2]);
} else {
  console.log(ages[Math.floor(ages.length / 2)]);
}
let agesSum = 0;
for (let i of ages) {
  agesSum += i;
}
let AVG = agesSum / ages.length;
console.log("Average Age:", AVG);
console.log("Range:", ages[ages.length - 1] - ages[0]);
console.log("min - average:", Math.abs(ages[0] - AVG).toFixed(2));
console.log("max - average:", Math.abs(ages[ages.length - 1] - AVG).toFixed(2));
console.log("First  10 Countries name: ", countries.slice(0, 10));
if (countries.length % 2 == 0) {
  let mid1 = countries.length / 2 - 1;
  let mid2 = countries.length / 2;
  console.log(ages[mid1], ages[mid2]);
} else {
  console.log(countries[Math.floor(countries.length / 2)]);
}
let firstHalfContries = [];
let secondHalfCountries = [];
if (countries.length % 2 != 0) {
  firstHalfContries = countries.slice(0, Math.ceil(countries.length / 2));
  secondHalfCountries = countries.slice(
    countries.length / 2 + 1,
    countries.length
  );
} else {
  firstHalfContries = countries.slice(0, countries.length / 2);
  secondHalfCountries = countries.slice(countries.length / 2, countries.length);
}
console.log("First Half: ", firstHalfContries);
console.log("Second Half: ", secondHalfCountries);
*/

//Day 6
/*
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Iceland",
  "Japan",
  "Kenya",
];
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
const mernStack = ["MongoDB", "Express", "React", "Node"];
console.log("FOR LOOP 0 - 10");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
let gg = 0;
console.log("WHILE 0 - 10");
while (gg <= 10) {
  console.log(gg);
  gg++;
}
console.log("DO WHILE 0 - 10");
let dg = 0;
do {
  console.log(dg);
  dg++;
} while (dg <= 10);
console.log("FOR LOOP 10 - 0");
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
console.log("WHILE LOOP 10 - 0");
let pp = 10;
while (pp >= 0) {
  console.log(pp);
  pp--;
}
console.log("DO WHILE LOOP 10 - 0");
let cc = 10;
do {
  console.log(cc);
  cc--;
} while (cc >= 0);
let userInput = 5;
for (let i = 0; i <= userInput; i++) {
  console.log(i);
}
for (let i = 1; i <= 7; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "#";
  }
  console.log(str);
}
for (let i = 1; i <= 10; i++) {
  console.log(i, "x", i, "=", i * i);
}
console.log("i i^2 i^3");
for (let i = 0; i <= 10; i++) {
  console.log(i, "", i * i, "", i * i * i);
}
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
for (let i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
for (let i = 1; i <= 100; i++) {
  let c = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      c++;
    }
  }
  if (c <= 2) {
    console.log("BINGO A PRIME NUMBER: ", i);
  }
}
let sumof0to100 = 0;
for (let i = 0; i <= 100; i++) {
  let hh = sumof0to100;
  sumof0to100 += i;
  console.log(hh, "+", i, "=", sumof0to100);
}
console.log("Sum of digit from 0 to 100:", sumof0to100);
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i <= 100; i++) {
  sumof0to100 += i;
  if (i % 2 == 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}
console.log(
  "The sum of all evens from 0 to 100 is",
  evenSum,
  ". And the sum of all odds from 0 to 100 is",
  oddSum,
  "."
);
console.log(`[${evenSum}, ${oddSum}]`);
const RandomArray = [
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
];
console.log(RandomArray);

// Code With only previous 6 Days Knowledge
let randomArrNum1 = Math.floor(Math.random() * 10);
let randomArrNum2 = Math.floor(Math.random() * 10);
let randomArrNum3 = Math.floor(Math.random() * 10);
let randomArrNum4 = Math.floor(Math.random() * 10);
let randomArrNum5 = Math.floor(Math.random() * 10);
while (
  randomArrNum1 == randomArrNum2 ||
  randomArrNum1 == randomArrNum3 ||
  randomArrNum1 == randomArrNum4 ||
  randomArrNum1 == randomArrNum5 ||
  randomArrNum2 == randomArrNum1 ||
  randomArrNum2 == randomArrNum3 ||
  randomArrNum2 == randomArrNum4 ||
  randomArrNum2 == randomArrNum5 ||
  randomArrNum3 == randomArrNum2 ||
  randomArrNum3 == randomArrNum1 ||
  randomArrNum3 == randomArrNum4 ||
  randomArrNum3 == randomArrNum5 ||
  randomArrNum4 == randomArrNum2 ||
  randomArrNum4 == randomArrNum3 ||
  randomArrNum4 == randomArrNum1 ||
  randomArrNum4 == randomArrNum5 ||
  randomArrNum5 == randomArrNum2 ||
  randomArrNum5 == randomArrNum3 ||
  randomArrNum5 == randomArrNum4 ||
  randomArrNum5 == randomArrNum1
) {
  if (
    randomArrNum1 == randomArrNum2 ||
    randomArrNum1 == randomArrNum3 ||
    randomArrNum1 == randomArrNum4 ||
    randomArrNum1 == randomArrNum5
  ) {
    console.log("random 1 matches with someone");
    randomArrNum1 = Math.floor(Math.random() * 10);
  }
  if (
    randomArrNum2 == randomArrNum1 ||
    randomArrNum2 == randomArrNum3 ||
    randomArrNum2 == randomArrNum4 ||
    randomArrNum2 == randomArrNum5
  ) {
    console.log("random 2 matches with someone");
    randomArrNum2 = Math.floor(Math.random() * 10);
  }
  if (
    randomArrNum3 == randomArrNum2 ||
    randomArrNum3 == randomArrNum1 ||
    randomArrNum3 == randomArrNum4 ||
    randomArrNum3 == randomArrNum5
  ) {
    console.log("random 3 matches with someone");
    randomArrNum3 = Math.floor(Math.random() * 10);
  }
  if (
    randomArrNum4 == randomArrNum2 ||
    randomArrNum4 == randomArrNum3 ||
    randomArrNum4 == randomArrNum1 ||
    randomArrNum4 == randomArrNum5
  ) {
    console.log("random 4 matches with someone");
    randomArrNum4 = Math.floor(Math.random() * 10);
  }
  if (
    randomArrNum5 == randomArrNum2 ||
    randomArrNum5 == randomArrNum3 ||
    randomArrNum5 == randomArrNum4 ||
    randomArrNum5 == randomArrNum1
  ) {
    console.log("random 5 matches with someone");
    randomArrNum5 = Math.floor(Math.random() * 10);
  }
}
const uniqueRandomArray = [
  randomArrNum1,
  randomArrNum2,
  randomArrNum3,
  randomArrNum4,
  randomArrNum5,
];
console.log(uniqueRandomArray);

function generateRandomNumbers() {
  const uniqueNumbers = [];

  while (uniqueNumbers.length < 5) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (!uniqueNumbers.includes(randomNumber)) {
      uniqueNumbers.push(randomNumber);
    }
  }

  return uniqueNumbers;
}

const randomNumbersArray = generateRandomNumbers();
console.log("Generated Array of 5 Unique Random Numbers:", randomNumbersArray);

function genAlphaNumericNo() {
  let finalID = "";
  const alphaSet = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 6; i++) {
    let randAphaValue = alphaSet.charAt(
      Math.floor(Math.random() * alphaSet.length)
    );
    finalID += randAphaValue;
  }
  return finalID;
}
const sixAlphaNumber = genAlphaNumericNo();
console.log("6 DIGIT APLHA NUMBER:", sixAlphaNumber);

function NoLimitgenAlphaNumericNo() {
  let finalID = "";
  const alphaSet = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < Math.floor(Math.random() * 25) + 8; i++) {
    let randAphaValue = alphaSet.charAt(
      Math.floor(Math.random() * alphaSet.length)
    );
    finalID += randAphaValue;
  }
  return finalID;
}
const noLimitAlpaNum = NoLimitgenAlphaNumericNo();
console.log("NO LIMIT APLHA NUMBER:", noLimitAlpaNum);

function hexaDecimalId() {
  const hexValues = "0123456789abcdef";
  let finalID = "#";
  for (let i = 0; i < Math.floor(Math.random() * 6) + 5; i++) {
    console.log("i am ruinning");
    let randAphaValue = hexValues.charAt(
      Math.floor(Math.random() * hexValues.length)
    );
    finalID += randAphaValue;
  }
  return finalID;
}
const hexrandId = hexaDecimalId();
console.log("HEXADECIMAL ID:", hexrandId);
console.log(
  `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`
);
const newCapCountriesArray = countries.map((country) => country.toUpperCase());
console.log(newCapCountriesArray);
const countriesLengthArray = newCapCountriesArray.map(
  (country) => country.length
);
console.log(countriesLengthArray);
function newCountriesArrayWithMoreDetails() {
  const countriesInfoArray = [];
  for (let cnt of countries) {
    countriesInfoArray.push([
      cnt.charAt(0).toUpperCase() + cnt.slice(1),
      cnt.slice(0, 3).toUpperCase(),
      cnt.length,
    ]);
  }
  return countriesInfoArray;
}
const countriesInfoArrayRes = newCountriesArrayWithMoreDetails();
console.log(countriesInfoArrayRes);

const onlyLandArray = countries.filter((val) => {
  if (val.includes("land")) {
    return val;
  }
});
if (onlyLandArray.length >= 1) {
  console.log(onlyLandArray);
} else {
  console.log("All these countries are without land");
}
const onlyIaArray = countries.filter((val) => {
  if (val.includes("ia")) {
    return val;
  }
});
if (onlyIaArray.length >= 1) {
  console.log(onlyIaArray);
} else {
  console.log("These are countries ends without ia");
}
let maxCountLen = 0;
for (let i of countries) {
  if (maxCountLen < i.length) {
    maxCountLen = i.length;
  }
}
function getCountriesWithLargestLength() {
  const lengthArray = countries.filter((val) => {
    if (val.length == maxCountLen) {
      return val;
    }
  });
  return lengthArray;
}
const resultLengthArray = getCountriesWithLargestLength();
resultLengthArray.sort();
console.log(resultLengthArray[0]);
const fiveCharCountries = countries.filter((val) =>
  val.length == 5 ? true : false
);
console.log(fiveCharCountries);

// -
let maxWebLen = 0;
for (let i of webTechs) {
  if (maxWebLen < i.length) {
    maxWebLen = i.length;
  }
}
function getWebTechsWithLargestLength() {
  const lengthArray = webTechs.filter((val) => {
    if (val.length == maxWebLen) {
      return val;
    }
  });
  return lengthArray;
}
const resultTechsArray = getWebTechsWithLargestLength();
resultTechsArray.sort();
console.log(resultTechsArray[0]);
const webTechsLen = webTechs.map((val) => {
  return val.length;
});
const webTechsInfo = [];
for (let i = 0; i < webTechs.length - 1; i++) {
  webTechsInfo.push([webTechs[i], webTechsLen[i]]);
}
console.log(webTechsInfo);

const MernStack = ["MongoDB", "Express", "React", "Node"];
console.log(
  `${MernStack[0].charAt(0)}${MernStack[1].charAt(0)}${MernStack[2].charAt(
    0
  )}${MernStack[3].charAt(0)}`
);
for (let i of [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
]) {
  console.log(i);
}
const Fruit = ["banana", "orange", "mango", "lemon"];
const RevFruit = [];
for (let i of Fruit) {
  RevFruit.unshift(i);
}
console.log(RevFruit);
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (let i = 0; i <= fullStack.length - 1; i++) {
  for (let j of fullStack[i]) {
    console.log(j);
  }
}
const countriesCopy = countries.map((item) => item);
console.log(countriesCopy);
const capCountriesArrayNew = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];
const newCountriesArrayCopy = capCountriesArrayNew.map((item) => item);
const sortedCountries = newCountriesArrayCopy.sort();
console.log("SORTED:", sortedCountries);
console.log(webTechs.sort(), mernStack.sort());
//level 3 Question 4 repeated
//level 3 Question 5 repeated
//level 3 Question 6 repeated thrice
//level 3 Question 7 Done similar with 5 words
import { countries } from "./additionaldata.js";
const countriesWithTwoOrMore = countries.filter((item) => {
  if (item.length > 2) {
    return item;
  }
});
console.log(countriesWithTwoOrMore);
const CapitalizeNewArray = countries.map((item) => item.toUpperCase());
console.log(CapitalizeNewArray);
*/

//Day 7

/*

function fullName_1() {
  console.log("Shubham Pandey");
}
function fullName_2(first = "shubham", last = "pandey") {
  console.log(first, last);
}
fullName_1();
fullName_2();
const addNumbers = (a, b) => {
  return a + b;
};
console.log("Adding two Numbers", addNumbers(5, 5));
function areaOfRectangle(length = 5, width = 5) {
  return length * width;
}
console.log("area of Rectangle:", areaOfRectangle());
function perimeterOfRectangle(length = 5, width = 5) {
  return 2 * (length + width);
}
console.log("perimeter of Rectangle:", perimeterOfRectangle());
function volumeOfRectPrism(length = 5, width = 5, height = 5) {
  return length * width * height;
}
console.log("Volume of Rect Prism:", volumeOfRectPrism());
function areOfCircle(r = 2) {
  return 3.14 * r;
}
console.log("area Of Circle:", areOfCircle());
const circumOfCircle = (r = 2, pi = 3.14) => {
  return 2 * r * pi;
};
console.log("Circumference of Circle:", circumOfCircle());
function density(mass = 5, velocity = 5) {
  return mass / velocity;
}
console.log("density:", density());
function speedfunc(distance = 5, time = 5) {
  return distance / time;
}
console.log("Speed:", speedfunc());
function weightfunc(mass = 5, gravity = 5) {
  return mass * gravity;
}
console.log("Weight:", weightfunc());
function convertCelsiusToFahrenheit(oC) {
  return oC * (9 / 5) + 32;
}
console.log("oF=(oCx9/5)+32:", convertCelsiusToFahrenheit(5));
function checkBmi(age, weightKG, height) {
  let bmi = 0;
  if (age > 20) {
    bmi = weightKG / (height * height);
    if (bmi < 18.5) {
      console.log("BMI SCORE: UnderWeight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      console.log("BMI SCORE: Normal Weight");
    } else if (bmi >= 25 && bmi <= 29.9) {
      console.log("BMI SCORE: Overweight");
    } else if (bmi > 30) {
      console.log("BMI SCORE: Obese");
    }
  } else {
    console.log("age Error: The same groups apply to both men and women.");
  }
}
checkBmi(25, 85, 1.78);
function checkSeason(mnth) {
  if (
    mnth.toLowerCase() == "december" ||
    mnth.toLowerCase() == "january" ||
    mnth.toLowerCase() == "february"
  ) {
    console.log("Winter");
  } else if (
    mnth.toLowerCase() == "september" ||
    mnth.toLowerCase() == "october" ||
    mnth.toLowerCase() == "november"
  ) {
    console.log("Autumn");
  } else if (
    mnth.toLowerCase() == "march" ||
    mnth.toLowerCase() == "april" ||
    mnth.toLowerCase() == "may"
  ) {
    console.log("Spring");
  } else if (
    mnth.toLowerCase() == "june" ||
    mnth.toLowerCase() == "july" ||
    mnth.toLowerCase() == "august"
  ) {
    console.log("Summer");
  } else {
    console.log("Enter Correct MONTH");
  }
}
checkSeason("apRiL");
const checkGreatestInThree = (a, b, c) => {
  return Math.max(a, b, c);
};
console.log("Greatest value among 3 is:", checkGreatestInThree(45, 56, 99));
function solveLinEquation(a, b, c) {
  console.log(`${a}x2 + ${b}x + ${c} = 0`);
}
solveLinEquation(2, 3, 6);
// Level 2 Question 2 is a Repeated;
function printArray(arr) {
  for (let i of arr) {
    console.log(i);
  }
}
printArray([
  "Heros",
  "are",
  "not",
  "born",
  "but",
  "villians",
  "are",
  "so fight for light.",
]);
function showDateTime() {
  const D = new Date();
  const date = D.getDate();
  const month = D.getMonth() + 1;
  const year = D.getFullYear();
  const hour = D.getHours();
  const minutes = D.getMinutes();
  console.log(
    `${date}/${month >= 9 ? month : "0" + month}/${year} ${
      hour >= 9 ? hour : "0" + hour
    }:${minutes > 9 ? minutes : "0" + minutes}`
  );
}
showDateTime();
function swapValues(x, y) {
  x = x + y;
  y = x - y;
  x = x - y;
  console.log(`x=${x}, y=${y}`);
}
swapValues(3, 4);
function reverseArray(arr) {
  const revArr = [];
  for (let i of arr) {
    revArr.unshift(i);
  }
  return revArr;
}
console.log(reverseArray(["a", "b", "c"]));
function capitalizeArray(arr) {
  return arr.map((item) => item.toUpperCase());
}
console.log(capitalizeArray(["a", "b", "c"]));
const AddingItemArray = [];
function addItem(aItem) {
  AddingItemArray.push(aItem);
  return AddingItemArray;
}
console.log(addItem(1));
console.log(addItem("GG"));
const RemovingItemArray = [1, "TWO", 3, "four", 5, "chae"];
function removeItem(index) {
  RemovingItemArray.splice(index, 1);
  return RemovingItemArray;
}
console.log(removeItem(0));
console.log(removeItem(1));
function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  console.log("Sum of Range:", sum);
}
sumOfNumbers(6);
function sumOfOdds(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 != 0) {
      sum += i;
    }
  }
  console.log("Sum of ODD Range:", sum);
}
sumOfOdds(6);
function sumOfEven(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  console.log("Sum of EVEN Range:", sum);
}
sumOfEven(6);
function evensAndOdds(num) {
  let Ecount = 0;
  let Ocount = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 != 0) {
      Ocount++;
    } else {
      Ecount++;
    }
  }
  console.log(`The number of odds are ${Ocount}.`);
  console.log(`The number of odds are ${Ecount}.`);
}
evensAndOdds(100);
function keepAdding() {
  let sum = 0;
  for (let i of arguments) {
    sum += i;
  }
  return sum;
}
console.log(keepAdding(1, 2, 3));
function randomUserIp() {
  console.log(
    `IP Address: ${Math.floor(Math.random() * 255)}:${Math.floor(
      Math.random() * 255
    )}:${Math.floor(Math.random() * 255)}:${Math.floor(Math.random() * 255)}`
  );
}
randomUserIp();
function randomMacAddress() {
  const MacAdressing = "0123456789abcdefABCDEF";
  console.log(
    `MAC Address: ${MacAdressing.charAt(
      Math.floor(Math.random() * MacAdressing.length)
    )}${MacAdressing.charAt(
      Math.floor(Math.random() * MacAdressing.length)
    )}:${MacAdressing.charAt(
      Math.floor(Math.random() * MacAdressing.length)
    )}${MacAdressing.charAt(
      Math.floor(Math.random() * MacAdressing.length)
    )}:${MacAdressing.charAt(
      Math.floor(Math.random() * MacAdressing.length)
    )}${MacAdressing.charAt(
      Math.floor(Math.random() * MacAdressing.length)
    )}:${MacAdressing.charAt(
      Math.floor(Math.random() * MacAdressing.length)
    )}${MacAdressing.charAt(Math.floor(Math.random() * MacAdressing.length))}`
  );
}
randomMacAddress();

function randomHexaNumberGenerator() {
  return "REPEATED CONCEPT";
}
console.log(randomHexaNumberGenerator());
function userIdGenerator() {
  return "REPEATED CONCEPT";
}
console.log(userIdGenerator());
const IdSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function userIdGeneratedByUser() {
  const IdCollectArray = [];
  // const userInp1 = parseInt(prompt("Enter No of Character ID You Want:"));
  const userInp1 = 8;
  // const userInp2 = prompt("Enter how may ID you want:");
  const userInp2 = 5;
  for (let i = 0; i < userInp2; i++) {
    let str = "";
    for (let j = 0; j < userInp1; j++) {
      str += `${IdSet.charAt(Math.floor(Math.random() * IdSet.length))}`;
    }
    IdCollectArray.push(str);
  }
  for (let i of IdCollectArray) {
    console.log(i);
  }
}
userIdGeneratedByUser();
//Level 3 Question 2: Repeated Question
const hexadecimalColors = [
  "#FF0000", // Red
  "#00FF00", // Green
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#FF00FF", // Magenta
  "#00FFFF", // Cyan
  "#800080", // Purple
  "#008080", // Teal
  "#FFA500", // Orange
  "#A52A2A", // Brown
  "#008000", // Dark Green
  "#800000", // Maroon
];
const rgbColors = [
  "rgb(255, 0, 0)", // Red
  "rgb(0, 255, 0)", // Green
  "rgb(0, 0, 255)", // Blue
  "rgb(255, 255, 0)", // Yellow
  "rgb(255, 0, 255)", // Magenta
  "rgb(0, 255, 255)", // Cyan
  "rgb(128, 0, 128)", // Purple
  "rgb(0, 128, 128)", // Teal
  "rgb(255, 165, 0)", // Orange
  "rgb(165, 42, 42)", // Brown
  "rgb(0, 128, 0)", // Dark Green
  "rgb(128, 0, 0)", // Maroon
];
function arrayOfHexaColors(num) {
  let count = 0;
  for (let i of hexadecimalColors) {
    if (count < num) {
      console.log(i);
      count++;
    } else {
      break;
    }
  }
}
arrayOfHexaColors(2);
function arrayOfRgbColors(num) {
  let count = 0;
  for (let i of rgbColors) {
    if (count < num) {
      console.log(i);
      count++;
    } else {
      break;
    }
  }
}
arrayOfRgbColors(2);
function hexToRgb(hex) {
  hex = hex.replace(/^#/, "");
  const bigint = parseInt(hex, 16);
  console.log("bigint:", bigint);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

// Example usage:
const hexColor = "#FF0000"; // Hexadecimal color code for red
const rgbColor = hexToRgb(hexColor);
console.log(rgbColor);

function rgbToHex(r, g, b) {
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");
  const hexColor = `#${hexR}${hexG}${hexB}`;
  
  return hexColor;
}
const rValue = 255;
const gValue = 165;
const bValue = 0;

const hexColornew = rgbToHex(rValue, gValue, bValue);
console.log(hexColornew);

//Level 3 Question 7 is mixuture of 2+ question Solved above, Hence Repeated
function shuffleArray(arr) {
  let sf = [];
  let shuffledIndex = "";
  while (sf.length != arr.length) {
    let rand = Math.floor(Math.random() * arr.length);
    if (!shuffledIndex.includes(rand)) {
      sf.push(arr[rand]);
      shuffledIndex += rand;
    }
  }
  return sf;
}
const shuffledArray = shuffleArray(["a", "b", "c", "d", "e"]);
console.log("Shuffled Array:", shuffledArray);
function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  console.log("Factorial:", fact);
}
factorial(4);

function isEmpty(value) {
  if (isNaN(value) && typeof value != "undefined") {
    if (value.length > 0) {
      return "Not Empty";
    } else if (typeof value == "object") {
      return "Not Empty";
    }
  } else if (isFinite(value) && value != null) {
    return "Not Empty";
  }
  return "Empty";
}
console.log("OBJECT test:", isEmpty({ a: "harry", b: "Garry" }));
console.log("Null test:", isEmpty(null));
console.log("Undefined test:", isEmpty(undefined));
console.log("String test:", isEmpty("HELLO"));
console.log("Number test:", isEmpty(12345));
console.log("Array test:", isEmpty([1, 2, 3, 4, 5, 6]));
console.log("Zero test:", isEmpty(0));
console.log("Empty test:", isEmpty());
*/

// Day 8

/*
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName}${this.lastName}`;
  },
  "phone number": "+3584545454545",
};
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
const users2 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
const dog = {};
console.log("Empty Object:", dog);
dog["name"] = "Dage";
dog["legs"] = "4";
dog["color"] = "Pink";
dog["age"] = "2";
dog.bark = function () {
  return "woof woof";
};
console.log("Dog Name:", dog.name);
console.log("Dog Legs:", dog.legs);
console.log("Dog Color:", dog.color);
console.log("Dog Age:", dog.age);
console.log("Dog Dark:", dog.bark());
dog["breed"] = "Dindi";
dog["getDogInfo"] = function () {
  return `${this.name} is ${this.age} year old of breed ${this.breed}. He is ${
    this.color
  } in color and like any other dog he have ${this.legs} and do ${this.bark()}`;
};
console.log(dog.getDogInfo());
let max = 0;
let namely = "";
let activelyLoggedIn = 0;
let countPoints = 0;
let MernStackDevs = [];
for (let i in users) {
  console.log(users[i]);
  if (users[i].skills.includes("MongoDB")) {
    if (users[i].skills.includes("Express")) {
      if (users[i].skills.includes("React")) {
        if (users[i].skills.includes("Node")) {
          MernStackDevs.push(i);
        }
      }
    }
  }
  if (users[i].isLoggedIn == true) {
    activelyLoggedIn++;
  }
  if (users[i].points >= 50) {
    countPoints++;
  }
  if (max < users[i].skills.length) {
    namely = i;
    max = users[i].skills.length;
  }
}
console.log("Person With Max Skills:", namely);
console.log("Actively LoggedIn users:", activelyLoggedIn);
console.log("Points with 50+:", countPoints);
console.log("Mern Devs:", MernStackDevs);
const NewUserEntry = {
  email: "pandey@gmail.com",
  skills: ["Javascript", "HTML", "CSS", "React", "Python", "Typescript"],
  isLoggedIn: true,
  age: 27,
  points: 50,
};
users["Shubham"] = NewUserEntry;
for (const [key, value] of Object.entries(users)) {
  console.log(`Key of users: ${key}`);
}
for (let item in users) {
  console.log(`value of ${item}:`, users[item]);
}
//Level 2 Question 7 is Already Done
const personAccount = {
  firstName: "Jason",
  lastName: "Todd",
  income: 300000,
  expences: {
    totalIncome: 400000,
    totalExpense: 200000,
    accountInfo: "ACC0123456789",
    addIncome: function () {},
    addExpense: function () {},
    accountBalance: function () {},
  },
  description: "I Earn, Invest and expend",
};
function signUp(usrInputId) {
  let returnStatement = "";
  let newUser = true;
  for (let item of users2) {
    if (item._id != usrInputId) {
      newUser = true;
    } else {
      newUser = false;
      break;
    }
  }
  if (newUser) {
    users2.push({
      _id: usrInputId,
      username: "Shubham",
      email: "pandey@gmail.com",
      password: "hey88you",
      createdAt: "02/12/2023 07:10 AM",
      isLoggedIn: true,
    });
    returnStatement = "User Added";
  } else {
    returnStatement = "Already a user with this ID";
  }
  return returnStatement;
}
console.log(signUp("xmp5s6"));
function signIn(usrInputId) {
  let newUser = true;
  for (let item of users2) {
    if (item._id != usrInputId) {
      newUser = true;
    } else {
      newUser = false;
      break;
    }
  }
  if (newUser) {
    return "Make an Account";
  } else {
    return "Logged In";
  }
}
console.log(signIn("xmp5s6"));
//Tip: a good programing pracice is to make another function for redundant code
function rateProduct(userId, productId, Prating) {
  let productFound = true;
  let returnStatement = "";
  for (let item of products) {
    if (item["_id"] == productId) {
      productFound = true;
      item["ratings"].push({ userId: userId, rate: Prating });
      returnStatement = `${item["name"]} rated with ${Prating} star`;
      break;
    } else {
      productFound = false;
    }
  }
  if (productFound) {
    return returnStatement;
  } else {
    return "Product Not Found";
  }
}
console.log(rateProduct("xmp5s6", "aesgfal", 5));
// console.log(products);
// for checking average rating for individual product need steps: product existence -> product have rating or not -> show avg rating
function averageRating() {
  for (let item of products) {
    if (item["ratings"].length > 0) {
      let sum = 0;
      for (let i = 0; i < item["ratings"].length; i++) {
        sum += item["ratings"][i].rate;
      }
      console.log(
        `Average rating for ${item["name"]} is ${sum / item["ratings"].length}`
      );
    } else {
      console.log("Product not Rated");
    }
  }
}
averageRating();
function likeProduct(prdId, userId) {
  // assuming user provide correct product id
  console.log("============================");
  for (let item of products) {
    let newLikeArrWnewUser = [...item["likes"]];
    if (prdId == item["_id"]) {
      console.log("Product Match");
      if (item["likes"].includes(userId)) {
        console.log("User Already Liked the Product");
        newLikeArrWnewUser = item["likes"].filter((val) => {
          return val != userId;
        });
        console.log("INSIDE IF ARRAY:", item["likes"]);
        item["likes"] = newLikeArrWnewUser;
      } else {
        console.log("User's First Like");
        item["likes"].push(userId);
        console.log("INSIDE ELSE ARRAY:", item["likes"]);
      }
    } else {
      console.log("Not this Product");
    }
  }
}
likeProduct("hedfcg", "eefarm");
likeProduct("hedfcg", "fg12cy");
likeProduct("hedfcg", "leoePrm");
likeProduct("ab12ex", "leoePrm");
console.log(products);
*/
/*
 */

//  day 9
// a callback function, the name of the function could be any name
/*
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
let sum = 0;
const callbackM = (item) => {
  return item * 2;
};
const callbackF = (item) => {
  return item % 2 == 0;
};
const callbackFE = (item) => {
  sum += item;
};
numbers.forEach(callbackFE);
const number2 = numbers.map(callbackM);
const number3 = numbers.filter(callbackF);
console.log(sum);
console.log(number2);
console.log(number3);
countries.forEach((item) => console.log(item));
names.forEach((item) => console.log(item));
numbers.forEach((item) => console.log(item));
console.log(
  countries.map((country) => {
    return country.toUpperCase();
  })
);
console.log(
  countries.map((country) => {
    return country.length;
  })
);
console.log(
  numbers.map((num) => {
    return num * num;
  })
);
console.log(
  names.map((nme) => {
    return nme.toUpperCase();
  })
);
console.log(
  countries.filter((country) => country.toLowerCase().includes("land"))
);
console.log(countries.filter((country) => country.length == 6));
console.log(
  countries.filter((country) => country.toLowerCase().startsWith("E"))
);
console.log(
  products.filter((item) => {
    return item.price > 1;
  })
);
function getStringLists(InpArr) {
  return InpArr.filter((value) => {
    return typeof value == "string";
  });
}
console.log(getStringLists([1, "2", 3, "4"]));
console.log(
  numbers.reduce((a, b) => {
    return a + b;
  })
);
let cntConcatLen = 0;
console.log(
  `${countries.reduce((a, b) => {
    cntConcatLen++;
    console.log(cntConcatLen);
    if (cntConcatLen <= countries.length - 2) {
      return a + ", " + b;
    } else {
      return a + " and " + b;
    }
  })} are north European countries`
);
console.log(
  "if few elements of array need to satisfy a condition use some or else use every"
);
console.log(names.some((value) => value.length > 7));
console.log(
  countries.every((country) => country.toLowerCase().includes("land"))
);
console.log(
  "Find gives the value and undefined if not found, findIndex gives index of found item and -1 when it does not exist"
);
console.log(countries.find((item) => item.length == 6));
console.log(countries.findIndex((item) => item.length == 6));
console.log(
  countries.findIndex((cntry) => {
    return cntry.toLowerCase() == "norway";
  })
);
console.log(
  countries.findIndex((cntry) => {
    return cntry.toLowerCase() == "russia";
  })
);
// #v1
console.log(
  products
    .filter((item) => item.price > 0)
    .map((item) => item.price)
    .reduce((a, b) => a + b)
);
// #v2
console.log(
  products
    .filter((item) => item.price > 0)
    .reduce((a, b) => {
      if (a.price != undefined) {
        console.log("a:", a.price, " -- b:", b.price);
        return a.price + b.price;
      } else {
        console.log("a:", a, " -- b:", b.price);
        return a + b.price;
      }
    })
);
//Excercise 2 Question 2 Repeated
// not is countries array, use another
const categorizeCountries = (countries) => {
  const allCountriesPattern = [];
  allCountriesPattern.push(
    countries.filter((val) => val.toLowerCase().includes("land"))
  );
  allCountriesPattern.push(
    countries.filter((val) => val.toLowerCase().includes("ia"))
  );
  allCountriesPattern.push(
    countries.filter((val) => val.toLowerCase().includes("island"))
  );
  allCountriesPattern.push(
    countries.filter((val) => val.toLowerCase().includes("stan"))
  );
  return allCountriesPattern;
};
console.log(categorizeCountries(countries));
//Exercise 2 question 4 is bit stretched and waste of time
//Exercise 2 Question 5 is repeated
//Exercise 2 Question 6 is repeated
// All of the Question from below is been done in previous Days or Common but asked to do in large scale nothing else
*/
console.log("Testing");
