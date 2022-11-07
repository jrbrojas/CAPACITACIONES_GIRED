import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDatosbasicosComponent } from './add-datosbasicos.component';

describe('AddDatosbasicosComponent', () => {
  let component: AddDatosbasicosComponent;
  let fixture: ComponentFixture<AddDatosbasicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDatosbasicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDatosbasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
