export default (function changeHeader() {
	let header = document.querySelector(".header");

	if (window.scrollY > 100) {
		header.classList.add("is-fixed");
	} else {
		header.classList.remove("is-fixed");
	}

	window.addEventListener("wheel", e => {
		let offset = window.scrollY;

		if (offset > 100) {
			header.classList.add("is-fixed");
		} else {
			header.classList.remove("is-fixed");
		}
	});
})();
