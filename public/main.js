let checkbox = document.querySelector("input[name=mode]");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});

// first card
document.getElementById("button1").addEventListener("click", function () {
  document.querySelector(".bg-modal1").style.display = "flex";
});

document.querySelector(".close1").addEventListener("click", function () {
  document.querySelector(".bg-modal1").style.display = "none";
});

// second card
document.getElementById("button2").addEventListener("click", function () {
  document.querySelector(".bg-modal2").style.display = "flex";
});

document.querySelector(".close2").addEventListener("click", function () {
  document.querySelector(".bg-modal2").style.display = "none";
});

// third card
document.getElementById("button3").addEventListener("click", function () {
  document.querySelector(".bg-modal3").style.display = "flex";
});

document.querySelector(".close3").addEventListener("click", function () {
  document.querySelector(".bg-modal3").style.display = "none";
});

// fourth card
document.getElementById("button4").addEventListener("click", function () {
  document.querySelector(".bg-modal4").style.display = "flex";
});

document.querySelector(".close4").addEventListener("click", function () {
  document.querySelector(".bg-modal4").style.display = "none";
});

// fifth card
document.getElementById("button5").addEventListener("click", function () {
  document.querySelector(".bg-modal5").style.display = "flex";
});

document.querySelector(".close5").addEventListener("click", function () {
  document.querySelector(".bg-modal5").style.display = "none";
});

// sixth card
document.getElementById("button6").addEventListener("click", function () {
  document.querySelector(".bg-modal6").style.display = "flex";
});

document.querySelector(".close6").addEventListener("click", function () {
  document.querySelector(".bg-modal6").style.display = "none";
});

// seventh card
document.getElementById("button7").addEventListener("click", function () {
  document.querySelector(".bg-modal7").style.display = "flex";
});

document.querySelector(".close7").addEventListener("click", function () {
  document.querySelector(".bg-modal7").style.display = "none";
});

// eigth card
document.getElementById("button8").addEventListener("click", function () {
  document.querySelector(".bg-modal8").style.display = "flex";
});

document.querySelector(".close8").addEventListener("click", function () {
  document.querySelector(".bg-modal8").style.display = "none";
});

// ninth card
document.getElementById("button9").addEventListener("click", function () {
  document.querySelector(".bg-modal9").style.display = "flex";
});

document.querySelector(".close9").addEventListener("click", function () {
  document.querySelector(".bg-modal9").style.display = "none";
});

// tenth card
document.getElementById("button10").addEventListener("click", function () {
  document.querySelector(".bg-modal10").style.display = "flex";
});

document.querySelector(".close10").addEventListener("click", function () {
  document.querySelector(".bg-modal10").style.display = "none";
});

// eleventh card
document.getElementById("button11").addEventListener("click", function () {
  document.querySelector(".bg-modal11").style.display = "flex";
});

document.querySelector(".close11").addEventListener("click", function () {
  document.querySelector(".bg-modal11").style.display = "none";
});

//twelfth card
document.getElementById("button12").addEventListener("click", function () {
  document.querySelector(".bg-modal12").style.display = "flex";
});

document.querySelector(".close12").addEventListener("click", function () {
  document.querySelector(".bg-modal12").style.display = "none";
});
