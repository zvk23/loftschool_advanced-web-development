import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
	require("file-loader!./index.pug");
}

import "./scripts/header";
import "./scripts/skills";
import "./scripts/portfolio-slider";
import "./scripts/feedback-slider";
import anchorsLinks from "./scripts/anchorLinks";
import menuScript from "./scripts/toggleNavPopup";
import parallax from "./scripts/parallax.js";
import skillsAnimation from "./scripts/skillsAnimations";

window.addEventListener('load', () => {
  menuScript.init();
  anchorsLinks.init();
})

let 
  navBtn = document.querySelector(".header__nav-btn"),
  mainParallaxItems = Array.prototype.slice.call(document.querySelectorAll(".parralax-scene--main .js-parallax-item")),
  buddaParallaxItems = Array.prototype.slice.call(document.querySelectorAll(".parralax-scene--budda .js-parallax-item")),
  buddaOffset = document.querySelector('#budda-section').offsetTop,
  buddaMargin = 160;

  window.addEventListener("wheel", () => {
	let 
    scroll = window.pageYOffset;

  // main parallax
	if (scroll < window.innerHeight) {
		mainParallaxItems.forEach(block => {
			let accel = block.dataset.speed;

			parallax.strafe(block, scroll, accel);
		});
	}

  // skilss animate
  skillsAnimation.animate(scroll);

  // budda parallax
  if (buddaOffset <= scroll) {
    buddaParallaxItems.forEach(block => {
      let 
        accel = block.dataset.speed,
        buddaScroll = scroll - buddaOffset;

      parallax.strafe(block, buddaScroll, accel)
    })
  }
});