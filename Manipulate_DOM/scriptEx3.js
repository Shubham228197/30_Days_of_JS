import {
  monthNames,
  colorsHex,
  ayKeywords,
  ayTitles,
  aySkills,
  ayQualifications,
  skillData,
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

const newDiv = document.createElement("p");
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
  for (let i = 0; i < ayKeywords.length; i++) {
    const keyWord = document.createElement("button");
    keyWord.setAttribute("class", "btn");
    keyWord.style.backgroundColor =
      colorsHex[Math.floor(Math.random() * colorsHex.length)];
    keyWord.textContent = ayKeywords[i];
    keyDiv[0].appendChild(keyWord);
  }
};
insertKeyword();

const insertAbout = () => {
  for (let i = 0; i < ayTitles.length; i++) {
    const titlesDiv = document.getElementsByClassName("titles");
    const titlesContent = document.createElement("p");
    const titlesContainer = document.createElement("div");
    const titlesImg = document.createElement("img");
    titlesContainer.setAttribute("class", "aboutContainer");
    titlesImg.setAttribute("class", "aboutImg");
    titlesImg.setAttribute("src", ayTitles[i].path);
    titlesImg.setAttribute("alt", ayTitles[i].value);
    titlesContent.textContent = ayTitles[i].value;
    titlesContainer.appendChild(titlesImg);
    titlesContainer.appendChild(titlesContent);
    titlesDiv[0].appendChild(titlesContainer);
  }
  for (let i = 0; i < aySkills.length; i++) {
    const skillDiv = document.getElementsByClassName("skills");
    const skillsContent = document.createElement("p");
    const skillsContainer = document.createElement("div");
    const skillsImg = document.createElement("img");
    skillsContainer.setAttribute("class", "aboutContainer");
    skillsImg.setAttribute("class", "aboutImg");
    skillsImg.setAttribute("src", aySkills[i].path);
    skillsImg.setAttribute("alt", aySkills[i].value);
    skillsContent.textContent = aySkills[i].value;
    skillsContainer.appendChild(skillsImg);
    skillsContainer.appendChild(skillsContent);
    skillDiv[0].appendChild(skillsContainer);
  }
  for (let i = 0; i < ayQualifications.length; i++) {
    const degreeDiv = document.getElementsByClassName("degree");
    const degreeContent = document.createElement("p");
    const degreeContainer = document.createElement("div");
    const degreeImg = document.createElement("img");
    degreeContainer.setAttribute("class", "aboutContainer");
    degreeImg.setAttribute("class", "aboutImg");
    degreeImg.setAttribute("src", ayQualifications[i].path);
    degreeImg.setAttribute("alt", ayQualifications[i].value);
    degreeContent.textContent = ayQualifications[i].value;
    degreeContainer.appendChild(degreeImg);
    degreeContainer.appendChild(degreeContent);
    degreeDiv[0].appendChild(degreeContainer);
  }
};
insertAbout();

const insertEvents = () => {
  const containerDiv = document.querySelector(".container");
  for (let i = 0; i < skillData.length; i++) {
    const eventDiv = document.createElement("div");
    eventDiv.setAttribute("class", "event");
    const summPara = document.createElement("p");
    const eventType = document.createElement("p");
    eventType.style.textDecoration = "underline";
    const eventDetails = document.createElement("details");
    const eventSummary = document.createElement("summary");
    const eventPara = document.createElement("p");
    containerDiv.appendChild(eventDiv);
    eventDiv.appendChild(eventType);
    eventDiv.appendChild(eventDetails);
    eventDetails.appendChild(eventSummary);
    eventDetails.appendChild(summPara);
    eventDiv.appendChild(eventPara);
    eventType.textContent = skillData[i].course;
    eventPara.textContent = skillData[i].type;
    eventSummary.textContent = skillData[i].lang;
    for (let item of skillData[i].summary) {
      const techList = document.createElement("p");
      techList.textContent = item;
      summPara.appendChild(techList);
    }
    if (skillData[i].type == "Done") {
      eventDiv.style.backgroundColor = "#4CCD99";
    } else if (skillData[i].type == "Ongoing") {
      eventDiv.style.backgroundColor = "#FFF78A";
    } else {
      eventDiv.style.backgroundColor = "#EF4040";
    }
  }
};
insertEvents();
