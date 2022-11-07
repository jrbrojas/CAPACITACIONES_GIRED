import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubprocesoderespuestaComponent } from './add-subprocesoderespuesta.component';

describe('AddSubprocesoderespuestaComponent', () => {
  let component: AddSubprocesoderespuestaComponent;
  let fixture: ComponentFixture<AddSubprocesoderespuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubprocesoderespuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubprocesoderespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
