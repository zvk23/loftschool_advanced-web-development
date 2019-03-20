export default (function changeHeader() {
	let 
		header = document.querySelector(".header"),
		headerPos = header.getBoundingClientRect().top,
		headerHeight = header.offsetHeight;

	if (window.scrollY > headerPos + headerHeight) {
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
