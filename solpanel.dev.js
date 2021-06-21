"use strict";

function setUsage(value) {
  // we push value received inside the usage results
  // tempElmt.firstElementChild.innerText = value;
  // document.getElementById("teho").innerHTML = "Paragraph changed!";
  // onchange event tracking for updating usage visibility
  document.getElementById("kwh").innerHTML = value; // let's change the value in the usage div

  if (value < 10999) {
    document.getElementById("kpl").innerHTML = "8";
    document.querySelector('input[id=panels]').value = 8;
  } else if (value > 10999) {
    document.getElementById("kpl").innerHTML = "10";
    document.querySelector('input[id=panels]').value = 10;
  } else if (value >= 13999) {
    document.getElementById("kpl").innerHTML = "12";
    document.querySelector('input[id=panels]').value = 12;
  } else if (value > 15999) {
    document.getElementById("kpl").innerHTML = "14";
    document.querySelector('input[id=panels]').value = 14;
  } else if (value > 17999) {
    document.getElementById("kpl").innerHTML = "16";
    document.querySelector('input[id=panels]').value = 16;
  } else if (value > 20999) {
    document.getElementById("kpl").innerHTML = "18";
    document.querySelector('input[id=panels]').value = 18;
  } else if (value > 22999) {
    document.getElementById("kpl").innerHTML = "20";
    document.querySelector('input[id=panels]').value = 20;
  } else if (value > 24999) {
    document.getElementById("kpl").innerHTML = "22";
    document.querySelector('input[id=panels]').value = 22;
  } else if (value > 27999) {
    document.getElementById("kpl").innerHTML = "24";
    document.querySelector('input[id=panels]').value = 24;
  } else if (value > 29999) {
    document.getElementById("kpl").innerHTML = "26";
    document.querySelector('input[id=panels]').value = 26;
  } else if (value > 32999) {
    document.getElementById("kpl").innerHTML = "28";
    document.querySelector('input[id=panels]').value = 28;
  } else if (value > 34999) {
    document.getElementById("kpl").innerHTML = "30";
    document.querySelector('input[id=panels]').value = 30;
  } else if (value > 36999) {
    document.getElementById("kpl").innerHTML = "32";
    document.querySelector('input[id=panels]').value = 32;
  } else {
    document.getElementById("kpl").innerHTML = "34";
    document.querySelector('input[id=panels]').value = 34;
  }
}

;