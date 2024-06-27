/*
Reference Data:
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

===========================================================================================================

Exercises: Level 1
1. Iterate 0 to 10 using for loop, do the same using while and do while loop
2. Iterate 10 to 0 using for loop, do the same using while and do while loop
3. Iterate 0 to n using for loop
4. Write a loop that makes the following pattern using console.log():
        #
        ##
        ###
        ####
        #####
        ######
        #######
5. Use loop to print the following pattern:
        0 х 0 = 0
        1 x 1 = 1
        2 x 2 = 4
        3 x 3 = 9
        4 x 4 = 16
        5 x 5 = 25
        6 x 6 = 36
        7 x 7 = 49
        8 x 8 = 64
        9 x 9 = 81
        10 x 10 100
6. Using loop print the following pattern
        i    i^2   i^3
        0    0     0
        1    1     1
        2    4     8
        3    9     27
        4    16    64
        5    25    125
        6    36    216
        7    49    343
        8    64    512
        9    81    729
        10   100   1000
7. Use for loop to iterate from 0 to 100 and print only even numbers 8. Use for loop to iterate from 0 to 100 and print only odd numbers
9. Use for loop to iterate from 0 to 100 and print only prime numbers
10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
        The sum of all numbers from 0 to 100 is 5050.
11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
        The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
        [2550, 2500]
13. Develop a small script which generate array of 5 random numbers
14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
15. Develop a small script which generate a six characters random id:
        5j2khz

===========================================================================================================

Exercises: Level 2
1. Develop a small script which generate any number of characters random id:
        fe3jo1g1124g
        xkqci4utda1lmbelpkm03rba
2. Write a script which generates a random hexadecimal number.
        '#ee33df'
3. Write a script which generates a random rgb color number.
        rgb(240,180,80)
4. Using the above countries array, create the following new array.
        ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
5. Using the above countries array, create an array for countries length'.
        [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
6. Use the countries array to create the following array of arrays:
        [
        ['Albania', 'ALB', 7],
        ['Bolivia', 'BOL', 7],
        ['Canada', 'CAN', 6],
        ['Denmark', 'DEN', 7],
        ['Ethiopia', 'ETH', 8],
        ['Finland', 'FIN', 7],
        ['Germany', 'GER', 7],
        ['Hungary', 'HUN', 7],
        ['Ireland', 'IRE', 7],
        ['Iceland', 'ICE', 7],
        ['Japan', 'JAP', 5],
        ['Kenya', 'KEN', 5]
        ]
7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
        ['Finland', 'Ireland', 'Iceland']
8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
        ['Albania', 'Bolivia', 'Ethiopia']
9. Using the above countries array, find the country containing the biggest number of characters.
        Ethiopia
10. Using the above countries array, find the country containing only 5 characters.
        ['Japan', 'Kenya']
11. Find the longest word in the webTechs array
12. Use the webTechs array to create the following array of arrays:
        [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
15. This is a fruit array, ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse
method.
16. Print all the elements of array as shown below.
        const fullStack = [
            ['HTML', 'CSS', 'JS', 'React'],
            ['Node', 'Express', 'MongoDB']
        ]
        HTML
        CSS
        JS
        REACT
        NODE
        EXPRESS
        MONGODB

===========================================================================================================

Exercises: Level 3
1. Copy countries array(Avoid mutation)
2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a
variable sortedCountries
3. Sort the web Techs array and mernStack array
4. Extract all the countries contain the word 'land' from the countries array and print it as array
5. Find the country containing the hightest number of characters in the countries array
6. Extract all the countries contain the word 'land' from the countries array and print it as array
7. Extract all the countries containing only four characters from the countries array and print it as array
8. Extract all the countries containing two or more words from the countries array and print it as array
9. Reverse the countries array and capitalize each country and stored it as an array
*/

// Answers

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
