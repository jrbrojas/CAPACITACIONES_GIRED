import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormacionacademicaComponent } from './add-formacionacademica.component';

describe('AddFormacionacademicaComponent', () => {
  let component: AddFormacionacademicaComponent;
  let fixture: ComponentFixture<AddFormacionacademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormacionacademicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormacionacademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
