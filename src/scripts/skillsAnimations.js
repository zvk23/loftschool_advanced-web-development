let skillsAnimation = (function() {
	let svgSection = document.querySelector(".skills-container"),
		windowMargin = window.innerHeight,
		svgPos = svgSection.getBoundingClientRect().top,
		skillsItems = Array.prototype.slice.call(document.querySelectorAll(".js-skill-circle .skills__circle--above")),
		fuse = true;

	return {
		animate: function(wScroll) {
			let startAnimate = wScroll - svgPos + windowMargin;
			

			if (startAnimate > 0 && fuse) {
				fuse = !fuse;

				skillsItems.forEach(skill => {
						const neededOffset = parseInt(window.getComputedStyle(skill).strokeDashoffset);

						let currentOffset = -1;

						console.log('NeeedOffset', neededOffset);

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