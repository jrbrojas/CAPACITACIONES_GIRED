import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroTareasPosicionComponent } from './libro-tareas-posicion.component';

describe('LibroTareasPosicionComponent', () => {
  let component: LibroTareasPosicionComponent;
  let fixture: ComponentFixture<LibroTareasPosicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroTareasPosicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroTareasPosicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
