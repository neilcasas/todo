// Todo component
export const todoComponent = (todo) => {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo', 'card');
    todoElement.innerHTML = `
    <div class="todo-body card-body">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="${todo._id}">
            <label class="form-check-label" for="${todo._id}">${todo._title}</label>
        </div>
    </div>
    `;
    todoElement.setAttribute('data-bs-toggle', 'modal');
    todoElement.setAttribute('data-bs-target', `#${todo._id}-modal`)

    todoElement.appendChild(todoModal(todo));
    return todoElement;
}

// Modal that displays the contents of the todo
export const todoModal = (todo) => { 
    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal fade');
    modal.setAttribute('id',`${todo._id}-modal`);
    modal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title">${todo._title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h6>Description</h6>
                    <p class="todo-modal-description">${todo._description}</p>
                    <hr>
                    <div class="row">
                        <div class="col-auto">Due Date</div>
                        <div class="col">${todo._dueDate}</div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-auto">Priority</div>
                        <div class="col">${todo._priority}</div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger">Delete Todo</button>
                </div>
            </div>
        </div>
    `;
    return modal;
}