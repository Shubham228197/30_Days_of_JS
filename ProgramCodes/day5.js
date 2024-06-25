/*
Reference Data:
const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
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
===========================================================================================================
Exercise: Level 1
1. Declare an empty array;
2. Declare an array with more than 5 number of elements
3. Find the length of your array
4. Get the first item, the middle item and the last item of the array
5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
7. Print the array using console.log()
8. Print the number of companies in the array
9. Print the first company, middle and last company
10. Print out each company
11. Change each company name to uppercase one by one and print them out
12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
14. Filter out companies which have more than one 'o' without the filter method
15. Sort the array using sort() method
16. Reverse the array using reverse() method
17. Slice out the first 3 companies from the array
18. Slice out the last 3 companies from the array
19. Slice out the middle IT company or companies from the array
20. Remove the first IT company from the array
21. Remove the middle IT company or companies from the array
22. Remove the last IT company from the array
23. Remove all IT companies

===========================================================================================================

Exercise: Level 2
1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the web Techs array in to this file. Access both file in main.js file
2. First remove all the punctuations and change the string to array and count the number of words in the array
        let text =
        'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
        console.log(words)
        console.log(words.length)
3. In the following shopping cart add, remove, edit items
        const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
        o add 'Meat' in the beginning of your shopping cart if it has not been already added
        o add sugar at the end of you shopping cart if it has not been already added
        o remove 'Honey' if you are allergic to honey
        o modify Tea to 'Green Tea'
4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
5. In the web Techs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
6. Concatenate the following two variables and store it in a fullStack variable.
        const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
        const backEnd = ['Node', 'Express', 'MongoDB']
        console.log(fullstack)
        ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

===========================================================================================================

Exercise: Level 3
1. The following is an array of 10 students ages:
        const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
        • Sort the array and find the min and max age
        • Find the median age(one middle item or two middle items divided by two)
        • Find the average age(all items divided by number of items)
        o Find the range of the ages(max minus min)
        • Compare the value of (min - average) and (max - average), use abs() method
        •Slice the first ten countries from the countries array
2. Find the middle country(ies) in the countries array
3. Divide the countries array into two equal arrays if it is even. If countries array is not even, one more country for the
first half.
*/

// Answers

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
const withOarraybyFilter = itCompanies.filter(function (val) {
  if (val.includes("o")) {
    const gg = val.match(/o/g);
    if (gg.length > 1) {
      return true;
    }
  } else {
    return false;
  }
});

console.log(withOarraybyFilter);
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
