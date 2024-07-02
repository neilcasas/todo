import { deleteTodo, toggleIsDoneTodo } from "./storage";

// Todo component
export const todoComponent = (todo, listname) => {
  const todoElement = document.createElement("div");
  todoElement.classList.add("todo", "card");
  todoElement.innerHTML = `
    <div class="todo-body card-body">
        <div class="form-check container-fluid">
            <input class="form-check-input" type="checkbox" id="checkbox-${todo._id}">
            <div class="container-fluid" data-bs-toggle="modal" data-bs-target="#${todo._id}-modal">
                <div class="row">
                    <div class="col">
                        <label class="form-check-label">${todo._title}</label>
                    </div>
                    <div class="col text-end" id="todo-component-date">
                        ${todo._dueDate}<span class="priority-indicator ${todo._priority}">!</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

  // Function that sets a todo from done to not done
  // Refactor to update localStorage
  const checkBox = todoElement.querySelector(`#checkbox-${todo._id}`);
  checkBox.addEventListener("click", () =>
    toggleIsDoneTodo(todo, listname, checkBox)
  );

  todoElement.appendChild(todoModal(todo, listname));
  return todoElement;
};

// Modal that displays the contents of the todo
export const todoModal = (todo, listname) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal fade");
  modal.setAttribute("id", `${todo._id}-modal`);
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
                    <button type="button" class="btn btn-danger" id="delete-btn" data-bs-dismiss="modal">Delete Todo</button>
                </div>
            </div>
        </div>
    `;

  // Add event listener to delete button and allow deleting of todos
  const deleteButton = modal.querySelector("#delete-btn");
  deleteButton.addEventListener("click", () => deleteTodo(todo, listname));

  return modal;
};
