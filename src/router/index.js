import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import bus from "../utils/bus.js";
import { store } from "../store/index.js";
// import createListView from "../views/CreateListView.js"; // HOC

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
			beforeEnter: (to, from, next) => {
				//console.log("to", to);
				//console.log("from", from);
				bus.$emit("start:spinner");
				store
					.dispatch("FETCH_LIST", to.name)
					.then(() => {
						next();
					})
					.catch((err) => {
						console.log(err);
					});
			},
			// component: createListView("NewsView"),
		},
		{
			path: "/ask",
			name: "ask",
			component: AskView,
			beforeEnter: (to, from, next) => {
				//console.log("to", to);
				//console.log("from", from);
				bus.$emit("start:spinner");
				store
					.dispatch("FETCH_LIST", to.name)
					.then(() => {
						next();
					})
					.catch((err) => {
						console.log(err);
					});
			},
			// component: createListView("AskView"),
		},
		{
			path: "/jobs",
			name: "jobs",
			component: JobsView,
			beforeEnter: (to, from, next) => {
				//console.log("to", to);
				//console.log("from", from);
				bus.$emit("start:spinner");
				store
					.dispatch("FETCH_LIST", to.name)
					.then(() => {
						next();
					})
					.catch((err) => {
						console.log(err);
					});
			},
			// component: createListView("JobsView"),
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
