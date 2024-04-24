let totalCountriesLength = 0;
let countriesNames = [];
var searchByfirstAlphabet = false;
let shouldSort = false;
let btn1Color = false;
let btn2Color = false;

const main = async () => {
  const countriesObject = await func();
  countriesNames = countriesObject.data;
  totalCountriesLength = countriesNames.length;
  showCards(totalCountriesLength, countriesNames, shouldSort);
};
const func = async function () {
  const countriesAPI = await fetch("./countriesAPI.json");
  const result = await countriesAPI.json();
  return result;
};
function showCards(countriesArrayLength, countriesArray, shouldSort) {
  if (shouldSort) {
    countriesArray = applySortDesc(countriesArray);
  } else {
    countriesArray = applySort(countriesArray);
  }
  for (let i = 0; i < countriesArrayLength; i++) {
    const updateCount = document.getElementById("c-count");
    const attaching = document.getElementById("hehe");
    const ele = document.createElement("div");
    const text = document.createElement("h6");
    updateCount.innerText = countriesArray.length;
    ele.className = "card-details";
    text.setAttribute("id", "country-name");
    text.textContent = countriesArray[i]?.name;
    attaching.appendChild(ele);
    ele.appendChild(text);
  }
}

function reorderAsc() {
  const ascBtn = document.getElementById("asc");
  const descBtn = document.getElementById("desc");
  ascBtn.style.display = "block";
  descBtn.style.display = "none";
}
function reorderDesc() {
  const ascBtn = document.getElementById("asc");
  const descBtn = document.getElementById("desc");
  ascBtn.style.display = "none";
  descBtn.style.display = "block";
}

//main filter method based on user input
function filterSearch() {
  const userinput = document.getElementById("userinput").value;
  const container = document.querySelector("#hehe");
  removeAllChildNodes(container); // if not removerd it keeps adding up the result
  let updatedCountriesArray = [];
  if (searchByfirstAlphabet == true) {
    updatedCountriesArray = countriesNames.filter((val, index) => {
      return val.name.toUpperCase().startsWith(userinput.toUpperCase());
    });
    totalCountriesLength = updatedCountriesArray.length;
  } else {
    updatedCountriesArray = countriesNames.filter((val, index) => {
      return val.name.toUpperCase().includes(userinput.toUpperCase());
    });
    totalCountriesLength = updatedCountriesArray.length;
  }
  showCards(totalCountriesLength, updatedCountriesArray, shouldSort);
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// makes searching based starting alphabet for the word or --
//search result will have all result contain that alphabet
function startingWord() {
  searchByfirstAlphabet = !searchByfirstAlphabet;
  btn1Color = !btn1Color;
  if (btn1Color) {
    btn2Color = false;
  }
  filterSearch();
  changeColor();
}
function applySort(countriesArray) {
  return countriesArray.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });
}
function applySortDesc(countriesArray) {
  return countriesArray.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    } else if (b.name > a.name) {
      return 1;
    } else {
      return 0;
    }
  });
}

function changeSortPattern() {
  shouldSort = !shouldSort;
  filterSearch();
}

function changeColor() {
  if (btn1Color) {
    searchByfirstAlphabet = true;
  } else {
    searchByfirstAlphabet = false;
  }
  if (btn1Color && btn2Color == false) {
    const b1 = document.getElementById("button1");
    b1.style.backgroundColor = "#3e044a";
  } else {
    const b1 = document.getElementById("button1");
    b1.style.backgroundColor = "blueviolet";
  }

  if (btn2Color && btn1Color == false) {
    const b1 = document.getElementById("button2");
    b1.style.backgroundColor = "#3e044a";
  } else {
    const b1 = document.getElementById("button2");
    b1.style.backgroundColor = "blueviolet";
  }
}

//Makes the search generic
function b2trigger() {
  btn2Color = !btn2Color;
  if (btn2Color) {
    btn1Color = false;
    searchByfirstAlphabet = false;
    filterSearch();
  }
  changeColor();
}
