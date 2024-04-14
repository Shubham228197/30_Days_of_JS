import {
  monthNames,
  colorsHex,
  ayKeywords,
  ayTitles,
  aySkills,
  ayQualifications,
} from "../additionaldata.js";

setInterval(() => {
  const currYear = document.getElementById("currentYear");
  currYear.style.color =
    colorsHex[Math.floor(Math.random() * colorsHex.length)];
}, 1000);
setInterval(() => {
  const currYear = document.getElementById("currentYear");
  currYear.style.color =
    colorsHex[Math.floor(Math.random() * colorsHex.length)];
}, 1000);

const newDiv = document.createElement("h3");
newDiv.setAttribute("class", "dateTime");
const date = new Date();

newDiv.textContent = `${
  monthNames[date.getMonth()]
} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
document
  .getElementById("challengeName")
  .insertAdjacentElement("afterend", newDiv);

function updateTime() {
  const now = new Date();
  newDiv.textContent = `${
    monthNames[now.getMonth()]
  } ${now.getDate()}, ${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  newDiv.style.backgroundColor =
    colorsHex[Math.floor(Math.random() * colorsHex.length)];
}
setInterval(updateTime, 1000);

const insertKeyword = () => {
  const keyDiv = document.getElementsByClassName("keywords");
  const keyHeading = document.createElement("h1");
  const keyBody = document.createElement("div");
  keyHeading.textContent = "Keywords";
  keyBody.textContent = "Hi! i am body";
  keyDiv[0].appendChild(keyHeading);
  keyDiv[0].appendChild(keyBody);
};
insertKeyword();
