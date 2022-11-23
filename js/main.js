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
			newTaskData: {text: '', done: false},
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
		removeItem(index) {
			this.taskList.splice(index, 1);
		},
		addNewTask() {
			this.taskList.push({...this.newTaskData});
		},
	},
}).mount('#app');
