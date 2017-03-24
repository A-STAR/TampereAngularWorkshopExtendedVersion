import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';
import { EditTodoComponent } from './edit-todo.component';

import EditTodoRoutes from './edit-todo.routes';
import { MyDateFormatPipe } from '../my-date-format.pipe';


@NgModule({
  declarations: [
    EditTodoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditTodoRoutes
  ],
  providers: [
    MyDateFormatPipe
  ]
})
export class EditTodoModule { }
