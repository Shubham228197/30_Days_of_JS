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
    // reseting flags will solve the filter flag conflict
    sortByName = !sortByName;
    sortByCapital = false;
    sortByPopulation = false;
    sortingCountriesByName(worldCountriesData);
    applyArrowIcon(nameBtn, sortByName);
    console.log(
      "Name Flag:",
      sortByName,
      ", Capital Flag:",
      sortByCapital,
      ", Population Flag:",
      sortByPopulation
    );
  });

  const capitalBtn = document.getElementById("apply-capital-sort");
  capitalBtn.addEventListener("click", () => {
    sortByCapital = !sortByCapital;
    sortByName = false;
    sortByPopulation = false;
    sortingCountriesByCapital(worldCountriesData);
    applyArrowIcon(capitalBtn, sortByCapital);
    console.log(
      "Name Flag:",
      sortByName,
      ", Capital Flag:",
      sortByCapital,
      ", Population Flag:",
      sortByPopulation
    );
  });

  const populationBtn = document.getElementById("apply-population-sort");
  populationBtn.addEventListener("click", () => {
    sortByPopulation = !sortByPopulation;
    sortByName = false;
    sortByCapital = false;
    sortingCountriesByPopulation(worldCountriesData);
    applyArrowIcon(populationBtn, sortByPopulation);
    console.log(
      "Name Flag:",
      sortByName,
      ", Capital Flag:",
      sortByCapital,
      ", Population Flag:",
      sortByPopulation
    );
  });

  appendCountriesData(worldCountriesData);
}

function sortingCountriesByName(worldCountriesData) {
  if (sortByName) {
    sortAscending(worldCountriesData, "countryName");
  } else {
    sortdescending(worldCountriesData, "countryName");
  }
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

function sortingCountriesByCapital(worldCountriesData) {
  if (sortByCapital) {
    sortAscending(worldCountriesData, "capital");
  } else {
    sortdescending(worldCountriesData, "capital");
  }
  appendCountriesData(worldCountriesData);
}

function sortingCountriesByPopulation(worldCountriesData) {
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
