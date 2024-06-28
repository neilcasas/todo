// This module contains the logic for displaying and manipulating DOM` elements
import { ToDoList, Project } from "./todoList.js";
import { Todo } from "./todo";
import { navbar } from './navbar.js';
import { todoListComponent } from './todoListComponent.js';
import { addTodoButton, addTodoModal } from "./addTodoModal.js";

const mainElement = document.querySelector('main');


// View all todos within a project


// View all projects
// Expand a todo
// Delete a todo

export default function loadPage() {
    // everytime you load the page, it creates an array of todos from localstorage, parse the json and then displays it
    const todoList = JSON.parse(localStorage.getItem('todolist')) || [];
    todoListComponent(todoList);
    // navbar();
    addTodoButton();
    addTodoModal(todoList);
}

// create function for loading main todopage
// create function for loading all projects view page
// create function for loading displaying a project's todos

// there could be a template, a part of the page that remains static, and then a content div that is dynamic