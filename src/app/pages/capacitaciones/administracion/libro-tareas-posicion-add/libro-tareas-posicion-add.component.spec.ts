import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroTareasPosicionAddComponent } from './libro-tareas-posicion-add.component';

describe('LibroTareasPosicionAddComponent', () => {
  let component: LibroTareasPosicionAddComponent;
  let fixture: ComponentFixture<LibroTareasPosicionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroTareasPosicionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroTareasPosicionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
