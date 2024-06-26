// This module contains the logic for displaying and manipulating DOM elements
import { ToDoList, Project } from "./todolist";
import { Todo } from "./todo";


const bodyElement = document.querySelector('body');
const contentElement = document.querySelector('#main-container')


// Navbar component
const navbar = () => {
    const nav = document.createElement('nav');
    nav.classList.add('navbar');
    const text = document.createElement('h1');
    text.textContent = 'Today';
    nav.appendChild(text);
    return nav;
}

// Todo component
const todoComponent = (todo) => {
    const todoElement = document.createElement('div');
    todoElement.classList.add('card');

    const todoBody = document.createElement('div');
    todoBody.classList.add('card-body');

    const todoTitle = document.createElement('div');
    todoTitle.classList.add('card-title');
    todoTitle.textContent = todo.getTitle();
    todoBody.appendChild(todoTitle);

    const todoDescription = todo.getDescription();
    todoBody.textContent = todoDescription;

    return todoElement;
}

// View all todos within a project


// View all projects
// Expand a todo
// Delete a todo


export default function loadPage() {
    bodyElement.appendChild(navbar())
}