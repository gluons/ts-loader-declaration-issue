import Vue from 'vue';

export default Vue.extend({
	name: 'Hello',
	render(createElement) {
		return createElement('div', 'Hello, World!');
	}
});
