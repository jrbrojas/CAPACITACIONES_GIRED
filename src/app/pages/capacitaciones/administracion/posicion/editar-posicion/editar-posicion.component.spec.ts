import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPosicionComponent } from './editar-posicion.component';

describe('EditarPosicionComponent', () => {
  let component: EditarPosicionComponent;
  let fixture: ComponentFixture<EditarPosicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPosicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPosicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
