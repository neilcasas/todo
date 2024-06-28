import { Todo } from "./todo.js";
import { TodoList } from "./todoList";
import { createTodoListComponent } from "./todoListComponent.js";


// Add todo button component
const createAddTodoButton = () => {
    const button = document.createElement('button');

    button.textContent = 'Add Todo';
    
    button.setAttribute('class', 'btn-primary');

    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#add-todo-modal');
    
    return button;
}

// Add todo modal component
const createAddTodoModal = (todolist) => {
    const modalID = 'add-todo-modal';
    const modalMainDiv = document.createElement('div');
    modalMainDiv.setAttribute('class', 'modal fade');
    modalMainDiv.setAttribute('id', `${modalID}`);
    modalMainDiv.setAttribute('tabindex', '-1');
    modalMainDiv.setAttribute('aria-labelledby', 'add-todo-modal');
    modalMainDiv.setAttribute('aria-hidden', 'true');

    const modalDialogDiv = document.createElement('div');
    modalDialogDiv.classList.add('modal-dialog');

    const modalContentDiv = document.createElement('div');
    modalContentDiv.classList.add('modal-content');

    // Put everything modal contents inside form
    const form = document.createElement('form');
    form.setAttribute('id', 'add-todo-form');

    form.appendChild(createModalHeaderDiv());
    form.appendChild(createModalBodyDiv());
    form.appendChild(createModalFooterDiv());

    modalContentDiv.appendChild(form);
    modalDialogDiv.appendChild(modalContentDiv);
    modalMainDiv.appendChild(modalDialogDiv);


    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    function createModalHeaderDiv() {
        const modalHeaderDiv = document.createElement('div');
        modalHeaderDiv.classList.add('modal-header');

        const modalTitle = document.createElement('h1');
        modalTitle.setAttribute('class', 'modal-title fs-5');
        modalTitle.textContent = 'Add Todo';

        const modalCloseButton = document.createElement('button');
        modalCloseButton.classList.add('btn-close');
        modalCloseButton.setAttribute('data-bs-dismiss', 'modal');
        modalCloseButton.setAttribute('aria-label', 'Close');

        modalHeaderDiv.appendChild(modalTitle);
        modalHeaderDiv.appendChild(modalCloseButton);

        return modalHeaderDiv;
    }

    function createModalBodyDiv() {
        const modalBodyDiv = document.createElement('div');
        modalBodyDiv.classList.add('modal-body');

        // Define and immediately invoke form input functions
        (function titleInput() {
            const formDiv = document.createElement('div');
            formDiv.classList.add('mb-3');

            const label = document.createElement('label');
            label.classList.add('form-label');
            label.textContent = 'What are you planning to do?'
            label.setAttribute('for', 'todo-title');
            formDiv.appendChild(label);

            const input = document.createElement('input');
            input.classList.add('form-control');
            input.setAttribute('type', 'text');
            input.id = 'todo-title';
            input.setAttribute('placeholder', 'e.g. Walk my dogs');
            formDiv.appendChild(input);

            modalBodyDiv.appendChild(formDiv);
        })();

        (function descriptionInput() {
            const formDiv = document.createElement('div');
            formDiv.classList.add('mb-3');

            const label = document.createElement('label');
            label.classList.add('form-label');
            label.textContent = 'Description'
            label.setAttribute('for', 'todo-description');
            formDiv.appendChild(label);

            const input = document.createElement('textarea');
            input.classList.add('form-control');
            input.id = 'todo-description';
            input.setAttribute('placeholder', 'e.g. Take Sadie and Abby out for a walk');
            formDiv.appendChild(input);

            modalBodyDiv.appendChild(formDiv);
        })();

        (function dateInput() {
            const formDiv = document.createElement('div');
            formDiv.classList.add('mb-3');

            const label = document.createElement('label');
            label.classList.add('form-label');
            label.textContent = 'Due Date'
            label.setAttribute('for', 'todo-date');
            formDiv.appendChild(label);

            const input = document.createElement('input');
            input.classList.add('form-control');
            input.setAttribute('type', 'date');
            input.id = 'todo-date';
            formDiv.appendChild(input);

            modalBodyDiv.appendChild(formDiv);
        })();

        (function priorityInput() {
            const formDiv = document.createElement('div');
            formDiv.classList.add('mb-3');

            const label = document.createElement('label');
            label.classList.add('form-label');
            label.textContent = 'Priority'
            label.setAttribute('for', 'todo-date');
            formDiv.appendChild(label);

            const selectElement = document.createElement('select');
            selectElement.id = 'todo-priority';
            selectElement.classList.add('form-select');
            selectElement.innerHTML = `<option selected disabled>Select a priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>`;
            formDiv.appendChild(selectElement);

            modalBodyDiv.appendChild(formDiv);

        })();

        return modalBodyDiv;
    }

    function createModalFooterDiv() {
        const modalFooterDiv = document.createElement('div');
        modalFooterDiv.classList.add('modal-footer');

        const closeButton = document.createElement('button');
        closeButton.classList.add('btn');
        closeButton.classList.add('btn-secondary');
        closeButton.setAttribute('data-bs-dismiss', 'modal');
        closeButton.textContent = 'Close';

        const saveButton = document.createElement('button');
        saveButton.classList.add('btn');
        saveButton.classList.add('btn-primary');
        saveButton.setAttribute('type', 'submit');
        saveButton.setAttribute('data-bs-dismiss', 'modal');
        saveButton.textContent = 'Save changes';

        // Add saveTodo function to saveButton
        saveButton.addEventListener('click', () => saveTodo(todolist));

        modalFooterDiv.appendChild(closeButton);
        modalFooterDiv.appendChild(saveButton);

        return modalFooterDiv;
    }

    return modalMainDiv;
}
// TODO: include form validation

function saveTodo(todolist) {
    // Take all values from form
    const title = document.getElementById('todo-title').value || null;
    const description = document.getElementById('todo-description').value || null;
    const date = document.getElementById('todo-date').value || null;
    const priority = document.getElementById('todo-priority').value || null;

    // Create new todo object
    const newTodo = new Todo(title, description, date, priority);

    // Place todo object in todolist array
    todolist.push(newTodo);

    // JSONify todolist array and place inside local storage
    localStorage.setItem('todolist', JSON.stringify(todolist));
    todoListComponent(todolist); // this causes bugs because im just adding it over and over again
}

export { createAddTodoButton, createAddTodoModal }