let sortByName = false;
let sortByCapital = false;
let sortByPopulation = false;

// main function run as soon as HTML Loads
document.addEventListener("DOMContentLoaded", main());

// get the API from downloaded JSON file
async function getAPIData() {
  const countryAPI = await fetch("./World_Countries_API.json");
  const worldCountryJSONData = await countryAPI.json();
  const aar = worldCountryJSONData.countries.country;
  return aar;
}
async function main() {
  const worldCountriesData = await getAPIData();
  const totalCountries = worldCountriesData.length;
  const setCountryCount = document.getElementById("cntry-count");
  setCountryCount.textContent = totalCountries;
  const nameBtn = document.getElementById("apply-name-sort");
  nameBtn.addEventListener("click", () => {
    sortingCountriesByName(worldCountriesData);
  });
  const capitalBtn = document.getElementById("apply-capital-sort");
  capitalBtn.addEventListener("click", () => {
    sortingCountriesByCapital(worldCountriesData);
  });
  const populationBtn = document.getElementById("apply-population-sort");
  populationBtn.addEventListener("click", () => {
    sortingCountriesByPopulation(worldCountriesData);
  });
  appendCountriesData(worldCountriesData);
}
function sortingCountriesByName(worldCountriesData) {
  sortByName = !sortByName;
  if (sortByName) {
    sortAscending(worldCountriesData, "countryName");
  } else {
    sortdescending(worldCountriesData, "countryName");
  }
  appendCountriesData(worldCountriesData);
}
function sortingCountriesByCapital(worldCountriesData) {
  sortByCapital = !sortByCapital;
  if (sortByCapital) {
    sortAscending(worldCountriesData, "capital");
  } else {
    sortdescending(worldCountriesData, "capital");
  }
  appendCountriesData(worldCountriesData);
}
function sortingCountriesByPopulation(worldCountriesData) {
  sortByPopulation = !sortByPopulation;
  if (sortByPopulation) {
    sortAscending(worldCountriesData, "population");
  } else {
    sortdescending(worldCountriesData, "population");
  }
  appendCountriesData(worldCountriesData);
}

function sortAscending(worldCountriesData, keyoword) {
  return worldCountriesData.sort((a, b) => {
    const countryA = a[keyoword].toLowerCase();
    const countryB = b[keyoword].toLowerCase();
    if (countryA > countryB) {
      return -1;
    }
    if (countryA < countryB) {
      return 1;
    }
    return 0;
  });
}
function sortdescending(worldCountriesData, keyoword) {
  return worldCountriesData.sort((a, b) => {
    const countryA = a[keyoword].toLowerCase();
    const countryB = b[keyoword].toLowerCase();
    if (countryA < countryB) {
      return -1;
    }
    if (countryA > countryB) {
      return 1;
    }
    return 0;
  });
}

function appendCountriesData(worldCountriesData) {
  const cntryCont = document.getElementById("cntries-data");
  cntryCont.innerHTML = "";
  for (let cntry of worldCountriesData) {
    cntryCont.appendChild(
      createCountryCard(
        cntry.countryCode,
        cntry.countryName,
        cntry.capital,
        cntry.population,
        cntry.continentName
      )
    );
  }
}

function createCountryCard(
  countryCode,
  countryName,
  capital,
  population,
  cntrycontinentName
) {
  const countryBox = document.createElement("article");
  countryBox.setAttribute("class", "cntry-info");
  const flagContianer = document.createElement("div");
  flagContianer.setAttribute("class", "mid");
  const flagImg = document.createElement("img");
  flagImg.setAttribute("id", "flg-img");
  // flagImg.setAttribute(
  //   "src",
  //   `https://flagsapi.com/${countryCode}/flat/64.png`
  // );
  flagContianer.appendChild(flagImg);
  const cntryNameBox = document.createElement("p");
  cntryNameBox.setAttribute("class", "cntry-name");
  cntryNameBox.textContent = countryName;
  const capitalBox = document.createElement("p");
  capitalBox.textContent = `Capital: ${capital}`;
  const populationBox = document.createElement("p");
  populationBox.textContent = `Population: ${population}`;
  const continentName = document.createElement("p");
  continentName.textContent = `Continent Name: ${cntrycontinentName}`;
  countryBox.appendChild(flagContianer);
  countryBox.appendChild(cntryNameBox);
  countryBox.appendChild(capitalBox);
  countryBox.appendChild(populationBox);
  countryBox.appendChild(continentName);
  return countryBox;
}
