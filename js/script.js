"use strict";

// get required selectors

const navbar = document.querySelector(".navbar");
const menuTogglersContainer = document.querySelector(".menu-togglers");
const bxMenu = document.querySelector(".bx-menu");

// Show / hide menu

menuTogglersContainer.addEventListener("click", () => {
  navbar.classList.toggle("show-nav");
});

// Theme changing

const themeTogglers = document.querySelector(".theme-togglers");
const lightIcon = document.querySelector(".bxs-sun");
const darkIcon = document.querySelector(".bxs-moon");

var lightmode = localStorage.getItem("lightmode");

// darkmode function

const enableLightMode = () => {
  document.body.classList.add("lightmode");
  localStorage.setItem("lightmode", "enabled");

  //change theme styles
  lightIcon.style.display = "none";
  darkIcon.style.display = "block";
};

if (lightmode && lightmode === "enabled") {
  enableLightMode();
}

//Disable darkmode

const disableLightMode = () => {
  document.body.classList.remove("lightmode");
  localStorage.setItem("lightmode", null);

  lightIcon.style.display = "block";
  darkIcon.style.display = "none";
};

// Active / Deactive dark mode

themeTogglers.addEventListener("click", () => {
  lightmode = localStorage.getItem("lightmode");
  if (!lightmode || lightmode !== "enabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});

// Show / hide hero buttons
// delay before showing them

const heroButtonsContainer = document.querySelector(".hero-btns-container");

var delayTime = 1000;

heroButtonsContainer.style.transition = "opacity 1000ms";

setTimeout(() => {
  heroButtonsContainer.style.opacity = 1;
}, delayTime);
