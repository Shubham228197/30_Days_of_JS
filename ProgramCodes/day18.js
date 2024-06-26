/*
Reference Data:
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

===========================================================================================================

Exercises: Level 1
1. Read the countries API using fetch and print the name of country, capital, languages, population and area.

Exercises: Level 2
1. Print out all the cat names in to catNames variable.

Exercises: Level 3
1. Read the cats api and find the average weight of cat in metric unit.
2. Read the countries api and find out the 10 largest countries
3. Read the countries api and count total number of languages in the world used as officials.
 */

//Answers

const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    for (let country of data) {
      console.log(
        `{ Name:${country.name}, Capital:${country.capital}, Languages:`,
        country.languages,
        `Population:${country.population}, Area:${country.area} }`
      );
      console.count("country count");
    }
  })
  .catch((error) => console.log(error));

const fetchdata = async () => {
  try {
    const catNames = [];
    const fetchData = await fetch(catsAPI);
    const datas = await fetchData.json();
    for (let cat of datas) {
      catNames.push(cat.name);
    }
    console.log("CatNames:", catNames);
  } catch (err) {
    console.error("ERROR:", err);
  }
};
fetchdata();

fetch("https://api.thecatapi.com/v1/breeds")
  .then((response) => response.json())
  .then((data) => {
    const breedsWithWeight = data.map((breed) => {
      return parseInt(breed.weight.metric.charAt(0));
    });
    const totalWeight = breedsWithWeight.reduce((sum, breed) => sum + breed);
    const breedCount = breedsWithWeight.length;
    const averageWeight = totalWeight / breedCount;
    console.log(
      `Average weight of cat breeds in metric units: ${averageWeight.toFixed(
        2
      )} grams`
    );
  })
  .catch((error) => console.error("Error fetching cat breeds:", error));

// judging the largness of a country based on there poplulation count
const tenLargestCountry = async () => {
  try {
    const countriesAPI = "https://restcountries.com/v2/all";
    const fetchData = await fetch(countriesAPI);
    const datas = await fetchData.json();
    const populationArray = datas
      .map((pop) => [pop.name, pop.population])
      .sort((a, b) => {
        return b[1] - a[1];
      });
    console.log("Top 10 List of Largest country");
    for (let i = 0; i < 10; i++) {
      console.log(populationArray[i][0]);
    }
  } catch (err) {
    console.error(err);
  }
};
tenLargestCountry();
const officalLanguages = async () => {
  try {
    const countriesAPI = "https://restcountries.com/v2/all";
    const fetchData = await fetch(countriesAPI);
    const countryArray = await fetchData.json();
    const languageArray = countryArray.map((country) => {
      return country.languages;
    });

    const langList = [];
    for (let i of languageArray) {
      for (let j of i) {
        langList.push(j.name);
      }
    }

    const langListSet = new Set(langList);
    const offLangCount = [];
    for (let official of langListSet) {
      let count = 0;
      for (let item of langList) {
        if (official == item) {
          count++;
        }
      }
      offLangCount.push({ name: official, count });
    }
    offLangCount.sort((a, b) => {
      return b.count - a.count;
    });
    console.log("All Offical Languages:", offLangCount);
  } catch (error) {
    console.error(error);
  }
};
officalLanguages();
