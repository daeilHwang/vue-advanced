<template>
	<div id="app">
		<tool-bar></tool-bar>
		<transition name="fade">
			<router-view />
		</transition>
		<Spinner :loading="loadingStatus" />
	</div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/VueSpinner.vue";
import bus from "./utils/bus.js";

export default {
	components: {
		ToolBar,
		Spinner,
	},
	data: function () {
		return {
			loadingStatus: false,
		};
	},
	created() {
		bus.$on("start:spinner", this.startSpinner);
		bus.$on("end:spinner", this.endSpinner);
	},
	beforeDestroy() {
		bus.$off("start:spinner", this.startSpinner);
		bus.$off("end:spinner", this.endSpinner);
	},
	methods: {
		startSpinner() {
			this.loadingStatus = true;
		},
		endSpinner() {
			this.loadingStatus = false;
		},
	},
};
</script>

<style>
body {
	padding: 0;
	margin: 0;
}

a {
	color: #34495e;
	text-decoration: none;
}
a.router-link-exact-active {
	text-decoration: underline;
}
a:hover {
	color: #42b883;
	text-decoration: underline;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
