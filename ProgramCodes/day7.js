/*
Exercises: Level 1
1. Declare a function fullName and it print out your full name.
2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
3. Declare a function addNumbers and it takes two two parameters and it returns sum.
4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
7. Area of a circle is calculated as follows: area = πxгxг. Write a function which calculates areaOfCircle
8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
12. Temperature in oC can be converted to of using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to of convertCelsius ToFahrenheit.
13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
        • The same groups apply to both men and women.
        • Underweight. BMI is less than 18.5
        • Normal weight: BMI is 18.5 to 24.9
        • Overweight: BMI is 25 to 29.9
        • Obese: BMI is 30 or more
14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
console.log(findMax(0, 10, 5)) // 10
console.log(findMax(0, -10, -2)) // Ө

===========================================================================================================

Exercises: Level 2
1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
        console.log(solveQuadratic()) // {0}
        console.log(solveQuadratic(1, 4, 4)) // {-2}
        console.log(solveQuadratic(1, -1, -2)) // {2, -1}
        console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
        console.log(solveQuadratic(1, 0, -4)) //{2, -2}
        console.log(solveQuadratic(1, -1, 0)) //{1, 0}
3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
4. Write a function name showDate Time which shows time in this format: 08/01/2020 04:08 using the Date object.
        showDateTime()
        08/01/2020 04:08
5. Declare a function name swap Values. This function swaps value of x to y.
        swapValues(3, 4) // x => 4, y=>3
        swapValues (4, 5) // x = 5, y = 4
6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
        console.log(reverseArray([1, 2, 3, 4, 5])) // [5, 4, 3, 2, 1]
        console.log(reverseArray(['A', 'B', 'C'])) // ['C', 'B', 'A']
7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
9. Declare a function name removeltem. It takes an index parameter and it returns an array after removing an item 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range. 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range. 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
13. Declare a function name evensAndOdds. It takes a positive integer as parameter and it counts number of evens and odds in the number.
        evensAndOdds (100);
        The number of odds are 50.
        The number of evens are 51.
14. Write a function which takes any number of arguments and return the sum of the arguments
        sum(1, 2, 3) // -> 6
        sum(1, 2, 3, 4) // -> 10
15. Writ a function which generates a randomUserlp.
16. Write a function which generates a randomMacAddress
17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
        console.log(randomHexaNumberGenerator());
        '#ee33df'
18. Declare a function name userldGenerator. When this function is called it generates seven character id. The function return the id.
        console.log(userIdGenerator());
        41XTDbE

===========================================================================================================

Exercises: Level 3
1. Modify the userldGenerator function. Declare a function name userldGeneratedByUser. It doesn't take any parameter but it takes two inputs
using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
        userIdGeneratedByUser()
        'kcsy2
        SMFYb
        bWmeq
        ZXOYh
        2Rgxf
        userIdGeneratedByUser()
        *1GCSgPLMaBAVQZ26
        YD7eFwNQKNs7qXaT
        ycArC5yrRupyGees
        UbGxOFI7UXSWAYKN
        dIVOSSUTgAdKwStr
2. Write a function name rgbColorGenerator and it generates rgb colors.
        rgbColorGenerator()
        rgb(125,244,255)
3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
7. Write a function generateColors which can generate any number of hexa or rgb colors.
        console.log(generateColors ('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
        console.log(generateColors ('hexa', 1)) // '#b334ef'
        console.log(generateColors ('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
        console.log(generateColors ('rgb', 1)) // 'rgb(33,79, 176)'
8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
11. Call your function sum, it takes any number of arguments and it returns the sum.
Q
Q
12. Write a function called sumOfArrayltems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
        console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon','Carrot']);
        ['Avocado', 'Tomato', 'Potato', 'Mango', 'LEMON', 'Carrot']
        console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft',
        'IBM']);
        ['Google', 'Facebook', 'Apple', 'Amazon', 'MICROSOFT', 'IBM']
        console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']);
        'Not Found'
15. Write a function called isPrime, which checks if a number is prime number.
16. Write a functions which checks if all items are unique in the array.
17. Write a function which checks if all the items of the array are the same data type.
18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
        sevenRandomNumbers()
        [(1, 4, 5, 7, 9, 8, 0)]
20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
*/

// Answers

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
