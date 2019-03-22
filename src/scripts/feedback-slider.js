export default (function() {

	new Vue({
		el: "#feedback-slider",
		components: {
		},
		data() {
			return {
				flickityOptions: {
					initialIndex: 3,
					prevNextButtons: true,
					pageDots: true,
					wrapAround: true,
					freeScroll: true
				}
			};
		}
	});
})();
