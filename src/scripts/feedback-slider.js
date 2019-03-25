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
			flickityOptions: {
				prevNextButtons: false,
				pageDots: false,
                draggable: false,
                cellClass: '.reviews__slider-item'
			}
		};
	},

	methods: {
		next() {
			this.$refs.flickity.next();
		},

		previous() {
			this.$refs.flickity.previous();
		}
	}
});
