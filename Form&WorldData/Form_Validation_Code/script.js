let nameFlag = false;
let lastFlag = false;
let emailFlag = false;
let passwordFlag = false;
let telephoneFlag = false;
let bioFlag = false;
function onSubmit() {
  checkFirstName();
  checkLastName();
  checkEmail();
  checkPassword();
  checkTelephone();
  checkBio();
  checkButton();
}
function checkFirstName() {
  let gg = document.getElementById("fname-warning");
  var name = document.getElementById("fname");
  if (name.value.length < 3) {
    document.getElementById("fname").style.border = "2px solid red";
    gg.style.display = "block";
  } else {
    nameFlag = true;
    document.getElementById("fname").style.border = "2px solid green";
    gg.style.display = "none";
  }
}
function checkLastName() {
  let gg = document.getElementById("lname-warning");
  var name = document.getElementById("lname");
  if (name.value.length < 3) {
    document.getElementById("lname").style.border = "2px solid red";
    gg.style.display = "block";
  } else {
    lastFlag = true;
    document.getElementById("lname").style.border = "2px solid green";
    gg.style.display = "none";
  }
}
function checkEmail() {
  let gg = document.getElementById("email-warning");
  var name = document.getElementById("e-mail");
  if (name.value.length < 3) {
    document.getElementById("e-mail").style.border = "2px solid red";
    gg.style.display = "block";
  } else {
    emailFlag = true;
    document.getElementById("e-mail").style.border = "2px solid green";
    gg.style.display = "none";
  }
}
function checkPassword() {
  let gg = document.getElementById("passcode-warning");
  var name = document.getElementById("pass");
  if (name.value.length < 3) {
    document.getElementById("pass").style.border = "2px solid red";
    gg.style.display = "block";
  } else {
    passwordFlag = true;
    document.getElementById("pass").style.border = "2px solid green";
    gg.style.display = "none";
  }
}
function checkTelephone() {
  let gg = document.getElementById("tele-warning");
  var name = document.getElementById("telephone");
  if (name.value.length < 3) {
    document.getElementById("telephone").style.border = "2px solid red";
    gg.style.display = "block";
  } else {
    telephoneFlag = true;
    document.getElementById("telephone").style.border = "2px solid green";
    gg.style.display = "none";
  }
}
function checkBio() {
  let gg = document.getElementById("bio-warning");
  var name = document.getElementById("bio");
  if (name.value.length < 3) {
    document.getElementById("bio").style.border = "2px solid red";
    gg.style.display = "block";
  } else {
    bioFlag = true;
    document.getElementById("bio").style.border = "2px solid green";
    gg.style.display = "none";
  }
}
function checkButton() {
  console.log(
    nameFlag,
    lastFlag,
    emailFlag,
    passwordFlag,
    telephoneFlag,
    bioFlag
  );
  if (
    nameFlag &&
    lastFlag &&
    emailFlag &&
    passwordFlag &&
    telephoneFlag &&
    bioFlag
  ) {
    document.getElementById("sub-btn").style.backgroundColor = "green";
  } else {
    document.getElementById("sub-btn").style.backgroundColor = "grey";
  }
}
