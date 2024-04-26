const scoreForm = document.getElementById("score-form");
let rendercount = 0;
let addedPlayerCount = 0;
scoreForm.addEventListener("submit", (e) => {
  // to save the URL from updating with data. CANCEL OUTS THE NORMAL BEHAVIOUR
  e.preventDefault();
});
let JSONdata = [
  {
    id: "syd100",
    fname: "SHUBHAM",
    lname: "PANDEY",
    country: "INDIA",
    score: 100,
  },
  {
    id: "ria50",
    fname: "RAJU",
    lname: "RAST0GI",
    country: "MALAYSIA",
    score: 50,
  },
  { id: "chs75", fname: "CHARLIE", lname: "PUTH", country: "USA", score: 75 },
  {
    id: "coi90",
    fname: "CHANG LE",
    lname: "SHAO",
    country: "CHINA",
    score: 90,
  },
];
const onSubmit = async () => {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const countryName = document.getElementById("country");
  const scoreData = document.getElementById("score");
  const id =
    firstName.value[0] +
    lastName.value[lastName.value.length - 1] +
    countryName.value[countryName.value.length / 2] +
    scoreData.value;
  return {
    id: id.toLowerCase(),
    fname: firstName.value.toUpperCase(),
    lname: lastName.value.toUpperCase(),
    country: countryName.value.toUpperCase(),
    score: Number(scoreData.value),
    // score: parseInt(scoreData.value, 10),
  };
};

async function addplayer() {
  rendercount++;
  console.log("Render Count: ", rendercount);
  sorting(JSONdata);
  const userData = await onSubmit();
  if (rendercount == 1) {
    createComponent(JSONdata);
  } else if (
    userData.fname !== "" &&
    userData.lname !== "" &&
    userData.country !== "" &&
    userData.score > 0 &&
    rendercount > 1
  ) {
    alert("I am Running");
    JSONdata.push(userData);
    sorting(JSONdata);
    removeAllChildren();
    createComponent(JSONdata);
  } else {
    alert("Enter Valid data");
  }
}

function createComponent(JSONdata) {
  // console.log(JSONdata);
  for (let i = 0; i < JSONdata.length; i++) {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    gridContainer.setAttribute("id", JSONdata[i].id);
    const gridItem_1 = document.createElement("div");
    gridItem_1.classList.add("grid-item");
    const username = document.createElement("p");
    username.setAttribute("id", "username");
    username.innerText = JSONdata[i].fname + " " + JSONdata[i].lname;
    const dateANDtime = document.createElement("p");
    dateANDtime.setAttribute("id", "current-data-time");
    dateANDtime.classList.add("timimg");
    gridContainer.appendChild(gridItem_1);
    dateANDtime.innerText = "DEMO DATE - TIME";
    gridItem_1.appendChild(username);
    gridItem_1.appendChild(dateANDtime);

    const gridItem_2 = document.createElement("div");
    gridItem_2.setAttribute("id", "country-name");
    gridItem_2.classList.add("grid-item");
    gridItem_2.innerText = JSONdata[i].country;
    gridContainer.appendChild(gridItem_2);

    const gridItem_3 = document.createElement("div");
    gridItem_3.innerText = JSONdata[i].score;
    gridItem_3.setAttribute("id", "user-score");
    gridItem_3.classList.add("grid-item");
    gridContainer.appendChild(gridItem_3);

    const gridItem_4 = document.createElement("div");
    gridItem_4.classList.add("grid-item");
    const delButton = document.createElement("button");
    const binIcon = document.createElement("img");
    binIcon.src = "./images/delete.png";
    binIcon.alt = "del";
    delButton.appendChild(binIcon);
    delButton.classList.add("buttons");
    delButton.classList.add("cssbuttons");
    delButton.classList.add("delete-button");
    const pos5 = document.createElement("button");
    pos5.classList.add("cssbuttons");
    pos5.innerText = "+5";
    pos5.classList.add("buttons");
    pos5.classList.add("addScore-button");
    const neg5 = document.createElement("button");
    neg5.classList.add("cssbuttons");
    neg5.innerText = "-5";
    neg5.classList.add("buttons");
    neg5.classList.add("minusScore-button");
    gridContainer.appendChild(gridItem_4);
    gridItem_4.appendChild(delButton);
    gridItem_4.appendChild(pos5);
    gridItem_4.appendChild(neg5);

    const parentDiv = document.getElementById("score-cards");
    parentDiv.appendChild(gridContainer);
  }
}

// the way to delete all children of a div is to use removeChild and pass the firstChild inside a while loop as if there is a first child loop will continue and div child will keep deleting
function removeAllChildren() {
  var myDiv = document.getElementById("score-cards");
  while (myDiv.firstChild) {
    myDiv.removeChild(myDiv.firstChild);
  }
}
function sorting(array) {
  return array.sort((a, b) => b.score - a.score);
}
addplayer();
// removing event handler is crusial as too many call were happening to activateButtons()
function activateButtons() {
  console.log("Active Buttons is called");
  const deleteButtons = document.querySelectorAll(".delete-button");
  function removeButtonEventListener(button, eventType, handler) {
    button.removeEventListener(eventType, handler);
  }
  // Attach click event listener to each "delete-button"
  deleteButtons.forEach((button) => {
    console.log("inside FOR EACH is CAlled", button);
    async function deleteDivContainer() {
      console.log("inside deleteDivContainer()");
      const container = button.parentNode;
      const cont = container.parentNode;
      const CntrID = cont.getAttribute("id");
      cont.remove();
      JSONdata = await removeJSONdata(CntrID, JSONdata);
      removeButtonEventListener(button, "click", deleteDivContainer);
    }
    button.addEventListener("click", deleteDivContainer); // Use the once option here
  });
}

// function activateButtons() {
//   const deleteButtons = document.querySelectorAll(".delete-button");
//   const addScore = document.querySelectorAll(".addScore-button");
//   const minusScore = document.querySelectorAll(".minusScore-button");

//   // Helper function to remove event listener from the button
//   function removeButtonEventListener(button, eventType, handler) {
//     button.removeEventListener(eventType, handler);
//   }

//   // Attach click event listener to each "addScore-button"
//   addScore.forEach((button) => {
//     async function addButtonClickHandler() {
//       const container = button.parentNode;
//       const cont = container.parentNode;
//       const CntrID = cont.getAttribute("id");
//       console.log("ADDED +5");
//       JSONdata = await addScoreToID(CntrID);
//       console.log("After: ", JSONdata);

//       // Remove the event listener after handling the click once
//       removeButtonEventListener(button, "click", addButtonClickHandler);
//     }

//     button.addEventListener("click", addButtonClickHandler);
//   });

//   minusScore.forEach((button) => {
//     async function minusButtonClickHandler() {
//       const container = button.parentNode;
//       const cont = container.parentNode;
//       const CntrID = cont.getAttribute("id");
//       console.log("minus -5");
//       JSONdata = await minusScoreToID(CntrID);
//       console.log("After: ", JSONdata);

//       // Remove the event listener after handling the click once
//       removeButtonEventListener(button, "click", minusButtonClickHandler);
//     }

//     button.addEventListener("click", minusButtonClickHandler);
//   });

//   // Attach click event listener to each "delete-button"
//   deleteButtons.forEach((button) => {
//     async function deleteButtonClickHandler() {
//       const container = button.parentNode;
//       const cont = container.parentNode;
//       const CntrID = cont.getAttribute("id");
//       cont.remove();
//       JSONdata = await removeJSONdata(CntrID, JSONdata);

//       // Remove the event listener after handling the click once
//       removeButtonEventListener(button, "click", deleteButtonClickHandler);
//     }

//     button.addEventListener("click", deleteButtonClickHandler);
//   });
// }

// Get all buttons with class "delete-button"
async function removeJSONdata(CntrID, JSONdata) {
  return JSONdata.filter((item) => {
    return item.id != CntrID;
  });
}
// async function addScoreToID(CntrID) {
//   return JSONdata.map((item) => {
//     if (CntrID === item.id) {
//       return { ...item, score: item.score + 5 };
//     } else {
//       return item;
//     }
//   });
// }
// async function minusScoreToID(CntrID) {
//   return JSONdata.map((item) => {
//     if (CntrID === item.id) {
//       return { ...item, score: item.score - 5 };
//     } else {
//       return item;
//     }
//   });
// }
