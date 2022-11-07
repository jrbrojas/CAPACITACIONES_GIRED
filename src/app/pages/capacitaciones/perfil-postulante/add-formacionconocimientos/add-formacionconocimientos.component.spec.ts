import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormacionconocimientosComponent } from './add-formacionconocimientos.component';

describe('AddFormacionconocimientosComponent', () => {
  let component: AddFormacionconocimientosComponent;
  let fixture: ComponentFixture<AddFormacionconocimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormacionconocimientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormacionconocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
