import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-edades',
  templateUrl: './calculadora-edades.component.html',
  styleUrls: ['./calculadora-edades.component.scss']
})
export class CalculadoraEdadesComponent {
  edad1: number = 0;
  edad2: number = 0;
  resultadoPromedio: number | undefined;
  resultadoSuma: number | undefined;

  calcular() {
    this.resultadoSuma = this.edad1 + this.edad2;
    this.resultadoPromedio = (this.edad1 + this.edad2) / 2;
  }

  limpiar() {
    this.resultadoSuma = undefined;
    this.resultadoPromedio = undefined;
    this.edad1 = 0;
    this.edad2 = 0;
  }
}
