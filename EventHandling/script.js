const genBtn = document.querySelector(".btn");
const userInp = document.querySelector("#userinp");

genBtn.addEventListener("click", () => {
  const dispErr = document.getElementById("errorMsg");
  let inpValue = parseInt(document.getElementById("userinp").value);
  document.getElementById("container").innerHTML = "";
  if (inpValue < 0 || isNaN(inpValue)) {
    dispErr.textContent = "*input value is incorrect!";
    dispErr.style.color = "red";
  } else {
    let genNumber = parseInt(userInp.value);
    let primeNumArr = [];
    const numType = [];
    let c = 1;
    dispErr.innerHTML = "\u00a0";
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
  }
});
function numBlocks(genNumber, numType) {
  for (let i = 0; i <= genNumber; i++) {
    const element = document.createElement("div");
    const containerDiv = document.getElementsByClassName("container");
    element.style.backgroundColor = numType[i].color;
    element.textContent = numType[i].num;
    element.setAttribute("class", "numBox");
    containerDiv[0].appendChild(element);
  }
}
