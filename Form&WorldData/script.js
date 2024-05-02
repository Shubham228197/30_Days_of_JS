let sortByName = false;
let sortByCapital = false;
let sortByPopulation = false;
// the idea od using render is to find out the filer is used for ascending or descending order but as the Problem does not care for that so no need but keeping there of anyday ots needed
let eventListnerCallCount = 0;

// main function run as soon as HTML Loads
document.addEventListener("DOMContentLoaded", main());

// get the API from downloaded JSON file
async function getAPIData() {
  const countryAPI = await fetch("./World_Countries_API.json");
  const worldCountryJSONData = await countryAPI.json();
  return worldCountryJSONData.countries.country;
}

async function main() {
  console.log("Main Running");
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
    console.log("Name Event Listner");
  });

  const capitalBtn = document.getElementById("apply-capital-sort");
  capitalBtn.addEventListener("click", () => {
    eventListnerCallCount++;
    sortByCapital = !sortByCapital;
    sortByName = false;
    sortByPopulation = false;
    filterData();
    applyArrowIcon(capitalBtn, sortByCapital);
    console.log("Capital Event Listner");
  });

  const populationBtn = document.getElementById("apply-population-sort");
  populationBtn.addEventListener("click", () => {
    eventListnerCallCount++;
    sortByPopulation = !sortByPopulation;
    sortByName = false;
    sortByCapital = false;
    filterData();
    applyArrowIcon(populationBtn, sortByPopulation);
    console.log("Population Event Listner");
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

function sortingCountriesByName(worldCountriesData) {
  console.log("Sorting Countires by name");
  if (sortByName) {
    return sortAscending(worldCountriesData, "countryName");
  } else {
    return sortdescending(worldCountriesData, "countryName");
  }
}

function sortingCountriesByCapital(worldCountriesData) {
  console.log("Sorting Countires by capital");
  // Multiple Data is receiveing API have no capital info so sorting in ascending order makes the data looks bad so default is descending
  if (!sortByCapital) {
    return sortAscending(worldCountriesData, "capital");
  } else {
    return sortdescending(worldCountriesData, "capital");
  }
}

function sortingCountriesByPopulation(worldCountriesData) {
  console.log("Sorting Countires by population");
  // Multiple Data is receiveing API have no population info so sorting in ascending order makes the data looks bad so default is descending
  if (!sortByPopulation) {
    return sortAscending(worldCountriesData, "population");
  } else {
    return sortdescending(worldCountriesData, "population");
  }
}

function sortAscending(worldCountriesData, keyoword) {
  console.log("Ascending Sort");
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

function sortdescending(worldCountriesData, keyoword) {
  console.log("Descending Sort");
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
async function filterData() {
  console.log("---------------------------------------");
  console.log("RenderCount:", eventListnerCallCount);
  console.log("---------------------------------------");
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
    console.log("condition_1:", sortByName, sortByCapital, sortByPopulation);
    appendCountriesData(apiData);
  } else if (
    !searchBar.value.startsWith(" ") &&
    sortByName &&
    !sortByCapital &&
    !sortByPopulation
  ) {
    console.log("Name filter:", sortByName, sortByCapital, sortByPopulation);
    const filteredApiData = sortingCountriesByName(apiData);
    appendCountriesData(filteredApiData);
  } else if (
    !searchBar.value.startsWith(" ") &&
    !sortByName &&
    sortByCapital &&
    !sortByPopulation
  ) {
    console.log("Capital filter:", sortByName, sortByCapital, sortByPopulation);
    const filteredApiData = sortingCountriesByCapital(apiData);
    appendCountriesData(filteredApiData);
  } else if (
    !searchBar.value.startsWith(" ") &&
    !sortByName &&
    !sortByCapital &&
    sortByPopulation
  ) {
    console.log(
      "Population filter:",
      sortByName,
      sortByCapital,
      sortByPopulation
    );
    const filteredApiData = sortingCountriesByPopulation(apiData);
    appendCountriesData(filteredApiData);
  } else {
    console.log("No Filter:", sortByName, sortByCapital, sortByPopulation);
    appendCountriesData(apiData);
  }
}
