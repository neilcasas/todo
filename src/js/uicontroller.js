// This module contains the logic for displaying and manipulating DOM` elements
import { ToDoList, Project } from "./todolist";
import { Todo } from "./todo";
import { navbar } from './navbar.js';
import { todoListComponent } from './todoListComponent.js';

const mainElement = document.querySelector('main');

// Add todo button component
const addTodoButton = () => {
    const button = document.createElement('button');
    button.textContent = 'Add Todo';
    button.setAttribute('class', 'btn-primary');
    button.setAttribute('data-bs-toggle', 'add-todo-modal');
    mainElement.appendChild(button);
}

// Add todo modal component
const addTodoModal = () => {
    console.log('clicked addtodobutton')
    const modalID = 'add-todo-modal';
    const modalMainDiv = document.createElement('div');
    modalMainDiv.setAttribute('class', 'modal fade');
    modalMainDiv.setAttribute('id', `${modalID}`);

    const modalDialogDiv = document.createElement('div');
    modalDialogDiv.setAttribute('class', 'modal-dialog');

    const modalContentDiv = document.createElement('div');
    modalContentDiv.setAttribute('class', 'modal-content');

    modalContentDiv.appendChild(createModalHeaderDiv());
    modalContentDiv.appendChild(createModalBodyDiv());
    modalContentDiv.appendChild(createModalFooterDiv());

    modalDialogDiv.appendChild(modalContentDiv);
    modalMainDiv.appendChild(modalDialogDiv);


    function createModalHeaderDiv() {
        const modalHeaderDiv = document.createElement('div');
        modalHeaderDiv.classList.add('modal-header');

        const modalTitle = document.createElement('h1');
        modalTitle.setAttribute('class', 'modal-title fs-5');

        const modalCloseButton = document.createElement('button');
        modalCloseButton.classList.add('btn-close');
        modalCloseButton.setAttribute('data-bs-dismiss', `${modalID}`);

        modalHeaderDiv.appendChild(modalTitle);
        modalHeaderDiv.appendChild(modalCloseButton);

        return modalHeaderDiv;
    }

    function createModalBodyDiv() {
        const modalBodyDiv = document.createElement('div');
        modalBodyDiv.classList.add('modal-body');
        return modalBodyDiv;
    }

    function createModalFooterDiv() {
        const modalFooterDiv = document.createElement('div');

        const closeButton = document.createElement('button');
        closeButton.classList.add('btn');
        closeButton.classList.add('btn-secondary');
        closeButton.setAttribute('data-bs-dismiss', `${modalID}`);
        closeButton.textContent = 'Close';


        const saveButton = document.createElement('button');
        saveButton.classList.add('btn');
        saveButton.classList.add('btn-primary');
        saveButton.textContent = 'Close';

        modalFooterDiv.appendChild(closeButton);
        modalFooterDiv.appendChild(saveButton);

        return modalFooterDiv;
    }
    mainElement.appendChild(modalMainDiv);
}

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