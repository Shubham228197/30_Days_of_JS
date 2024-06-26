/*
Reference Data:
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

===========================================================================================================

Exercises:Level 1
1. create an empty set
2. Create a set containing 0 to 10 using loop
3. Remove an element from a set
4. Clear a set
5. Create a set of 5 string elements from array
6. Create a map of countries and number of characters of a country

===========================================================================================================

Exercises:Level 2
1. Find a union b
2. Find a intersection b
3. Find a with b

===========================================================================================================

Exercises:Level 3
1. How many languages are there in the countries object file.
2. *** Use the countries data to find the 10 most spoken languages:
        // Your output should look like this
        console.log(mostSpokenLanguages(countries, 10))
        [
            { English: 91 },
            { French: 45 },
            { Arabic: 25 },
            { Spanish: 24 },
            { Russian: 9 },
            { Portuguese: 9 },
            { Dutch: 8 },
            { German: 7 },
            { Chinese: 5 },
            { Swahili: 4 },
            { Serbian: 4 }
        ]
        // Your output should look like this
        console.log(mostSpokenLanguages(countries, 3))
        [
        {English:91},
        {French:45},
        {Arabic:25}
        ]
*/

// Answers

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];
const fiveString = ["Finland", "Sweden", "Norway", "1", "10"];
const set1 = new Set();
console.log(set1);
for (let i = 0; i <= 10; i++) {
  set1.add(i);
}
set1.delete(1);
set1.clear();
const set2 = new Set(fiveString);
console.log(set2);
const map1 = new Map();
for (let i of countries) {
  map1.set(i, i.length);
}
const aUb = a.filter((item) => {
  return b.includes(item);
});
const aUnionb = new Set(aUb);
console.log(aUnionb);
const aIb = a.filter((item) => {
  return !b.includes(item);
});
const aIntb = new Set(aIb);
console.log(aIntb);
const c = [...a, ...b];
const C = new Set(c);
console.log(C);
//Exercise 3 Question 1&2: countries array does not give language info
