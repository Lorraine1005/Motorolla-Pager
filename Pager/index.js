let phoneEl = document.getElementById("phone-display-el");
let pageEl = document.getElementById("main-display-el");
let beat = new Audio("/path/to/my/beat.mp3");

//DIAL FUNCTIONS
function addnumber() {
  phoneEl.textContent += event.target.textContent;
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
