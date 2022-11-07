import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPosicionComponent } from './lista-posicion.component';

describe('ListaPosicionComponent', () => {
  let component: ListaPosicionComponent;
  let fixture: ComponentFixture<ListaPosicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPosicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPosicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
