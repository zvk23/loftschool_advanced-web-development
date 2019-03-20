let skillsAnimation = (function() {
	let svgSection = document.querySelector("#skills-container"),
		svgPaths = document.querySelectorAll(".js-skills-circle"),
		windowMargin = window.innerHeight,
		svgRect = svgSection.getBoundingClientRect(),
		svgPos = svgRect.top,
		skillsItems = Array.prototype.slice.call(document.querySelectorAll(".js-skill-circle .skills__circle--above")),
		fuse = true;


	return {
		animate: function(wScroll) {
			let startAnimate = wScroll - svgPos + windowMargin;

            console.log('startAnimate', startAnimate);

			if (startAnimate > 0 && fuse) {
				fuse = !fuse;
                console.log('true', true);

				skillsItems.forEach((skill, i) => {
					let dashArray = window.getComputedStyle(skill).strokeDashoffset,
						dashOffset = window.getComputedStyle(skill).strokeDashoffset,
						neededOffset = parseInt(dashOffset),
						currentOffset = 0;

					skill.style.strokeDashoffset = currentOffset;

						let anim = setInterval(() => {
							if (currentOffset < neededOffset) {
								currentOffset += 3;
								skill.style.strokeDashoffset = currentOffset;
							} else {
								clearInterval(anim);
							}
						}, 60);
				});
			}
		}
	};
})();

export default skillsAnimation;
