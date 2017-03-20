import {Component, OnInit, Input} from '@angular/core';
import {TodoService} from "../shared/todo.service";
import {Todo} from "../shared/todo.model";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  remove() {
    this.todoService.removeTodo(this.todo);
  }

}
