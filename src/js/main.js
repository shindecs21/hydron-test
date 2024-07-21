// Import our custom CSS
import "../scss/style.scss";

// Import all of Bootstrap's JS

import * as bootstrap from "../../node_modules/bootstrap";
import bsUtil from "../../node_modules/bootstrap/js/dist/util/index.js";

console.log("startted my firs js line !!!!!!!!");
console.log(" test getUID" + bsUtil.getUID("2ss"));

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  console.log("adddding even tlisrtner!!!!!!!!!" + window.scrollY);
  if (window.scrollY > 30) navBar.classList.add("sticky-nav");
  else navBar.classList.remove("sticky-nav");
});
