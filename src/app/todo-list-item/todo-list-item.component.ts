import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ITodo } from 'src/models/todo.js';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {
  @Input() todo?: ITodo;
  // @Output() update = new EventEmitter();

  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit(): void {
  }

  toggleDone = () => {
    this.todosService.updateTodo({
      ...this.todo!,
      done: !this.todo?.done
    })
  }

  delete = () => {
    this.todosService.removeTodo(this.todo!);
  }
}
