import { differentColors, colors, fontFamilies } from "../additionaldata.js";
var firstLineText = ` 30 DAYS OF JAVASCRIPT`;
let midLineText = ` CHALLENGE 2020`;
let lastLineText = ` SHUBHAM PANDEY`;
document.addEventListener("DOMContentLoaded", appendColor);

// creates divisions containing Texts
function appendColor() {
  const parentDiv = document.getElementById("color-text");
  let divBackground =
    differentColors[Math.floor(Math.random() * differentColors.length)];
  let font = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
  parentDiv.style.backgroundColor = divBackground;

  createDivisionForTexts(firstLineText, parentDiv, font);
  createDivisionForTexts(midLineText, parentDiv, font);
  createDivisionForTexts(lastLineText, parentDiv, font);
}

//Model the div having set of texts
function createDivisionForTexts(DispTxt, parentDiv, font) {
  const txtDispDiv = document.createElement("div");
  txtDispDiv.style.fontFamily = font;
  txtDispDiv.setAttribute("class", "fade-in-text");
  for (let i = 0; i < DispTxt.length; i++) {
    if (DispTxt[i] == " ") {
      txtDispDiv.innerHTML += `<span>&nbsp;</span>`;
    } else {
      txtDispDiv.innerHTML += `<span style="color: ${
        colors[Math.floor(Math.random() * colors.length)]
      }">${DispTxt[i]}</span>`;
    }
  }
  parentDiv.appendChild(txtDispDiv);
}

// deletes the previous span in order to replace with new span as in every 1s span new is created and neew spans will get added to previously created span
const removeSpanTags = () => {
  const charSpan = document.querySelectorAll("span");
  for (let i = 0; i < charSpan.length; i++) {
    charSpan[i].remove();
  }
};

setInterval(() => {
  removeSpanTags();
  appendColor();
}, 2000);
