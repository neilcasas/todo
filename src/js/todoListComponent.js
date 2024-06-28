import { todoComponent } from './todoComponent.js'

// Todo list component
export const createTodoListComponent = (TodoList) => {
    const list = document.createElement('div');
    list.classList.add('todo-list');
    for (let todo of TodoList) {
        let todoElement = todoComponent(todo);
        list.appendChild(todoElement);
    }
    return list;
}