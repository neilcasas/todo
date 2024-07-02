// This module contains the logic for displaying and manipulating DOM` elements
import { todoListContentComponent } from "./todoListComponent.js";
import { sideNavBar } from "./sideNav.js";
import { getTodos } from "./storage.js";

// View all todos within a project
// View all projects
// Expand a todo
// Delete a todo

// Load page depending on which list to be loaded
export default function loadPage(listname) {
  const contentElement = document.querySelector("#content");
  const sideNavBarContainer = document.querySelector("#side-navbar");

  // Remove previous html content to 'reload' content
  contentElement.innerHTML = ``;
  sideNavBarContainer.innerHTML = ``;

  // Fetch todolist from localStorage
  const todoList = getTodos(listname);

  // Create todolist component out of localStorage todolist
  const todoListComponent = todoListContentComponent(todoList, listname);

  // Append sidenavbar
  const sideNavBarElement = sideNavBar();
  sideNavBarContainer.appendChild(sideNavBarElement);
  contentElement.appendChild(todoListComponent);
}
