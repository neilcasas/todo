import { deleteTodo, toggleIsDoneTodo, updateTodo } from "./storage";

const editTodoModal = (todo, listname) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal fade");
  modal.setAttribute("id", `${todo._id}-edit-modal`);
  modal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="row">
                        <div class="col">
                            <h2 class="modal-title">
                                <input type="text" id="new-title" value="${
                                  todo._title
                                }" class="form-control">
                            </h2>
                        </div>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h6>Description</h6>
                    <textarea id="new-description" class="form-control">${
                      todo._description
                    }</textarea>
                    <hr>
                    <div class="d-flex align-items-center">
                        <div class="col-auto me-3">Due Date</div>
                        <div class="col-auto">
                            <input type="date" id="new-date" class="form-control" value="${
                              todo._dueDate
                            }">
                        </div>
                    </div>
                    <hr>
                    <div class="d-flex align-items-center">
                        <div class="col-auto me-3">Priority</div>
                        <div class="col-auto">
                            <select id="new-priority" class="form-control">
                                <option value="high"${
                                  todo._priority == "high" ? "selected" : ""
                                }>High</option>
                                <option value="medium" ${
                                  todo._priority == "medium" ? "selected" : ""
                                }>Medium</option>
                                <option value="low" ${
                                  todo._priority == "low" ? "selected" : ""
                                }>Low</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="update-todo-btn" data-bs-dismiss="modal">Save Changes</button>
                </div>
            </div>
        </div>
    `;
  // Update todo upon clicking update button
  const updateButton = modal.querySelector("#update-todo-btn");
  updateButton.addEventListener("click", () => updateTodo(todo, listname));
  return modal;
};

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

  const checkBox = todoElement.querySelector(`#checkbox-${todo._id}`);
  checkBox.addEventListener("click", () =>
    toggleIsDoneTodo(todo, listname, checkBox)
  );

  todoElement.appendChild(todoModal(todo, listname));
  todoElement.appendChild(editTodoModal(todo, listname));
  return todoElement;
};

export const todoModal = (todo, listname) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal fade");
  modal.setAttribute("id", `${todo._id}-modal`);
  modal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="row">
                        <div class="col">
                            <h2 class="modal-title">${todo._title}</h2>
                        </div>
                        <div class="col-auto d-flex align-items-center text-end">
                            <i class="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#${todo._id}-edit-modal"></i>
                        </div>
                    </div>
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

  const deleteButton = modal.querySelector("#delete-btn");
  deleteButton.addEventListener("click", () => deleteTodo(todo, listname));

  return modal;
};
