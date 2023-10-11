import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from '../../../models/usuario.models';
import { AuthService } from '../../services/auth.services';
import { identifierName } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  nombre: string = '';
  clave: string = '';
  email: string = '';
  autologin: boolean = false;
  user: Usuario = new Usuario();

  constructor(private authService: AuthService, private router: Router) {}

  registrarUsuario() {
    this.authService.registrar(this.email, this.clave).then(() => {
      //ingresar al home
      console.log('gracias me creaste con exitooo');
    });
  }

  ingresar() {
    if (this.email && this.clave) {
      this.authService.ingresar(this.email, this.clave).then(() => {
        this.router.navigate(['']);
      });
    }
  }

  ingresoRapido() {
    if (this.autologin === false) {
      this.email = 'escuderomore1@gmail.com';
      this.clave = '123456'
    } else {
      this.email = '';
      this.clave = '';
    }
  }
}
