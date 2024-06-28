import { todoComponent } from './todoComponent.js'

// Todo list component
export const todoListComponent = (todoList) => {
    const contentElement = document.querySelector('#content');
    const list = document.createElement('div');
    list.classList.add('todo-list');
    for (let todo of todoList) {
        let todoElement = todoComponent(todo);
        list.appendChild(todoElement);
    }
    contentElement.appendChild(list);
}