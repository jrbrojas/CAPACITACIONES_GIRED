import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroTareasPosicionDetailsComponent } from './libro-tareas-posicion-details.component';

describe('LibroTareasPosicionDetailsComponent', () => {
  let component: LibroTareasPosicionDetailsComponent;
  let fixture: ComponentFixture<LibroTareasPosicionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroTareasPosicionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroTareasPosicionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
