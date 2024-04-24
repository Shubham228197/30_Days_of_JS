// let sample
// function Func() {
//     fetch('./Copy.json')
//         .then((res) => {
//         return res.json();
//     })
//     .then((data) => {console.log(data)
//         sample=data});
// }
// Func()
// setTimeout(()=>{console.log("sample", sample) }, 2000)

// works

// const sample = require('./Copy.json');
// console.log(sample); //works

// import user from "./Copy.json" assert { type: 'json' };;
// console.log(user) // Does nopt works
let JSONlen = 0;
let arr = [];
var Starting = false;
let shouldsort = false;
let button1color = false;
let button2color = false;
const main = async () => {
  const FinalData = await func();
  arr = FinalData.data;
  JSONlen = arr.length;
  showcards(JSONlen, arr);
};
const func = async function () {
  const data = await fetch("./Copy.json");
  const res = await data.json();
  return res;
};
function showcards(n, DataArray, shouldsort) {
  if (shouldsort) {
    DataArray = applysortdesc(DataArray);
  } else {
    DataArray = applysort(DataArray);
  }
  console.log("NEw ARray", DataArray);
  for (let i = 0; i < n; i++) {
    const updateCount = document.getElementById("c-count");
    const attaching = document.getElementById("hehe");
    const ele = document.createElement("div");
    const text = document.createElement("h6");
    updateCount.innerText = DataArray.length;
    ele.className = "card-details";
    text.setAttribute("id", "country-name");
    text.textContent = DataArray[i]?.name;
    attaching.appendChild(ele);
    ele.appendChild(text);
  }
}
function reorderasc() {
  const ascBut = document.getElementById("asc");
  const desBut = document.getElementById("desc");
  ascBut.style.display = "block";
  desBut.style.display = "none";
}
function reorderdesc() {
  const ascBut = document.getElementById("asc");
  const desBut = document.getElementById("desc");
  ascBut.style.display = "none";
  desBut.style.display = "block";
}
function filterSearch() {
  const userinput = document.getElementById("userinput").value;
  const container = document.querySelector("#hehe");
  removeAllChildNodes(container);
  console.log(typeof userinput);
  let NewArr = [];
  if (Starting == true) {
    NewArr = arr.filter((val, index) => {
      return val.name.toUpperCase().startsWith(userinput.toUpperCase());
    });
    JSONlen = NewArr.length;
  } else {
    NewArr = arr.filter((val, index) => {
      return val.name.toUpperCase().includes(userinput.toUpperCase());
    });
    JSONlen = NewArr.length;
  }
  showcards(JSONlen, NewArr, shouldsort);
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
function startingword() {
  Starting = !Starting;
  button1color = !button1color;
  if (button1color) {
    button2color = false;
  }
  filterSearch();
  changecolor();
}
function applysort(DataArray) {
  return DataArray.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });
}
function applysortdesc(DataArray) {
  return DataArray.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    } else if (b.name > a.name) {
      return 1;
    } else {
      return 0;
    }
  });
}

function changesortpattern() {
  shouldsort = !shouldsort;
  filterSearch();
}

function changecolor() {
  if (button1color) {
    Starting = true;
  } else {
    Starting = false;
  }
  if (button1color && button2color == false) {
    const b1 = document.getElementById("button1");
    b1.style.backgroundColor = "#3e044a";
  } else {
    const b1 = document.getElementById("button1");
    b1.style.backgroundColor = "blueviolet";
  }

  if (button2color && button1color == false) {
    const b1 = document.getElementById("button2");
    b1.style.backgroundColor = "#3e044a";
  } else {
    const b1 = document.getElementById("button2");
    b1.style.backgroundColor = "blueviolet";
  }
}

function b2trigger() {
  button2color = !button2color;
  if (button2color) {
    button1color = false;
    Starting = false;
    filterSearch();
  }
  changecolor();
}
