// Add project button component
const addProjectButton = () => {
  const button = document.createElement("button");
  button.id = "add-btn";
  button.innerHTML = `<i class="bi bi-plus" id="add-icon"></i>`;

  button.setAttribute("data-bs-toggle", "modal");
  button.setAttribute("data-bs-target", "#add-project-modal");

  return button;
};

// Modal that displays the contents of the todo
const addProjectModal = () => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal fade");
  modal.setAttribute("id", "add-project-modal");
  modal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title">Add a Project</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                    <label class="form-label" for="project-title">What's the name of your project?</label>
                        <input class="form-control" type="text" id="project-title" placeholder="e.g. Finals Exam">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="save-project-btn" data-bs-dismiss="modal">Save Project</button>
                </div>
            </div>
        </div>
    `;
  // TODO: Add eventlistener to add project modal
  return modal;
};

// Create add project header
const addProjectHeader = () => {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("row");

  const headerText = document.createElement("h2");
  headerText.textContent = "Projects";
  headerDiv.appendChild(headerText);

  const addButton = addProjectButton();
  const modal = addProjectModal();

  headerDiv.appendChild(addButton);
  headerDiv.appendChild(modal);

  return headerDiv;
};

export { addProjectHeader };
