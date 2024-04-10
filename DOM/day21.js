/* 
// Exercise 1 -2 Answers
const fisrt_para = document.querySelector("p");
console.log(fisrt_para);

const paraID = ["first_p", "second_p", "third_p", "fourth_p"];
const paraArray = [];
for (let i = 0; i < paraID.length; i++) {
  const pataTag = document.getElementById(paraID[i]);
  paraArray.push(pataTag);
}

paraArray.forEach((pTag) => console.log(pTag));

const allPTags = document.querySelectorAll("p");
allPTags.forEach((tags) => {
  console.log(tags.innerText);
});

document.getElementById("fourth_p").innerText = "Fourth Paragraph";

const setAttmethod = (eleArray) => {
  for (let pTag of eleArray) {
    pTag.setAttribute("class", "demo");
    pTag.setAttribute("id", `id${Math.floor(Math.random() * 999)}`);
    console.log(pTag);
  }
};
setAttmethod(paraArray);

const classListMethod = (eleArray) => {
  for (let pTag of eleArray) {
    pTag.classList.add("NormClass");
    console.log(pTag);
  }
};
classListMethod(paraArray);
//and others

const changePara = (eleArray) => {
  for (let i = 0; i < eleArray.length; i++) {
    if (i % 2 == 0) {
      eleArray[i].style.color = "yellow";
      eleArray[i].style.backgroundColor = "cyan";
      eleArray[i].style.border = "red";
      eleArray[i].style.fontSize = "40px";
      eleArray[i].style.fontFamily = "Times New Roman";
    } else {
      eleArray[i].style.color = "blue";
      eleArray[i].style.backgroundColor = "yellow";
      eleArray[i].style.border = " 1px solid #0000";
      eleArray[i].style.fontSize = "20px";
      eleArray[i].style.fontFamily = "Segoe UI";
    }
    console.log(paraArray[i]);
  }
};
*/
// Exercise 3
const colorsHex = [
  "#ff0000",
  "#0000ff",
  "#00ff00",
  "#ffff00",
  "#ffa500",
  "#800080",
  "#ffc0cb",
  "#00ffff",
  "#ff00ff",
  "#008080",
  "#00ff00",
  "#800000",
  "#000080",
  "#808000",
  "#c0c0c0",
  "#000000",
  "#ffffff",
  "#a52a2a",
  "#808080",
  "#4b0082",
  "#40e0d0",
  "#fa8072",
  "#87ceeb",
  "#ee82ee",
  "#ff7f50",
  "#da70d6",
  "#ffd700",
  "#f0e68c",
  "#fffff0",
  "#d2b48c",
  "#dc143c",
  "#7fffd4",
  "#e6e6fa",
  "#dda0dd",
  "#7fff00",
  "#ff6347",
  "#faf0e6",
  "#cd853f",
  "#d8bfd8",
  "#6495ed",
  "#b22222",
  "#2f4f4f",
  "#bdb76b",
  // Add more colors as needed
];
const liList = document.querySelectorAll("li");
liList.forEach((tag) => {
  if (tag.innerText.includes("Done")) {
    tag.style.backgroundColor = "green";
  }
  if (tag.innerText.includes("Ongoing")) {
    tag.style.backgroundColor = "yellow";
  }
  if (tag.innerText.includes("Coming")) {
    tag.style.backgroundColor = "red";
  }
});
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
const dateTime = new Date();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dateAndTime = document.createElement("h4");
dateAndTime.setAttribute("id", "d&t");
const h2 = document.getElementsByTagName("h2");
h2[0].appendChild(dateAndTime);
const date = new Date();
setInterval(updateTime, 1000);
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;
  dateAndTime.textContent =
    `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ` +
    timeString;
  // console.log(timeString);
}
setInterval(updateTime, 1000);
//Optimize the funtion if possible
