// This module contains the todolist and project objects

export class TodoList {
  constructor(list = []) {
    if (Array.isArray(list)) {
      this.list = list;
    } else {
      // Handle the case where `list` is not provided or is of different type
      this.list = [];
    }
  }

  addTodo(todo) {
    this.list.push(todo);
  }

  removeTodo(todoId) {
    this.list = this.list.filter((todo) => todo._id !== todoId);
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
      },
    };
  }
}

export class Project extends TodoList {
  constructor(name, id, list = []) {
    super(list);
    this.id = id;
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}
