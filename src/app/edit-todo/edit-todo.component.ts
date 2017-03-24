import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../shared/todo.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MyDateFormatPipe} from "../my-date-format.pipe";

@Component({
  selector: 'edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  id;
  todo;
  form: FormGroup;
  minlength: number = 4;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: TodoService,
              private fb: FormBuilder,
              private fp: MyDateFormatPipe) {
  }


  ngOnInit() {
    this.route.params.subscribe(
      ({id}) => {
        this.id = id;
        this.todo = this.service.getTodoById(this.id);

        this.initForm(this.todo);
      }
    )
  }

  initForm(todo) {
    this.form = this.fb.group({
      description: [
        todo.description,
        Validators.required
      ],
      dueTo: [
        this.fp.transform(
          (todo.dueTo || new Date().toISOString()),
          'yyyy-MM-dd'
        ),
        [
          Validators.required,
          Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)
        ]
      ],
      assignTo: [
        todo.assignTo || '',
        [
          Validators.required,
          Validators.minLength(this.minlength)
        ]
      ]
    });
  }

  editTodo(todo, index) {
    const updatedTodo = {
      index,
      ...todo
    };
    this.service.saveTodo(updatedTodo);
  }

  back() {
    this.router.navigate(['/'])
  }
}
