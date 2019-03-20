import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
	require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/header";
import parallax from "./scripts/parallax.js";

let navBtn = document.querySelector(".header__nav-btn");
let blocks = Array.prototype.slice.call(document.querySelectorAll(".js-parallax-item"));

window.addEventListener("wheel", () => {
	let 
    scroll = window.pageYOffset;

	if (scroll < window.innerHeight) {
		blocks.forEach(block => {
			let accel = block.dataset.speed;

			parallax.strafe(block, scroll, accel);
		});
	}
});

navBtn.addEventListener("click", function(e) {
	this.classList.toggle("is-active");
});
