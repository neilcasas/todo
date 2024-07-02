// This module contains the logic for storing the objects within localStorage
import { Todo } from "./todo";
import { TodoList, Project } from "./todoList";
import loadPage from "./uicontroller";

function saveProject(projectName) {
  // Get id for projectObject
  const lists = Object.keys(localStorage) || [];
  const projects = lists.filter((key) => key !== "todolist");
  let projectCount = projects.length;

  // Create projectObject
  const projectObject = new Project(projectName, projectCount++ || 0);

  // Save project object to localStorage
  localStorage.setItem(`${projectName}`, JSON.stringify(projectObject));

  // Reload page with new project
  loadPage(projectName);
}
function deleteProject(projectName) {
  // Delete item from localStorage
  localStorage.removeItem(projectName);

  // Reload page
  loadPage("todolist");
}
// Save todo to localStorage given listname, load page given list name
function saveTodo(todolist, listname) {
  // Take all values from form
  const title = document.getElementById("todo-title").value || null;
  const description = document.getElementById("todo-description").value || null;
  const date = document.getElementById("todo-date").value || null;
  const priority = document.getElementById("todo-priority").value || null;

  // Create new todo object
  let todoCounter = todolist.list.length || 0;
  const newTodo = new Todo(todoCounter++, title, description, date, priority);

  // Place todo object in todolist array
  todolist.addTodo(newTodo);

  // JSONify todolist array and place inside localStorage
  localStorage.setItem(listname, JSON.stringify(todolist));

  // Reload todo list content with new todo
  loadPage(listname);
}

// Update todo
function updateTodo(todo, listname) {
  // Update todo with new details
  todo._title = document.getElementById("todo-title").value || null;
  todo._description = document.getElementById("todo-description").value || null;
  todo._date = document.getElementById("todo-date").value || null;
  todo._priority = document.getElementById("todo-priority").value || null;

  // Fetch list from localStorage
  let listObject = getTodos(listname);

  // Delete old todo
  listObject.list.filter((listTodo) => listTodo._id !== todo._id);

  // Append updated todo
  listObject.addTodo(todo);

  // Save new list object to JSON
  localStorage.setItem(listname, JSON.stringify(listObject));
}

// Delete todo
function deleteTodo(todo, listname) {
  // Fetch todos
  const list = getTodos(listname);

  // Remove todo from list
  list.removeTodo(todo._id);

  // JSONify todolist array and place inside localStorage
  localStorage.setItem(listname, JSON.stringify(list));

  loadPage(listname);
}

// Get the main todolist or project given their name, returns a todoList object
function getTodos(listname) {
  const storedList = localStorage.getItem(`${listname}`);
  if (!storedList) {
    // Handle the case where the item does not exist in localStorage
    return new TodoList();
  }

  // If the list item is in localStorage
  const list = JSON.parse(storedList).list;
  return list ? new TodoList(list) : new TodoList(); // make a todolist object out of the array of todos
}

// Toggle isDone for todos
function toggleIsDoneTodo(currentTodo, listname, checkBox) {
  // Fetch todos
  const list = getTodos(listname).list;

  // Toggle isDone for todo object in list
  for (let listTodo of list) {
    if (currentTodo._id == listTodo._id) {
      listTodo._isDone = !listTodo._isDone;
      break;
    }
  }

  // JSONify todolist array and place inside localStorage
  const todoListObject = new TodoList(list); // Turn into todoListObject first
  localStorage.setItem(`${listname}`, JSON.stringify(todoListObject));

  // Reload page
  loadPage(listname);
}

export {
  saveProject,
  deleteProject,
  saveTodo,
  deleteTodo,
  updateTodo,
  toggleIsDoneTodo,
  getTodos,
};
