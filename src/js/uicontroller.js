// This module contains the logic for displaying and manipulating DOM` elements
import { ToDoList, Project } from "./todolist";
import { Todo } from "./todo";
import { navbar } from './navbar.js';
import { todoListComponent } from './todoListComponent.js';
import { addTodoButton, addTodoModal } from "./addtodomodal.js";

const mainElement = document.querySelector('main');


// View all todos within a project


// View all projects
// Expand a todo
// Delete a todo

export default function loadPage() {
    navbar();
    addTodoButton();
    addTodoModal();
    let todo1 = new Todo('study webdev', 'study react', 'today', 'important');
    let todo2 = new Todo('bake cookies', `bake mom's recipe`, 'today', 'not that important');

    const todoList = new ToDoList();
    todoList.addTodo(todo1);
    todoList.addTodo(todo2);

    todoListComponent(todoList);
}