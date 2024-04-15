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
  keyDiv[0].appendChild(keyHeading);
  for (let i = 0; i < ayKeywords.length; i++) {
    const keyWord = document.createElement("button");
    keyWord.style.margin = "0px 3px 3px 3px";
    keyWord.textContent = ayKeywords[i];
    keyDiv[0].appendChild(keyWord);
  }
};
insertKeyword();

const insertAbout = () => {
  for (let i = 0; i < ayTitles.length; i++) {
    const titlesDiv = document.getElementsByClassName("titles");
    const titlesContent = document.createElement("p");
    titlesContent.textContent = ayTitles[i];
    titlesDiv[0].appendChild(titlesContent);
  }
  for (let i = 0; i < aySkills.length; i++) {
    const skillDiv = document.getElementsByClassName("skills");
    const skillsContent = document.createElement("p");
    skillsContent.textContent = aySkills[i];
    skillDiv[0].appendChild(skillsContent);
  }
  for (let i = 0; i < ayQualifications.length; i++) {
    const degreeDiv = document.getElementsByClassName("degree");
    const degreeContent = document.createElement("p");
    degreeContent.textContent = ayQualifications[i];
    degreeDiv[0].appendChild(degreeContent);
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
