/*The TodoList class should have methods to add tasks, 
mark tasks as complete, and list all tasks*/

class TodoList {
    constructor() {
        this.tasks = []
    }

    addTask(text) {
        this.tasks.push({task: text, completed: false})
    }

    markTask(taskIndex) {
        if (this.tasks[taskIndex]) {
            this.tasks[taskIndex].completed = true;
        }
    }

    getAllTasks() {
        console.log('Tasks:');
        this.tasks.forEach((task) => {
            console.log(`${task.task} - ${task.completed ? 'Completed' : 'Incomplete'}`);
        });
    }
}

export default TodoList