import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPosicionComponent } from './crear-posicion.component';

describe('CrearPosicionComponent', () => {
  let component: CrearPosicionComponent;
  let fixture: ComponentFixture<CrearPosicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPosicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPosicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
