
var app = new Vue({
	el: "#app",
	data: {
		todo: ['finish work','MASTER']
	},
	methods: {
		addItem: function(item) {
			this.todo.push(item);
		}
	}
})
