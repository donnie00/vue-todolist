const {createApp} = Vue;

createApp({
	data() {
		return {
			taskList: [
				{text: 'Testo task da stampare 1', done: false},
				{text: 'Testo task da stampare 2', done: true},
				{text: 'Testo task da stampare 3', done: false},
				{text: 'Testo task da stampare 4', done: true},
			],
		};
	},
	methods: {},
}).mount('#app');
