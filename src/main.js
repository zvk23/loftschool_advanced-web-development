import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/header";
import "./scripts/parallax";

let navBtn = document.querySelector('.header__nav-btn');

navBtn.addEventListener('click', function (e) {
  this.classList.toggle('is-active')
})