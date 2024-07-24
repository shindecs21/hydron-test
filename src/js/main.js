// Import our custom CSS
import "../scss/style.scss";

import * as bootstrap from "../../node_modules/bootstrap"; // Import all of Bootstrap's JS
import bsUtil from "../../node_modules/bootstrap/js/dist/util/index.js";

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
  /*   scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  }, */
  slideToClickedSlide: true,
  speed: 700,
  /*autoplay: {
    delay: 4000,
    pauseOnMouseEnter: true,
  }, */
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

console.log(" startted my firs js line !!!!!!!!");
console.log(" test getUID" + bsUtil.getUID("2ss"));

const navBar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 70) navBar.classList.add("sticky-nav");
  else navBar.classList.remove("sticky-nav");
});

/* import navHtml from "../navbar.html?render&buttonText=Star";
document.getElementById("navPlaceHolder").innerHTML = navHtml; */
