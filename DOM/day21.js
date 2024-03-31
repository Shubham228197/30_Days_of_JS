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
// setAttmethod(paraArray);

const classListMethod = (eleArray) => {
  for (let pTag of eleArray) {
    pTag.classList.add("NormClass");
    console.log(pTag);
  }
};
// classListMethod(paraArray);
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
// changePara(paraArray);
console.log("Hey!!!");
