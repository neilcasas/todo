const sideNavBar = () => {
  const sideNavDiv = document.createElement("div");
  sideNavDiv.setAttribute("class", "nav nav-pills flex-column");

  // All todos view
  sideNavDiv.innerHTML = `<li class="nav-item">
    <h4>  
        <a class="nav-link active" id="all-todos-link">View all todos</a>
    </h4>
   </li>
   <div id="projects-list-container">
    <div id="add-project-header">
   `;

  return sideNavDiv;
};

export { sideNavBar };
