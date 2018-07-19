import { Component } from '@angular/core';
import { User } from './user';
import { InscribirService } from './inscribir.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  systemTitle = 'Template Driven Form 0.8';
  systemDescrip = 'Enviar datos del formulario';

  formTemas = ['Angular', 'React', 'VueJs'];
  formTemaTieneError = true;

  userModel = new User('Rob', 'rob@test.com', 584169295877, 'default', 'mañana', true);

  constructor(private _inscribirService: InscribirService) {
  }

  validarTema(value) {
    if (value === 'default') {
      this.formTemaTieneError = true;
    } else {
      this.formTemaTieneError = false;
    }
  }

  onSubmit() {
    this._inscribirService.inscribir(this.userModel)
      .subscribe(
        data => console.log('Success! ', data),
        error => console.error('Error! ', error)
      );
  }
}
