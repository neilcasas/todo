// This module contains the logic for displaying and manipulating DOM` elements
import { todoListContentComponent } from "./todoListComponent.js";
import { sideNavBar } from "./sideNav.js";
import { getTodos } from "./storage.js";

// View all todos within a project
// View all projects
// Expand a todo
// Delete a todo

export default function loadPage() {
  const contentElement = document.querySelector("#content");
  const sideNavBarContainer = document.querySelector("#side-navbar");
  // Remove previous html content to 'reload' content
  contentElement.innerHTML = ``;

  // Fetch todolist from localStorage
  const todoList = getTodos("todolist");

  // Create todolist component out of localStorage todolist
  const todoListComponent = todoListContentComponent(todoList);

  // Append sidenavbar
  const sideNavBarElement = sideNavBar();
  sideNavBarContainer.appendChild(sideNavBarElement);
  contentElement.appendChild(todoListComponent);
}

// create function for loading main todopage
// create function for loading all projects view page
// create function for loading displaying a project's todos

// there could be a template, a part of the page that remains static, and then a content div that is dynamic
