import { Injectable } from '@angular/core';
import { ITodo } from 'src/models/todo.js';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: ITodo[] = JSON.parse(localStorage.getItem('todos') || '[]').map((t: ITodo) => ({
    ...t,
    id: t.id || v4()
  }));
  constructor() {
    this.setTodos();
  }

  addTodo = (todo: ITodo) => {
    this.todos.push(todo);
    this.setTodos();
    return this.todos;
  }

  updateTodo = (todo: ITodo) => {
    console.log(this.todos);
    const index = this.todos.findIndex(t => t.id === todo.id);
    this.todos[index] = todo;
    this.setTodos();
    return this.todos;
  }
  removeTodo = (todo: ITodo) => {
    console.log(this.todos);
    const index = this.todos.findIndex(t => t.id === todo.id);
    this.todos.splice(index, 1);
    this.setTodos();
    return this.todos;
  }

  private setTodos = () => {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
