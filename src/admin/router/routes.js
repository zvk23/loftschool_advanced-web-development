export default [
	{
		path: "/login",
		component: () => import("components/pages/login.vue"),
        meta: {
            public: true
        }
	},
	{
		path: "/",
		component: () => import("components/pages/about.vue")
	},
	{
		path: "/works",
		component: () => import("components/pages/workPage.vue")
	},
	{
		path: "/reviews",
		component: () => import("components/pages/reviews.vue")
	}
];
