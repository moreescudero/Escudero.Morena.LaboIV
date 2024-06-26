import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  mostrarElementoLogin: boolean = true;
  mostrarElementoEstadisticas: boolean = false;
  mostrarElementoSalir: boolean = false;
  usuarioLogueado = this.authService.obtenerUsuarioActual();

  constructor(private authService: AuthService) {};

  cerrarSesion() {
    this.authService.cerrarSesion();
  }
}