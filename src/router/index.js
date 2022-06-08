import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: "history", // url에 #들어가는거 업애줌 해쉬값 이라고 부르네
	routes: [
		{
			path: "/",
			redirect: "/news",
		},
		{
			path: "/news", // url 주소
			name: "news",
			component: NewsView, // url 주소로 갔을 때 표시될 컴포넌트
		},
		{
			path: "/ask",
			name: "ask",
			component: AskView,
		},
		{
			path: "/jobs",
			name: "jobs",
			component: JobsView,
		},
		{
			path: "/user",
			component: UserView,
		},
		{
			path: "/user/:id",
			component: UserView,
		},
		{
			path: "/item/:id",
			component: ItemView,
		},
	],
});
