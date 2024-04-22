import { keyCodes } from "../additionaldata.js";

document.body.addEventListener("keydown", (event) => {
  const checKey = keyCodes[event.keyCode];
  let keyMessage = "";
  let keyText = "";
  if (checKey === undefined) {
    console.log("not w", event.keyCode);
    keyMessage = event.keyCode;
    keyText = event.key;
  } else {
    console.log("w", keyCodes[event.key]);
    keyMessage = event.keyCode;
    keyText = keyCodes[event.keyCode];
  }
  createBox(keyMessage, keyText);
});

function createBox(keyMessage, keyText) {
  document.getElementById("attachRes").innerHTML = "";
  const keyCodeResult = document.createElement("div");
  keyCodeResult.setAttribute("class", "result");
  document.querySelector(
    ".container"
  ).innerHTML = `You pressed<span style="color: rgb(36, 255, 54);">&nbsp;${keyText}</span>
  `;
  keyCodeResult.textContent = keyMessage;
  document.getElementById("attachRes").appendChild(keyCodeResult);
}
