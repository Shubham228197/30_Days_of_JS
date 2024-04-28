import { leaderboardAccounts } from "../additionaldata.js";
document.addEventListener("DOMContentLoaded", () => {
  createComponent();
});

document.getElementById("addingNewAccounts").addEventListener("click", () => {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const countryName = document.getElementById("country");
  const scoreData = document.getElementById("score");
  const id =
    firstName.value[0] +
    lastName.value[lastName.value.length - 1] +
    countryName.value[Math.floor(countryName.value.length / 2)] +
    scoreData.value;
  console.log("input id:", id);
  addplayer({
    id: id.toLowerCase(),
    fname: firstName.value.toUpperCase(),
    lname: lastName.value.toUpperCase(),
    country: countryName.value.toUpperCase(),
    score: Number(scoreData.value),
  });
});
function addplayer(newUser) {
  console.log(newUser);
  if (
    newUser === undefined ||
    newUser.id === NaN ||
    newUser.fname == "" ||
    newUser.lname == "" ||
    newUser.country == "" ||
    newUser.score == 0
  ) {
    alert("Invalid Entry");
  } else {
    leaderboardAccounts.push(newUser);
    removeAllChildren();
    createComponent();
  }
}
async function createComponent() {
  sortLeaderboards();
  console.log("inside CreateComponent:", leaderboardAccounts);
  for (let i = 0; i < leaderboardAccounts.length; i++) {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    gridContainer.setAttribute("id", leaderboardAccounts[i].id);
    const gridItem_1 = document.createElement("div");
    gridItem_1.classList.add("grid-item");
    const username = document.createElement("p");
    username.setAttribute("id", "username");
    username.innerText =
      leaderboardAccounts[i].fname + " " + leaderboardAccounts[i].lname;
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
    gridItem_2.innerText = leaderboardAccounts[i].country;
    gridContainer.appendChild(gridItem_2);

    const gridItem_3 = document.createElement("div");
    gridItem_3.innerText = leaderboardAccounts[i].score;
    gridItem_3.setAttribute("id", "user-score");
    gridItem_3.classList.add("grid-item");
    gridContainer.appendChild(gridItem_3);

    const gridItem_4 = document.createElement("div");
    gridItem_4.classList.add("grid-item");

    const delButton = document.createElement("button");
    delButton.addEventListener("click", async () => {
      removeAccFromLeaderboard(i);
      removeAllChildren();
      createComponent();
    });
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
    pos5.addEventListener("click", async () => {
      addFivePoints(i);
      removeAllChildren();
      createComponent();
    });

    const neg5 = document.createElement("button");
    neg5.classList.add("cssbuttons");
    neg5.innerText = "-5";
    neg5.classList.add("buttons");
    neg5.classList.add("minusScore-button");
    neg5.addEventListener("click", async () => {
      minusFivePoints(i);
      removeAllChildren();
      createComponent();
    });

    gridContainer.appendChild(gridItem_4);
    gridItem_4.appendChild(delButton);
    gridItem_4.appendChild(pos5);
    gridItem_4.appendChild(neg5);

    const parentDiv = document.getElementById("score-cards");
    parentDiv.appendChild(gridContainer);
  }
}
function removeAllChildren() {
  var myDiv = document.getElementById("score-cards");
  while (myDiv.firstChild) {
    myDiv.removeChild(myDiv.firstChild);
  }
}

function removeAccFromLeaderboard(index) {
  leaderboardAccounts.splice(index, 1);
  console.log("With Removed value:", leaderboardAccounts);
}
function sortLeaderboards() {
  leaderboardAccounts.sort((a, b) => {
    return b.score - a.score;
  });
}
function addFivePoints(index) {
  leaderboardAccounts[index].score += 5;
}
function minusFivePoints(index) {
  leaderboardAccounts[index].score -= 5;
}
