import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  async registrar(email: string, clave: string) {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(email, clave);
    } catch (error) {
      console.log( 'ocurrio un error en registrar', error);
      return null;
    }
  }

  async ingresar(email: string, clave: string) {
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, clave);
    } catch (error) {
      console.log( 'ocurrio un error en ingresar: ', error);
      return null;
    }
  }

  obtenerUsuarioActual() {
    return this.afAuth.authState;
  } 

  cerrarSesion() {
    this.afAuth.signOut();
  }
}