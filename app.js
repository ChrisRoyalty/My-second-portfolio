let menu = document.getElementById("menu");
let menuIcon = document.getElementById("menuIcon");
let menuDisplay = document.getElementById("menuDisplay");
let menuOpen = "false";
menu.addEventListener("click", function () {
  menuOpen = !menuOpen;
  if (menuOpen) {
    menuIcon.innerText = "X";
    menuIcon.style.fontSize = "30px";
    menuDisplay.style.display = "flex";
    // document.getElementById("intro").style.marginTop = "70vh";
  } else {
    menuIcon.innerText = "☰";
    menuDisplay.style.display = "none";
    // document.getElementById("intro").style.marginTop = "10px";
  }
});

let firstReview = document.getElementById("client01");
let fourthReview = document.getElementById("client04");
let reviewBtn1 = document.getElementById("review-btn1");
let reviewBtn2 = document.getElementById("review-btn2");

reviewBtn2.addEventListener("click", function () {
  firstReview.style.display = "none";
  fourthReview.style.display = "flex";
});
reviewBtn1.addEventListener("click", function () {
  firstReview.style.display = "flex";
  fourthReview.style.display = "none";
});
