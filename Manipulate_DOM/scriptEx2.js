import { countries } from "../additionaldata.js";
const CountryCount = document.getElementsByTagName("span");
CountryCount[0].textContent = countries.length;
for (let i = 0; i < countries.length; i++) {
  const divBox = document.createElement("div");
  divBox.textContent = countries[i];
  divBox.style.display = "flex";
  divBox.style.width = "150px";
  divBox.style.height = "150px";
  divBox.style.border = "1px solid black";
  divBox.style.boxShadow = "1px 1px ";
  divBox.style.margin = "0px 3px 3px 3px";
  divBox.style.textAlign = "center";
  divBox.style.justifyContent = "center";
  divBox.style.alignItems = "center";
  document.querySelector(".container").appendChild(divBox);
}
