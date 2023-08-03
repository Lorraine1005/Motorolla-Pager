let phoneEl = document.getElementById("phone-display-el");
let pageEl = document.getElementById("main-display-el");
let beat = new Audio("/path/to/my/beat.mp3");

//DIAL FUNCTIONS
function number1() {
  phoneEl.textContent += "1";
}
function number2() {
  phoneEl.textContent += "2";
}

function number3() {
  phoneEl.textContent += "3";
}
function number4() {
  phoneEl.textContent += "4";
}
function number5() {
  phoneEl.textContent += "5";
}

function number6() {
  phoneEl.textContent += "6";
}

function number7() {
  phoneEl.textContent += "7";
}

function number8() {
  phoneEl.textContent += "8";
}
function number9() {
  phoneEl.textContent += "9";
}

function number0() {
  phoneEl.textContent += "0";
}

function numberAsterick() {
  phoneEl.textContent += "*";
}

function numberHash() {
  phoneEl.textContent += "#";
}

//RESET BUTTON
function resetPhone() {
  phoneEl.textContent = "";
}
// SEND BUTTON
function sendPage() {
  pageEl.textContent = phoneEl.textContent;
  phoneEl.textContent = "";
  let beat = new Audio("sound/moto.mp3");
  beat.play();
}
