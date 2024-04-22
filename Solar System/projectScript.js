const planetNames = [
  "nothing",
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
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
  let planetName = planetNames[selectedImage_2];
  let resultNum = getGravity(planetName);
  updatePlanetGravity.innerText = resultNum;
  updatePlanetName.innerText = planetName;
}
function getGravity(name) {
  let Result = 0.0;
  const userInput = document.getElementById("userInput");
  if (userInput.value != "") {
    const resultPanel = document.getElementById("hello");
    const pos = document.getElementById("positive")
    const neg = document.getElementById("negative")
    resultPanel.style.display = "flex";
    pos.style.display = "flex";
    neg.style.display = "none"
    switch (name) {
      case "Mercury":
        Result = ((userInput.value / 9.81) * 3.7).toFixed(3);
        break;
      case "Venus":
        Result = ((userInput.value / 9.81) * 8.87).toFixed(3);
        break;
      case "Earth":
        Result = ((userInput.value / 9.81) * 9.81).toFixed(3);
        break;
      case "Mars":
        Result = ((userInput.value / 9.81) * 3.711).toFixed(3);
        break;
      case "Jupiter":
        Result = ((userInput.value / 9.81) * 24.79).toFixed(3);
        break;
      case "Saturn":
        Result = ((userInput.value / 9.81) * 10.44).toFixed(3);
        break;
      case "Uranus":
        Result = ((userInput.value / 9.81) * 8.69).toFixed(3);
        break;
      case "Neptune":
        Result = ((userInput.value / 9.81) * 11.15).toFixed(3);
        break;
      case "Pluto":
        Result = ((userInput.value / 9.81) * 13.45).toFixed(3);
        break;
      default:
        break;
    }
  }else{
    const pos = document.getElementById("positive")
    const neg = document.getElementById("negative")
    pos.style.display = "none";
    neg.style.display = "block"
  }
  console.log(typeof Result);
  return Result;
}
