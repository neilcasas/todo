// This module contains the todolist and project objects

export class TodoList {
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

    [Symbol.iterator]() {
        let index = 0;
        let list = this.list;
        return {
            next: () => {
                if (index < list.length) {
                    return { value: list[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

export class Project extends TodoList {
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