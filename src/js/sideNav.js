import { addProjectHeader } from "./addProjectModal";
const sideNavBar = () => {
  const sideNavDiv = document.createElement("div");
  sideNavDiv.setAttribute("class", "nav nav-pills flex-column");

  // All todos view
  sideNavDiv.innerHTML = `<li class="nav-item">
    <h4>  
        <a class="nav-link active" id="all-todos-link">View all todos</a>
    </h4>
   </li>
   <div id="project-list-container">
    <div id="add-project-header-container">
   `;

  const addProjectHeaderContainer = sideNavDiv.querySelector(
    "#add-project-header-container"
  );
  const addProjectHeaderElement = addProjectHeader();
  addProjectHeaderContainer.appendChild(addProjectHeaderElement);

  // Iterate through localStorage to get projects, append to projectList container
  const projectList = () => {
    const projectListContainer = sideNavDiv.querySelector(
      "#project-list-container"
    );
    for (let key of Object.keys(localStorage)) {
      if (key == "todolist") {
        continue;
      }
      // Create link element
      let projectLink = document.createElement("li");
      projectLink.classList.add("nav-item");
      projectLink.innerHTML = `<a class="nav-link">${key}</a>`;

      // Append to projectList div
      projectListContainer.appendChild(projectLink);
    }
  };

  projectList();
  return sideNavDiv;
};

export { sideNavBar };
