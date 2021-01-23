import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { v4 } from 'uuid';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.scss']
})
export class ComposerComponent {

  constructor(
    private todosService: TodosService,
    private formBuilder: FormBuilder
  ) { }

  todoForm = this.formBuilder.group({
    desc: ''
  })

  onSubmit = () => {
    this.todosService.addTodo({
      id: v4(),
      desc: this.todoForm.value.desc,
      done: false
    });
    this.todoForm.reset();
  }
}
