import { Component } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  nombreUsuario: string = '';
  clave: string = '';
  mostrarLabel: boolean = false;

  constructor(private router: Router) {};

  registrarUsuario(): void {
    const usuario = new Usuario(this.nombreUsuario, this.clave);
    let usuariosGuardados = JSON.parse(localStorage.getItem('usuarios') || '[]') as Usuario[];  

    usuariosGuardados.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));
    this.mostrarLabel = true;
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}
