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
    todoElement.classList.add('card');

    const todoBody = document.createElement('div');
    todoBody.classList.add('card-body');

    const todoTitle = document.createElement('div');
    todoTitle.classList.add('card-title');
    todoTitle.textContent = todo.getTitle();
    todoBody.appendChild(todoTitle);

    const todoDescription = document.createElement('div');
    todoDescription.textContent = todo.getDescription();
    todoDescription.setAttribute('class', 'card-body');
    todoBody.appendChild(todoDescription);

    todoElement.appendChild(todoBody);
    return todoElement;
}

// Todo list component
const todoListComponent = (todoList) => {
    const list = document.createElement('div');
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