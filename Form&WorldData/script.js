document.addEventListener("DOMContentLoaded", main());

// get the API from downloaded JSON file
async function getAPIData() {
  const countryAPI = await fetch("./World_Countries_API.json");
  const worldCountryJSONData = await countryAPI.json();
  return worldCountryJSONData.countries.country;
}

// main function run as soon as HTML Loads
async function main() {
  const worldCountriesData = await getAPIData();
  const totalCountries = worldCountriesData.length;
  const setCountryCount = document.getElementById("cntry-count");
  setCountryCount.textContent = totalCountries;
  //Loads Country Cards
  appendCountriesData(worldCountriesData);
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
