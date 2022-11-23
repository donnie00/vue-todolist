const {createApp} = Vue;

createApp({
	data() {
		return {
			taskList: [
				{text: 'Testo task da stampare', done: false},
				{text: 'Testo task da stampare', done: true},
				{text: 'Testo task da stampare', done: false},
				{text: 'Testo task da stampare', done: true},
			],
		};
	},
	methods: {
		taskDone() {
			if (this.taskList.done) {
				this.taskList.done = false;
			} else {
				this.taskList.done = true;
			}
		},
	},
}).mount('#app');
