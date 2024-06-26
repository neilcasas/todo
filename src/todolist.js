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
