const sideNavBar = () => {
  const sideNavDiv = document.createElement("div");
  sideNavDiv.setAttribute("class", "nav nav-pills flex-column");

  // All todos view
  sideNavDiv.innerHTML = `<li class="nav-item">
    <h3>  
        <a class="nav-link active" id="all-todos-link">View all todos</a>
    </h3>
   </li>`;

  return sideNavDiv;
};

export { sideNavBar };
