import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPerfilProfesionalComponent } from './consulta-perfil-profesional.component';

describe('ConsultaPerfilProfesionalComponent', () => {
  let component: ConsultaPerfilProfesionalComponent;
  let fixture: ComponentFixture<ConsultaPerfilProfesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaPerfilProfesionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPerfilProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
