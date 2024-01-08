import TodoList from './todoApp.mjs'

const todo = new TodoList()

todo.addTask('Buy books')
todo.addTask('Read books')
todo.addTask('Write book')


todo.markTask(0)
todo.getAllTasks()