const genBtn = document.querySelector(".btn");
const userInp = document.querySelector("#userinp");

genBtn.addEventListener("click", (e) => {
  let genNumber = parseInt(userInp.value);
  let primeNumArr = [];
  const numType = [];
  let c = 1;
  for (let i = 0, p = 2; i <= genNumber; i++, p++) {
    let flag = true;
    for (let j = 2; j <= Math.sqrt(p); j++) {
      if (p % j == 0 || p > genNumber) {
        flag = false;
        break;
      }
    }
    if (flag) {
      primeNumArr.push(p);
    }
    if (primeNumArr.includes(i)) {
      numType.push({ num: i, type: "prime", color: "#EE4266" });
    } else if (i % 2 == 0) {
      numType.push({ num: i, type: "even", color: "#41B06E" });
    } else {
      numType.push({ num: i, type: "odd", color: "#F5DD61" });
    }
  }
  numBlocks(genNumber, numType);
});
function numBlocks(genNumber, numType) {
  for (let i = 0; i <= genNumber; i++) {
    const element = document.createElement("div");
    const containerDiv = document.getElementsByClassName("container");
    element.style.backgroundColor = numType[i].color;
    element.textContent = numType[i].num;
    element.style.padding = "2px";
    element.style.margin = "2px";
    element.style.color = "white";
    element.style.fontSize = "50px";
    element.style.width = "140px";
    element.style.height = "55px";
    element.style.display = "flex";
    element.style.justifyContent = "center";
    element.style.alignItems = "center";
    containerDiv[0].appendChild(element);
  }
}
