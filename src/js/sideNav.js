import { addProjectHeader } from "./addProjectModal";
import loadPage from "./uicontroller";
import { deleteProject } from "./storage";

const sideNavBar = () => {
  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("class", "nav nav-pills flex-column");

  // All todos view
  mainDiv.innerHTML = `<li class="nav-item">
    <h5>  
        <a class="nav-link" id="all-todos-link">View all todos</a>
    </h5>
   </li>
   <div id="project-list-container">
    <div id="add-project-header-container">
   `;
  // Load all todos when clicking all todos link
  const allTodosLink = mainDiv.querySelector("#all-todos-link");
  allTodosLink.addEventListener("click", () => {
    loadPage("todolist");
  });
  const addProjectHeaderContainer = mainDiv.querySelector(
    "#add-project-header-container"
  );
  const addProjectHeaderElement = addProjectHeader();
  addProjectHeaderContainer.appendChild(addProjectHeaderElement);

  // Iterate through localStorage to get projects, append to projectList container
  const projectList = () => {
    const projectListContainer = mainDiv.querySelector(
      "#project-list-container"
    );

    const projects = Object.keys(localStorage).filter(
      (key) => key !== "todolist"
    );
    if (projects.length > 0) {
      for (let key of projects) {
        if (key == "todolist") {
          continue;
        }

        // Create link element
        let projectLink = document.createElement("li");
        projectLink.classList.add("nav-item");
        projectLink.innerHTML = `
      <div class="d-flex align-items-center">
        <div class="col">
          <a class="nav-link">${key}</a>
        </div>
        <div class="col-auto">
          <i class="bi bi-trash ms-2 text-danger"></i>
        </div>
      </div>
      `;

        // Load the project list contents when clicking the link
        projectLink.querySelector("a").addEventListener("click", () => {
          loadPage(key);
        });

        // Allow deleting of objects
        projectLink.querySelector("i").addEventListener("click", () => {
          deleteProject(key);
          loadPage("todolist");
        });

        // Append to projectList div
        projectListContainer.appendChild(projectLink);
      }
    } else {
      // Show a message if no projects have been added yet
      const emptyDiv = document.createElement("div");
      emptyDiv.textContent = "No projects yet.";
      emptyDiv.classList.add("empty-message-div");
      projectListContainer.appendChild(emptyDiv);
    }
  };

  projectList();
  return mainDiv;
};

export { sideNavBar };
