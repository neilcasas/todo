// Todo component
export const todoComponent = (todo) => {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo');

    const todoBody = document.createElement('div');
    todoBody.classList.add('todo-body');

    const todoCheck = document.createElement('input');
    todoCheck.setAttribute('type', 'checkbox');
    todoBody.appendChild(todoCheck);

    const todoTitle = document.createElement('div');
    todoTitle.textContent = todo.getTitle();
    todoBody.appendChild(todoTitle);

    todoElement.appendChild(todoBody);
    return todoElement;
}
