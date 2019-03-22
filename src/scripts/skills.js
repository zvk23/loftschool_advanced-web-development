import Vue from 'vue'


const skill = {
	template: '#skill',
	props: {
		title: String
	}
}

const skillRow = {
	template: '#skills-row',
	components: {
		skill
	},
	props: {
		skills: Object
	}
}

new Vue({
	el: '#skills-container',
	template: '#skills-block',
	components: {
		skillRow
	},
	data() {
		return {
			data: []
		}
	},
	created() {
		const data = require('../data/skills.json');

		this.data = data
	}
})