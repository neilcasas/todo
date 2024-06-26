export class Todo {
    constructor(title, description, dueDate, priority) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
    }

    getTitle() { return this._title; }
    getDescription() { return this._description; }
    getDueDate() { return this._dueDate; }
    getPriority() { return this._priority; }

    setTitle(title) { this._title = title; }
    setDescription(description) { this._description = description; }
    setDueDate(dueDate) { this._dueDate = dueDate; }
    setPriority(priority) { this._priority = priority; }
}

export class ToDoList {
    constructor() {
        this.list = [];
    }

    addTodo(todo) {
        this.list.push(todo);
    }

    removeTodo(todoTitle) {
        this.list = this.list.filter(todo => todo.getTitle() !== todoTitle);
    }

    getTodos() {
        return this.list;
    }
}

export class Project extends ToDoList {
    constructor(name) {
        super();
        this._name = name;
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }
}
