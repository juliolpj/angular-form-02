import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  systemTitle = 'Template Driven Form 0.3';
  systemDescrip = 'Control de estado y validez de los elementos del formulario';

  formTemas = ['Angular', 'React', 'VueJs'];
  userModel = new User('Rob', 'rob@test.com', 584169295877, 'default', 'mañana', true);

}
