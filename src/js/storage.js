// This module contains the logic for storing the objects within localStorage
import { Todo } from "./todo";
import loadPage from "./uicontroller";

function saveTodo(todolist) {
    // Take all values from form
    const title = document.getElementById('todo-title').value || null;
    const description = document.getElementById('todo-description').value || null;
    const date = document.getElementById('todo-date').value || null;
    const priority = document.getElementById('todo-priority').value || null;

    // Create new todo object
    let todoCounter = todolist.length || 0;
    const newTodo = new Todo(todoCounter++, title, description, date, priority);

    // Place todo object in todolist array
    todolist.push(newTodo);

    // JSONify todolist array and place inside local storage
    localStorage.setItem('todolist', JSON.stringify(todolist));

    // Reload todo list content with new todo
    loadPage();
}

function deleteTodo(todo) {
    
}

// Get main todo
function getTodos() {
    return JSON.parse(localStorage.getItem('todolist')) || [];
}

export { saveTodo, getTodos }