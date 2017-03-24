import {RouterModule} from '@angular/router';
import {EditTodoComponent} from "./edit-todo.component";

const routes = [
  {path: '', component: EditTodoComponent}
];

export default RouterModule.forChild(routes);
