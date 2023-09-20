import { Component } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  nombreUsuario: string = '';
  clave: string = '';
  mostrarLabel: boolean = false;

  constructor(private router: Router) {};
  //usuario: Usuario = new Usuario(this.nombreUsuario, this.clave);

  VerificarUsuario() {
    if (this.nombreUsuario === 'more' && this.clave === '123') {
      this.mostrarLabel = true;
    }
    else {
      this.router.navigate(['/error']);
    }
  }

}
