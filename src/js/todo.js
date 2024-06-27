// This module contains the todo object

export class Todo {
    constructor(title, description, dueDate, priority) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._isDone = false;
    }

    getTitle() { return this._title; }
    getDescription() { return this._description; }
    getDueDate() { return this._dueDate; }
    getPriority() { return this._priority; }

    setTitle(title) { this._title = title; }
    setDescription(description) { this._description = description; }
    setDueDate(dueDate) { this._dueDate = dueDate; }
    setPriority(priority) { this._priority = priority; }
    setIsDone() { this._isDone = !this._isDone };
}