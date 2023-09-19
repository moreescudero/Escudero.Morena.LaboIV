import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraEdadesComponent } from './calculadora-edades.component';

describe('CalculadoraEdadesComponent', () => {
  let component: CalculadoraEdadesComponent;
  let fixture: ComponentFixture<CalculadoraEdadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraEdadesComponent]
    });
    fixture = TestBed.createComponent(CalculadoraEdadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
