import { differentColors, colors, fontFamilies } from "../additionaldata.js";
var str1 = ` 30 DAYS OF JAVASCRIPT`;
let str2 = ` CHALLENGE 2020`;
let str3 = ` SHUBHAM PANDEY`;
document.addEventListener("DOMContentLoaded", appendColor);

function appendColor() {
  // var differentColors = new Array("black", "white");
  const conti = document.getElementById("color-text");
  const div1 = document.getElementById("article-1");
  const div2 = document.getElementById("article-2");
  const div3 = document.getElementById("article-3");
  let c = differentColors[Math.floor(Math.random() * differentColors.length)];
  let d = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
  conti.style.backgroundColor = c;
  conti.style.fontFamily = d;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] == " ") {
      div1.innerHTML += `<span class="jello">&nbsp;</span>`;
    } else {
      div1.innerHTML += `<span class="jello" style="color: ${
        colors[Math.floor(Math.random() * colors.length)]
      }">${str1[i]}</span>`;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    // divi.innerHTML = document.write("<span style=\"color:" + colors[Math.floor(Math.random() * colors.length)] + ";\">" + str2[i] + "</span>");
    if (str2[i] == " ") {
      div2.innerHTML += `<span class="jello">&nbsp;</span>`;
    } else {
      // div2.style.color = "green"
      div2.innerHTML += `<span class="jello" style="color: ${
        colors[Math.floor(Math.random() * colors.length)]
      }">${str2[i]}</span>`;
    }
  }
  for (let i = 0; i < str3.length; i++) {
    // divi.innerHTML = document.write("<span style=\"color:" + colors[Math.floor(Math.random() * colors.length)] + ";\">" + str3[i] + "</span>");
    if (str3[i] == " ") {
      div3.innerHTML += `<span class="jello">&nbsp;</span>`;
    } else {
      // div3.style.color = "green"
      div3.innerHTML += `<span id="hehe" class="jello" style="color: ${
        colors[Math.floor(Math.random() * colors.length)]
      }">${str3[i]}</span>`;
    }
  }
}
const removeSpanTags = () => {
  const div1 = document.querySelectorAll("span");
  for (let i = 0; i < div1.length; i++) {
    div1[i].remove();
  }
};
function restart() {
  removeSpanTags();
}
setInterval(() => {
  removeSpanTags();
  appendColor();
}, 1000);
