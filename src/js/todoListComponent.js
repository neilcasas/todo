import { todoComponent } from './todoComponent.js'

// Todo list component
export const createTodoListComponent = (todoList) => {
    const list = document.createElement('div');
    list.classList.add('todo-list');
    for (let todo of todoList) {
        let todoElement = todoComponent(todo);
        list.appendChild(todoElement);
    }
    return list;
}

/* TODO: Create a function that the DOM element that contains the todo list, 
which adds checked todos to a "Complete" section. Optional: Add a navbar that 
organizes the todos per timeframe*/

export const todoListContentComponent = () => {
    const mainDiv = document.createElement('div');
    
    
    const headerDiv = document.createElement('div');
}