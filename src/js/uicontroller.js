// This module contains the logic for displaying and manipulating DOM elements
import { ToDoList, Project } from "./todolist";
import { Todo } from "./todo";


const mainElement = document.querySelector('main');

// Navbar component
const navbar = () => {
    const headerElement = document.querySelector('header');
    const nav = document.createElement('nav');
    nav.classList.add('navbar');
    const text = document.createElement('h1');
    text.textContent = 'Today';
    nav.appendChild(text);
    headerElement.appendChild(nav);
}

// Todo component
const todoComponent = (todo) => {
    const todoElement = document.createElement('div');
    todoElement.setAttribute('class', 'todo');

    const todoBody = document.createElement('div');
    todoBody.setAttribute('class', 'todo-body');

    const todoCheck = document.createElement('input');
    todoCheck.setAttribute('type', 'checkbox');
    todoBody.appendChild(todoCheck);

    const todoTitle = document.createElement('div');
    todoTitle.textContent = todo.getTitle();
    todoBody.appendChild(todoTitle);

    todoElement.appendChild(todoBody);
    return todoElement;
}

// Todo list component
const todoListComponent = (todoList) => {
    const list = document.createElement('div');
    list.setAttribute('class', 'todo-list');
    for (let todo of todoList) {
        let todoElement = todoComponent(todo);
        list.appendChild(todoElement);
    }
    mainElement.appendChild(list);
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