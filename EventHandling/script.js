let primeNumArr = [];
const numType = [];
let c = 1;
for (let i = 0, p = 2; i <= 101; i++, p++) {
  let flag = true;
  for (let j = 2; j <= Math.sqrt(p); j++) {
    if (p % j == 0 || p > 101) {
      flag = false;
      break;
    }
  }
  if (flag) {
    primeNumArr.push(p);
  }
  if (primeNumArr.includes(i)) {
    numType.push({ num: i, type: "prime", color: "red" });
  } else if (i % 2 == 0) {
    numType.push({ num: i, type: "even", color: "green" });
  } else {
    numType.push({ num: i, type: "odd", color: "yellow" });
  }
}
console.log(numType);
for (let i = 0; i <= 101; i++) {
  const element = document.createElement("div");
  element.style.backgroundColor = numType[i].color;
  element.textContent = numType[i].num;
  element.style.padding = "2px";
  element.style.margin = "2px";
  element.style.color = "white";
  element.style.fontSize = "30px";
  element.style.width = "150px";
  element.style.height = "75px";
  element.style.display = "flex";
  element.style.justifyContent = "center";
  element.style.alignItems = "center";
  const containerDiv = document.getElementsByClassName("container");
  containerDiv[0].appendChild(element);
}
