const planetNames = [
  "NULL",
  "MERCURY",
  "VENUS",
  "EARTH",
  "MARS",
  "JUPITER",
  "SATURN",
  "URANUS",
  "NEPTUNE",
  "PLUTO",
];
function changeImage() {
  const imageSelector = document.getElementById("imageSelector"); // select tag's id
  const displayImage = document.getElementById("display-image"); // img tag where image is going to get displayed
  const selectedImage =
    imageSelector.options[imageSelector.selectedIndex].value;
  displayImage.src = selectedImage;
}
function gravityResult() {
  const updatePlanetGravity = document.getElementById("gravity-number");
  const updatePlanetName = document.getElementById("planet-name");
  const selectedImage_2 = imageSelector.selectedIndex;
  console.log("Selected image 2:", selectedImage_2);
  let planetName = planetNames[selectedImage_2];
  console.log("planet name: ", planetName);
  let resultNum = getGravity(planetName);
  console.log("result num: ", resultNum);
  updatePlanetGravity.innerText = resultNum;
  updatePlanetName.innerText = planetName;
}
function getGravity(name) {
  let Result = 0.0;
  const userInput = document.getElementById("text-input");
  if (userInput.value != "") {
    const resultPanel = document.getElementById("hello");
    const pos = document.getElementById("positive");
    const neg = document.getElementById("negative");
    resultPanel.style.display = "flex";
    pos.style.display = "flex";
    neg.style.display = "none";
    switch (name) {
      case "MERCURY":
        Result = (userInput.value / 9.81) * 3.7;
        break;
      case "VENUS":
        Result = (userInput.value / 9.81) * 8.87;
        break;
      case "EARTH":
        Result = (userInput.value / 9.81) * 9.81;
        break;
      case "MARS":
        Result = (userInput.value / 9.81) * 3.711;
        break;
      case "JUPITER":
        Result = (userInput.value / 9.81) * 24.79;
        break;
      case "SATURN":
        Result = (userInput.value / 9.81) * 10.44;
        break;
      case "URANUS":
        Result = (userInput.value / 9.81) * 8.69;
        break;
      case "NEPTUNE":
        Result = (userInput.value / 9.81) * 11.15;
        break;
      case "PLUTO":
        Result = (userInput.value / 9.81) * 13.45;
        break;
      default:
        break;
    }
  } else {
    const pos = document.getElementById("positive");
    const neg = document.getElementById("negative");
    pos.style.display = "none";
    neg.style.display = "block";
  }
  console.log(typeof Result);
  return (Result * 9.8).toFixed(2);
}
