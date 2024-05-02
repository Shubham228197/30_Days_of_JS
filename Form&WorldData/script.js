let sortByName = false;
let sortByCapital = false;
let sortByPopulation = false;
// the idea od using render is to find out the filer is used for ascending or descending order but as the Problem does not care for that so no need but keeping there of anyday ots needed
let eventListnerCallCount = 0;
const worldPopulation = 8106672020;

// main function run as soon as HTML Loads
document.addEventListener("DOMContentLoaded", main());

// get the API from downloaded JSON file
async function getAPIData() {
  const countryAPI = await fetch("./World_Countries_API.json");
  const worldCountryJSONData = await countryAPI.json();
  return worldCountryJSONData.countries.country;
}

async function main() {
  const worldCountriesData = await getAPIData();
  const totalCountries = worldCountriesData.length;
  const setCountryCount = document.getElementById("cntry-count");
  setCountryCount.textContent = totalCountries;

  const nameBtn = document.getElementById("apply-name-sort");
  nameBtn.addEventListener("click", () => {
    // reseting flags will solve the filter flag conflict
    eventListnerCallCount++;
    sortByName = !sortByName;
    sortByCapital = false;
    sortByPopulation = false;
    filterData();
    applyArrowIcon(nameBtn, sortByName);
  });

  const capitalBtn = document.getElementById("apply-capital-sort");
  capitalBtn.addEventListener("click", () => {
    eventListnerCallCount++;
    sortByCapital = !sortByCapital;
    sortByName = false;
    sortByPopulation = false;
    filterData();
    applyArrowIcon(capitalBtn, sortByCapital);
  });

  const populationBtn = document.getElementById("apply-population-sort");
  populationBtn.addEventListener("click", () => {
    eventListnerCallCount++;
    sortByPopulation = !sortByPopulation;
    sortByName = false;
    sortByCapital = false;
    filterData();
    applyArrowIcon(populationBtn, sortByPopulation);
  });

  appendCountriesData(worldCountriesData);
}

function applyArrowIcon(btnEvent, flag) {
  const nameBtn = document.getElementById("apply-name-sort");
  const capitalBtn = document.getElementById("apply-capital-sort");
  const populationBtn = document.getElementById("apply-population-sort");
  const downArrowImg = `<img src="../icon/downIcons24.png" style="height: 13px; width: 8px; margin: 0px; padding: 0px 3px;"/>`;
  switch (btnEvent.innerText) {
    case "NAME":
      if (flag) {
        btnEvent.innerHTML += downArrowImg;
      } else {
        btnEvent.innerHTML = btnEvent.innerText;
      }
      capitalBtn.innerHTML = capitalBtn.innerText;
      populationBtn.innerHTML = populationBtn.innerText;
      break;
    case "CAPITAL":
      if (flag) {
        btnEvent.innerHTML += downArrowImg;
      } else {
        btnEvent.innerHTML = btnEvent.innerText;
      }
      nameBtn.innerHTML = nameBtn.innerText;
      populationBtn.innerHTML = populationBtn.innerText;
      break;
    case "POPULATION":
      if (flag) {
        btnEvent.innerHTML += downArrowImg;
      } else {
        btnEvent.innerHTML = btnEvent.innerText;
      }
      nameBtn.innerHTML = nameBtn.innerText;
      capitalBtn.innerHTML = capitalBtn.innerText;
      break;
    default:
      alert("Somthing horrible happend");
  }
}
//Every time you run sort filter it will make changes to original array because unlike filter and map functions, sort return the same array but modified
function sortingCountriesByName(worldCountriesData) {
  if (sortByName) {
    return sortAscending(worldCountriesData, "countryName");
  } else {
    return sortdescending(worldCountriesData, "countryName");
  }
}

function sortingCountriesByCapital(worldCountriesData) {
  // Multiple Data is receiveing API have no capital info so sorting in ascending order makes the data looks bad so default is descending
  if (!sortByCapital) {
    return sortAscending(worldCountriesData, "capital");
  } else {
    return sortdescending(worldCountriesData, "capital");
  }
}

function sortingCountriesByPopulation(worldCountriesData) {
  if (!sortByPopulation) {
    return sortAscending(worldCountriesData, "population");
  } else {
    return sortdescending(worldCountriesData, "population");
  }
}

function sortAscending(worldCountriesData, keyoword) {
  return worldCountriesData.sort((a, b) => {
    const countryA = a[keyoword].toLowerCase();
    const countryB = b[keyoword].toLowerCase();
    const A = parseInt(countryA);
    const B = parseInt(countryB);
    if (!isNaN(A)) {
      if (A < B) {
        return -1;
      }
      if (A > B) {
        return 1;
      }
      return 0;
    } else {
      if (countryA < countryB) {
        return -1;
      }
      if (countryA > countryB) {
        return 1;
      }
      return 0;
    }
  });
}

function sortdescending(worldCountriesData, keyoword) {
  return worldCountriesData.sort((a, b) => {
    const countryA = a[keyoword].toLowerCase();
    const countryB = b[keyoword].toLowerCase();
    const A = parseInt(countryA);
    const B = parseInt(countryB);
    if (!isNaN(A)) {
      if (A > B) {
        return -1;
      }
      if (A < B) {
        return 1;
      }
      return 0;
    } else {
      if (countryA > countryB) {
        return -1;
      }
      if (countryA < countryB) {
        return 1;
      }
      return 0;
    }
  });
}

function appendCountriesData(worldCountriesData) {
  const divContainer = document.getElementById("spoken-language");
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
  divContainer.innerHTML = "";
  const top10CountiesArray = worldCountriesData.slice(0, 10);
  for (let i = 0; i < 10 || i < top10CountiesArray.length; i++) {
    createCountryPopulationChart(
      top10CountiesArray[i].countryName,
      top10CountiesArray[i].population
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
  flagImg.setAttribute(
    "src",
    `https://flagsapi.com/${countryCode}/flat/64.png`
  );
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
async function filterData() {
  const apiData1 = await getAPIData();
  const searchBar = document.getElementById("search-bar");
  const searchValue = searchBar.value;
  const apiData = apiData1.filter((item) => {
    return item.countryName.toLowerCase().includes(searchValue.toLowerCase());
  });
  if (
    searchBar.value.startsWith(" ") &&
    !sortByName &&
    !sortByCapital &&
    !sortByPopulation
  ) {
    appendCountriesData(apiData);
  } else if (
    !searchBar.value.startsWith(" ") &&
    sortByName &&
    !sortByCapital &&
    !sortByPopulation
  ) {
    const filteredApiData = sortingCountriesByName(apiData);
    appendCountriesData(filteredApiData);
  } else if (
    !searchBar.value.startsWith(" ") &&
    !sortByName &&
    sortByCapital &&
    !sortByPopulation
  ) {
    const filteredApiData = sortingCountriesByCapital(apiData);
    appendCountriesData(filteredApiData);
  } else if (
    !searchBar.value.startsWith(" ") &&
    !sortByName &&
    !sortByCapital &&
    sortByPopulation
  ) {
    const filteredApiData = sortingCountriesByPopulation(apiData);
    appendCountriesData(filteredApiData);
  } else {
    appendCountriesData(apiData);
  }
}
function showLanguage() {
  const subtitle = document.getElementById("sub-heading-2");
  subtitle.innerText = "No Languages Data Fetched from API";
}
function showPopulation() {
  const subtitle = document.getElementById("sub-heading-2");
  subtitle.innerText = "Countries population out of 8.1B population worldwide";
}
function createCountryPopulationChart(cntryName, cntryPopulation) {
  const divContainer = document.getElementById("spoken-language");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  div1.setAttribute("class", "grid-item");
  div2.setAttribute("class", "grid-item lang-chart");
  div3.setAttribute("class", "grid-item");
  const label = document.createElement("label");
  label.setAttribute("for", cntryName);
  label.setAttribute("class", "grid-item");
  label.textContent = cntryName;
  div1.appendChild(label);
  const p = document.createElement("p");
  p.setAttribute("class", "grid-item");
  p.textContent = cntryPopulation;
  div3.appendChild(p);
  const progress = document.createElement("progress");
  progress.setAttribute("id", cntryName);
  progress.setAttribute("class", "progress");
  progress.setAttribute("value", cntryPopulation);
  progress.setAttribute("max", worldPopulation);
  div2.appendChild(progress);
  divContainer.appendChild(div1);
  divContainer.appendChild(div2);
  divContainer.appendChild(div3);
}
