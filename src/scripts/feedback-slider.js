import Flickity from "vue-flickity";
import Vue from "vue";

new Vue({
	el: "#feed-slider",
	template: "#feedback-slider",
	components: {
		Flickity
	},
	data() {
		return {
			desktop: window.matchMedia("(min-width: 768px)").matches,
			flickityOptions: {
				prevNextButtons: false,
				pageDots: false,
                cellClass: '.reviews__slider-item',
				wrapAround: false,
				groupCells: 1
			}
		};
	},
	methods: {
		next() {
			this.$refs.flickity.next();
		},

		previous() {
			this.$refs.flickity.previous();
		},
		setFlickityGroupCells() {
			this.flickityOptions.groupCells = this.desktop == true ? 2 : 1;
		},
	},
	created() {
		this.setFlickityGroupCells();
	}
});
