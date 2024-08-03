// Import our custom CSS
import "../scss/style.scss";

import * as bootstrap from "../../node_modules/bootstrap"; // Import all of Bootstrap's JS
import bsUtil from "../../node_modules/bootstrap/js/dist/util/index.js";

const fslight = require("fslightbox");

const WOW = require("wow.js");
new WOW({ live: false, animateClass: "animate__animated" }).init();

import Swiper from "swiper/bundle";
import "swiper/css/bundle";
const swiper = new Swiper(".swiper", {
  //direction: "vertical",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  /*   scrollbar: {     el: ".swiper-scrollbar",     draggable: true,  }, */
  slideToClickedSlide: true,
  speed: 700,
  autoplay: {
    delay: 4000,
    pauseOnMouseEnter: true,
  },
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-30%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

console.log(" startted my firs js line !!!!!!!!");
console.log(" test getUID" + bsUtil.getUID("2ss"));

const navBar = document.querySelector(".navbar");
let goUpBtn = document.getElementById("btn-back-to-top");
window.addEventListener("scroll", () => {
  //if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
  if (window.scrollY >= 70) {
    navBar.classList.add("sticky-nav");
    goUpBtn.style.display = "block";
  } else {
    navBar.classList.remove("sticky-nav");
    goUpBtn.style.display = "none";
  }
});

goUpBtn.addEventListener("click", () => {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
});

/* import navHtml from "../navbar.html?render&buttonText=Star";
document.getElementById("navPlaceHolder").innerHTML = navHtml; */
