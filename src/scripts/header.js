export default (function changeHeader() {
	let 
		header = document.querySelector(".header"),
		headerPos = header.getBoundingClientRect().top,
		headerHeight = header.offsetHeight;

	if (window.scrollY > headerPos + headerHeight) {
		document.body.classList.add("is-fixed-header");
	} else {
		document.body.classList.remove("is-fixed-header");
	}

	window.addEventListener("wheel", e => {
		let offset = window.scrollY;

		if (offset > 100) {
			document.body.classList.add("is-fixed-header");
		} else {
			document.body.classList.remove("is-fixed-header");
		}
	});
})();
