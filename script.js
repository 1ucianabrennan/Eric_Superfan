var Cartman = document.getElementById("Cartman");
var submit = document.getElementById("submit");
var h1 = document.getElementById("hat1");
var hb1 = false;
var s1 = document.getElementById("shirt1");
var sb1 = false;
var p1 = document.getElementById("pants1");
var pb1 = false;
var h2 = document.getElementById("hat2");
var hb2 = false;
var s2 = document.getElementById("shirt2");
var sb2 = false;
var p2 = document.getElementById("pants2");
var pb2 = false;
var song_ = document.getElementById("song");
var song2 = document.getElementById("song2");
var song3 = document.getElementById("song3");
var song4 = document.getElementById("song4");
var song5 = document.getElementById("song5");
var song6 = document.getElementById("song6");
var song7 = document.getElementById("song7");
var song8 = document.getElementById("song8");

function firstHat() {
  h1.classList.add("bright");
  h2.classList.add("display-none");
  hb1 = true;
}
function firstShirt() {
  s1.classList.add("bright");
  s2.classList.add("display-none");
  sb1 = true;
}
function firstPants() {
  p1.classList.add("bright");
  p2.classList.add("display-none");
  pb1 = true;
}

function secondHat() {
  h2.classList.add("bright");
  h1.classList.add("display-none");
  hb2 = true;
}
function secondShirt() {
  s2.classList.add("bright");
  s1.classList.add("display-none");
  sb2 = true;
}
function secondPants() {
  p2.classList.add("bright");
  p1.classList.add("display-none");
  pb2 = true;
}

function done() {
  if (hb1 == true && sb1 == true && pb1 == true) {
    Cartman.src = "images/Combo/Cartman_1.png";
    song4.play("images/SouthParkTheme.mp3");
  } else if (hb2 == true && sb2 == true && pb2 == true) {
    Cartman.src = "images/Combo/Cartman_2.png";
    song_.play("images/Eric_Cartman_BoysALiar.mp3");
  } else if (hb1 == true && sb2 == true && pb2 == true) {
    Cartman.src = "images/Combo/Hat1-Top2-Pant2.png";
    song2.play("images/pokerface.mp3");
  } else if (hb2 == true && sb1 == true && pb1 == true) {
    Cartman.src = "images/Combo/Hands-Shirt1-Pant1.png";
    song3.play("images/BringMeBackToLife.mp3");
  } else if (hb1 == true && sb2 == true && pb1 == true) {
    Cartman.src = "images/Combo/Hat1-Shirt2-Pant1.png";
    song5.play("images/Cupid.mp3");
  } else if (hb2 == true && sb1 == true && pb2 == true) {
    Cartman.src = "images/Combo/Hands-Shirt1-Pant2.png";
    song6.play("images/SmellsLikeTeenSpirit.mp3");
  } else if (hb1 == true && sb1 == true && pb2 == true) {
    Cartman.src = "images/Combo/Hat-Shirt1-Pant2.png";
    song7.play("images/Everlong.mp3");
  } else if (hb2 == true && sb2 == true && pb1 == true) {
    Cartman.src = "images/Combo/Hands-Shirt2-Pant1.png";
    song8.play("images/Creep.mp3");
  } else {
    console.log("nope");
  }
}

function restartAll() {
  Cartman.src = "images/Getting_Ready.png";

  h1.classList.remove("bright");
  h2.classList.remove("display-none");
  hb1 = false;
  s1.classList.remove("bright");
  s2.classList.remove("display-none");
  sb1 = false;
  p1.classList.remove("bright");
  p2.classList.remove("display-none");
  pb1 = false;
  h2.classList.remove("bright");
  h1.classList.remove("display-none");
  hb2 = false;
  s2.classList.remove("bright");
  s1.classList.remove("display-none");
  sb2 = false;
  p2.classList.remove("bright");
  p1.classList.remove("display-none");
  pb2 = false;

  song4.pause("images/SouthParkTheme.mp3");
  song4.currentTime = 0;
  song_.pause("images/Eric_Cartman_BoysALiar.mp3");
  song_.currentTime = 0;
  song2.pause("images/pokerface.mp3");
  song2.currentTime = 0;
  song3.pause("images/BringMeBackToLife.mp3");
  song3.currentTime = 0;
  song5.pause("images/Cupid.mp3");
  song5.currentTime = 0;
  song6.pause("images/SmellsLikeTeenSpirit.mp3");
  song6.currentTime = 0;
  song7.pause("images/Everlong.mp3");
  song7.currentTime = 0;
  song8.pause("images/Creep.mp3");
  song8.currentTime = 0;
}
