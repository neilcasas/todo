import "../scss/styles.scss";
import loadPage from "./uicontroller.js";

// Add sidenav toggler
document.querySelector("#sidenavbar-toggler").addEventListener("click", () => {
  const sideNavDiv = document.querySelector("#side-navbar");
  sideNavDiv.classList.toggle("hide-sidenav");
});

// Load main todolist upon loading
loadPage("todolist");
