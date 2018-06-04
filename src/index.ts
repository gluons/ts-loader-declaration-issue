import Vue, { VueConstructor } from 'vue';

import Hello from './components/Hello';

declare global {
	interface Window {
		Vue: VueConstructor<Vue>
	}
}

function install(vue: VueConstructor<Vue>) {
	vue.component('Hello', Hello);
}

if ((typeof window !== 'undefined') && window.Vue) {
	install(window.Vue);
}

export default {
	install
}
