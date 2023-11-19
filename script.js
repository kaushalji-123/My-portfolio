"use strict";

const menuBtn = document.querySelector("#menuBtn");
const siteMenu = document.querySelector("#siteMenu");

// open / close menu
function toggleMenu() {
  menuBtn.classList.toggle("change");
  siteMenu.classList.toggle("shown");
  if (siteMenu.classList.contains("shown")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
}

menuBtn.addEventListener("click", toggleMenu);

// window height variable for styles
function setHeightVariable() {
  let vh = window.innerHeight * 0.01 - 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setHeightVariable();

window.addEventListener("resize", setHeightVariable);

// add loader to the site

window.addEventListener(
  "load", // when site is fully loaded
  function () {
    document.body.style.overflowY = "auto";
    var preloader = document.querySelector(".preloader");
    preloader.classList.add("preloader-finish"); // add class to the preloader
  }
);

d// This code controls the animation of text parts
document.addEventListener("DOMContentLoaded", function() {
  const textParts = document.querySelectorAll('.text-part');
  let delay = 0;

  textParts.forEach(function(part) {
    const text = part.textContent;
    part.textContent = ''; // Clear the text to show the typing effect

    setTimeout(function() {
      typeText(part, text);
    }, delay);

    delay += text.length * 80; // Adjust the delay as needed
  });
});

function typeText(element, text) {
  let count = 0;
  const typing = setInterval(() => {
    element.textContent += text[count];
    count++;
    if (count === text.length) {
      clearInterval(typing);
    }
  }, 80); // Adjust typing speed as needed
}

// var typed = new Typed(".auto-type",{
//   strings:["Software Developer","Web developer","React Devloper"],
//   typeSpeed: 150,
//   backSpeed: 150,
//   loop:true
// })
// const navbar = document.querySelector(".navbar");

// window.addEventListener("scroll", (e) => {
//   if (window.scrollY > window.innerHeight - 200) {
//     navbar.classList.add("navbar--shadow");
//   } else navbar.classList.remove("navbar--shadow");
// });
