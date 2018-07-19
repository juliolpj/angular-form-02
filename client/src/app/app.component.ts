import { Component } from '@angular/core';
import { User } from './user';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  systemTitle = 'Template Driven Form 0.7';
  systemDescrip = 'Validación del formulario';

  formTemas = ['Angular', 'React', 'VueJs'];
  formTemaTieneError = true;

  userModel = new User('Rob', 'rob@test.com', 584169295877, 'default', 'mañana', true);

  validarTema(value) {
    if (value === 'default') {
      this.formTemaTieneError = true;
    } else {
      this.formTemaTieneError = false;
    }
  }
}
