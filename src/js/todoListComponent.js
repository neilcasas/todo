import { todoComponent } from './todoComponent.js'
import { createAddTodoButton, createAddTodoModal } from './addTodoModal.js';

// Todo list component
const createTodoListComponent = (todoListObject) => {
    const list = document.createElement('div');
    list.classList.add('todo-list');
    
    // Get list from todoListObject
    const todoList = todoListObject.list;
    
    if(todoList.length > 0) {
        for (let todo of todoList) {
            let todoElement = todoComponent(todo);
            list.appendChild(todoElement);
        }
    } else {
        const listEmptyDiv = document.createElement('div');
        listEmptyDiv.textContent = 'Theres nothing here. Click on the plus button to add a Todo.'
        list.appendChild(listEmptyDiv);
    }
    
    return list;
}

/* TODO: Create a function that the DOM element that contains the todo list, 
which adds checked todos to a "Complete" section. Optional: Add a navbar that 
organizes the todos per timeframe*/

export const todoListContentComponent = (todolist) => {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('container-fluid');

    // Create header div
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('row');
    headerDiv.innerHTML = 
    `
    <div class="col-auto">
        <h1>All Todos</h1>
    </div>
        <div class="col-auto d-flex align-items-center" id="add-todo-container">
    </div>
    `;

    // Create addTodoModal and button, append to div
    const addTodoButton = createAddTodoButton();
    const addTodoModal = createAddTodoModal(todolist);
    const addTodoContainer = headerDiv.querySelector('#add-todo-container');
    addTodoContainer.appendChild(addTodoButton);
    addTodoContainer.appendChild(addTodoModal);
    
    mainDiv.appendChild(headerDiv);

    // Create content div
    const contentDiv = document.createElement('div');   
    contentDiv.classList.add('row');

    const listDiv = createTodoListComponent(todolist);
    contentDiv.appendChild(listDiv);

    mainDiv.appendChild(contentDiv);


    return mainDiv;
}