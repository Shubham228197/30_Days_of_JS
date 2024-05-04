let nameFlag = false;
let lastFlag = false;
let emailFlag = false;
let passwordFlag = false;
let telephoneFlag = false;
let bioFlag = false;
function onSubmit() {
  checkFirstName(/[A-Za-z]{3,}/gi);
  checkLastName(/[A-Za-z]{3,}/gi);
  checkEmail(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);
  checkPassword(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/);
  checkTelephone(/^(?:\d{11}|[\d]{3}-[\d]{3}-\d{4})$/);
  // as bio can be anything so no particular regex is used
  checkBio();
  checkButton();
}
function checkFirstName(pattern) {
  const warningDiv = document.getElementById("fname-warning");
  const firstName = document.getElementById("fname");
  if (!pattern.test(firstName.value)) {
    failedColor(firstName, warningDiv);
  } else {
    nameFlag = true;
    successColor(firstName, warningDiv);
  }
}
function checkLastName(pattern) {
  const warningDiv = document.getElementById("lname-warning");
  const lastName = document.getElementById("lname");
  if (!pattern.test(lastName.value)) {
    failedColor(lastName, warningDiv);
  } else {
    lastFlag = true;
    successColor(lastName, warningDiv);
  }
}
function checkEmail(pattern) {
  const warningDiv = document.getElementById("email-warning");
  const Email = document.getElementById("e-mail");
  if (!pattern.test(Email.value)) {
    failedColor(Email, warningDiv);
  } else {
    emailFlag = true;
    successColor(Email, warningDiv);
  }
}
function checkPassword(pattern) {
  const warningDiv = document.getElementById("passcode-warning");
  const passcode = document.getElementById("pass");
  if (!pattern.test(passcode.value)) {
    failedColor(passcode, warningDiv);
  } else {
    passwordFlag = true;
    successColor(passcode, warningDiv);
  }
}
function checkTelephone(pattern) {
  const warningDiv = document.getElementById("tele-warning");
  const phoneNumber = document.getElementById("telephone");
  if (!pattern.test(phoneNumber.value)) {
    failedColor(phoneNumber, warningDiv);
  } else {
    telephoneFlag = true;
    successColor(phoneNumber, warningDiv);
  }
}
function checkBio() {
  const warningDiv = document.getElementById("bio-warning");
  const bioData = document.getElementById("bio");
  if (bioData.value.length < 3) {
    failedColor(bioData, warningDiv);
  } else {
    bioFlag = true;
    successColor(bioData, warningDiv);
  }
}
function checkButton() {
  const submitButtonColor = document.getElementById("sub-btn");
  // if all input are verified than change color
  if (
    nameFlag &&
    lastFlag &&
    emailFlag &&
    passwordFlag &&
    telephoneFlag &&
    bioFlag
  ) {
    submitButtonColor.style.backgroundColor = "green";
  } else {
    submitButtonColor.style.backgroundColor = "grey";
  }
}
function successColor(inputBox, warningDiv) {
  inputBox.style.border = "2px solid green";
  warningDiv.style.display = "none";
}

function failedColor(inputBox, warningDiv) {
  inputBox.style.border = "2px solid red";
  warningDiv.style.display = "block";
}
