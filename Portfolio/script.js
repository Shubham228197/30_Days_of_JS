document.addEventListener("DOMContentLoaded", function () {
  const skillsArray = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "REACT",
    "REDUX",
    "JAVA",
    "SQL",
  ];
  const colorPallete = [
    "yellow",
    "blue",
    "red",
    "green",
    "aqua",
    "blueviolet",
    "tomato",
    "rgb(0, 174, 255)",
  ];
  const roles = [
    "Frontend&nbsp;Developer",
    "System&nbsp;Engineer",
    "Problem&nbsp;Solving",
    "Databases&nbsp;Management",
  ];
  const imgURL = [
    "./images/webdev.png",
    "./images/computer.png",
    "./images/problem.png",
    "./images/database.png",
  ];
  const imgeez = document.getElementById("images");
  const rolesValue = document.getElementById("roles");
  let count = 0;
  setInterval(() => {
    imgeez.src = imgURL[count];
    rolesValue.innerHTML = roles[count];
    count++;
    if (count == 4) {
      count = 0;
    }
  }, 2000);
  let skillText = document.getElementById("skilltext");
  let index = 0;
  setInterval(() => {
    skillText.innerText = skillsArray[index];
    skillText.style.color = colorPallete[index];
    index++;
    if (index == skillsArray.length) {
      index = 0;
    }
  }, 2000);
});
