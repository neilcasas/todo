// Todo component
export const todoComponent = (todo) => {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo', 'card');
    todoElement.innerHTML = `
    <div class="todo-body card-body">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">${todo._title}</label>
        </div>
    </div>
    `;
    return todoElement;
}
