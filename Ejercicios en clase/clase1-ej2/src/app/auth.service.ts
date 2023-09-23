import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  registrarUsuario(usuario: string, clave: string): boolean {
    const usuarios: Usuario[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioExistente = usuarios.find((user) => user.usuario === usuario);

    if (!usuarioExistente) {
      usuarios.push( new Usuario(usuario, clave) );
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      return true; // Registro exitoso
    } else {
      return false; // Usuario ya existe
    }
  }

  iniciarSesion(usuario: string, clave: string): boolean {
    const usuarios: Usuario[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioExistente = usuarios.find((user) => user.usuario === usuario && user.clave === clave);

    if (usuario) {
      localStorage.setItem('usuarioAutenticado', JSON.stringify(usuario));
      return true; // Inicio de sesión exitoso
    } else {
      return false; // Clave o usuario incorrecto
    }
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioAutenticado');
  }
}
