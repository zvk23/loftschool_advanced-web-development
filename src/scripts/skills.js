function randomValue() {
	let skills = Array.prototype.slice.call(
			document.querySelectorAll(".skill")
		),
		skillLenght = skills.length;

	function getRandomInt(min, max, notZero) {
		const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
		return notZero && randomInt == 0 ? 1 : randomInt;
	}

	skills.forEach(function(item) {
		let circle = item.querySelector(".skills__circle--above"),
			randomValue = getRandomInt(0, 565, true);
        
        circle.setAttribute('stroke-dashoffset', randomValue)
	});
}

randomValue();
