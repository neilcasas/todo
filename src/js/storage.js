// This module contains the logic for storing the objects within localStorage
import { Todo } from "./todo";
import { TodoList } from "./todoList";
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
    todolist.addTodo(newTodo);

    // JSONify todolist array and place inside local storage
    localStorage.setItem('todolist', JSON.stringify(todolist));

    // Reload todo list content with new todo
    loadPage();
}

// Delete todo
function deleteTodo(todo, listname) {

    // Fetch todos
    const list = getTodos(listname);

    // 

}

// Get the main todolist or project given their name
function getTodos(listname) {
    const storedList = localStorage.getItem(`${listname}`);
    if (!storedList) {
        // Handle the case where the item does not exist in localStorage
        return new TodoList();
    }
    
    // If the list item is in localStorage
    const list = JSON.parse(storedList).list;
    return list ? new TodoList(list) : new TodoList();
}


export { saveTodo, getTodos }