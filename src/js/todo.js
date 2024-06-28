// This module contains the todo object

export class Todo {
    constructor(id, title, description, dueDate, priority) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._isDone = false;
    }
}