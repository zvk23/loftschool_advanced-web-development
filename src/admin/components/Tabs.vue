<template lang="pug">
	.tabs
		.container.tabs__container
			ul.tabs__list
				router-link(
					v-for="tab in tabs"
					tag="li"
					:to="tab.href"
					class="tabs__item"
					exact-active-class="is-active"
				) {{tab.title}}
</template>

<script>
export default {
	components: {
	},
	data() {
		return {
			tabs: [
				{
					title: "Обо мне",
					href: "/"
				},
				{
					title: "Отзывы",
					href: "/reviews"
				},
				{
					title: "Работы",
					href: "/works"
				}
			]
		};
	}
};
</script>

<style lang="postcss" scoped>
</style>


