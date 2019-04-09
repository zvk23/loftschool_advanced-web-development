import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/login",
		component: () => import("components/pages/login.vue"),
	},
    {
		path: "/",
		component: () => import("components/pages/about.vue"),
	},
    {
		path: "/works",
		component: () => import("components/pages/workPage.vue"),
	},
    {
		path: "/reviews",
		component: () => import("components/pages/reviews.vue"),
	}
];

export default new VueRouter({ routes });;
