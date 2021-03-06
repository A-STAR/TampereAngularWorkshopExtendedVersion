import { Component, OnInit } from '@angular/core';
import {TodoService} from "../shared/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    console.log("s:", this.todoService)
    this.todos = this.todoService.getTodos();
  }

}
