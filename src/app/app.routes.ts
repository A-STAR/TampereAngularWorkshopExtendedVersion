import {RouterModule} from '@angular/router';
import {TodoComponent} from "./todo/todo.component";
import {EditTodoComponent} from "./edit-todo/edit-todo.component";

const appRoutes = [
  {path: '', component: TodoComponent},
  {path: 'todo/:id', loadChildren: './edit-todo/edit-todo.module#EditTodoModule'}
];

export default RouterModule.forRoot(appRoutes, {
  useHash: true
});
