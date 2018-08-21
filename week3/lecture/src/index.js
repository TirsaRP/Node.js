'use strict';

const Express = require('express');

// import our CRUD actions
const {
  createTodo,
  readTodos,
  updateTodo,
  deleteTodo,
  
  markAsDone,
  markAsNotDone,
  readTodo,
  clearTodos
} = require('./actions');

//requires todo.js
const Todo = require('./todo');

//sets up port, file and sets TODO_SLUG = to string 'todos'
const FILENAME  = 'todos.json';
const PORT      = 3000;
const TODO_SLUG = 'todos';

//instance of a class. (instaniates)
const todo = new Todo(FILENAME);
//sets up function to access Express methods
const app = new Express();

// Use built-in JSON middleware to automatically parse JSON
app.use(Express.json());

app.post(`/${TODO_SLUG}`,       createTodo.bind(null, todo));
app.get(`/${TODO_SLUG}`,        readTodos.bind(null, todo));
app.put(`/${TODO_SLUG}/:id`,    updateTodo.bind(null, todo));
app.delete(`/${TODO_SLUG}/:id`, deleteTodo.bind(null, todo));

app.delete(`/${TODO_SLUG}`,     markAsNotDone.bind(null, todo));  
app.post(`/${TODO_SLUG}`,       markAsDone.bind(null, todo));
app.get(`/${TODO_SLUG}`,        readTodo.bind(null, todo));
app.delete(`/${TODO_SLUG}/:id`, clearTodos.bind(null, todo));

app.listen(PORT, error => {
  if (error)
    return console.error(error);

  console.log(`Server started on http://localhost:${PORT}`);
});
