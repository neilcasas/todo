// This module contains the logic for displaying and manipulating DOM elements
import { ToDoList, Project } from "./todolist";
import { Todo } from "./todo";
import { navbar } from './navbar.js';
import { todoListComponent } from './todoListComponent.js';

const mainElement = document.querySelector('main');

// Add todo button component
const addTodoButton = () => {
    const button = document.createElement('button');
    button.textContent('Add Todo');
    button.setAttribute('class', 'btn-primary');
}

// Add todo modal component
const addTodoModal = () => {
    const modalMainDiv = document.createElement('div');
    modalMainDiv.setAttribute('class', 'modal fade');
    modalMainDiv.setAttribute('id', 'add-todo-modal');

    const modalDialogDiv = document.createElement('div');
    modalDialogDiv.setAttribute('class', 'modal-dialog');

    const modalContentDiv = document.createElement('div');
    modalContentDiv.setAttribute('class', 'modal-content');

    const modalHeaderDiv = document.createElement('div');
    modalHeaderDiv.setAttribute('modal-header');

    const modalTitle = document.createElement('h1');
    modalTitle.setAttribute('class', 'modal-title fs-5');

    const modalCloseButton = document.createElement('button');
    modalCloseButton.setAttribute('class', 'btn-close');
    modalCloseButton.setAttribute('data-bs-dismiss', 'add-todo-modal');

    modalHeaderDiv.appendChild(modalTitle);
    modalHeaderDiv.appendChild(modalCloseButton);
}

// View all todos within a project


// View all projects
// Expand a todo
// Delete a todo


export default function loadPage() {
    navbar();

    let todo1 = new Todo('study webdev', 'study react', 'today', 'important');
    let todo2 = new Todo('bake cookies', `bake mom's recipe`, 'today', 'not that important');

    const todoList = new ToDoList();
    todoList.addTodo(todo1);
    todoList.addTodo(todo2);

    todoListComponent(todoList);
}