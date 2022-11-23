const {createApp} = Vue;

createApp({
	data() {
		return {
			taskList: [
				{
					text: 'Testo task da stampare 1',
					done: false,
				},
				{text: 'Testo task da stampare 2', done: true},
				{text: 'Testo task da stampare 3', done: true},
				{text: 'Testo task da stampare 4', done: false},
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
			const newText = this.newTaskData.text;

			if (newText === '') {
				alert('Inserire del testo perima di aggiungere la task');
			} else {
				this.taskList.push({text: newText});
			}

			this.newTaskData.text = '';
		},

		deleteAll() {
			const del = confirm('Sicuro di voler eliminare tutte le task?');
			if (del) {
				this.taskList.splice(0, this.taskList.length);
			}
		},
	},
}).mount('#app');
