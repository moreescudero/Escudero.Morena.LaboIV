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

  VerificarUsuario() {
    const datosLocalStorage = localStorage.getItem('usuarios');

    if (datosLocalStorage !== null) {
      const usuarios = JSON.parse(datosLocalStorage);
      let encontroUsuario = false;
      for (let i = 0; i < usuarios.length; i++) {
        const item = usuarios[i];
        if (item.usuario === this.nombreUsuario && item.clave === this.clave) {
          encontroUsuario = true;
          break;
        }
      }
      
      if (encontroUsuario === true) {
        this.mostrarLabel = true;
      } else {
        this.router.navigate(['/error']);
      }
    } else {
      this.router.navigate(['/error']);
    }
  }
}
