import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/models/todo.js';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: ITodo[] = [];
  constructor(
    private todosService: TodosService
  ) {
    this.todos = this.todosService.todos;
  }

  // todos: ITodo[] = JSON.parse(localStorage.getItem('todos')!)

  ngOnInit(): void {
  }

  toggleDone = (todo: ITodo) => {
    this.todosService.updateTodo({
      ...todo,
      done: !todo.done
    })
  }

  delete = (todo: ITodo) => {
    this.todosService.removeTodo(todo);
  }
}
