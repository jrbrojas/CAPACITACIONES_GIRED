import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEspecializacionComponent } from './add-especializacion.component';

describe('AddEspecializacionComponent', () => {
  let component: AddEspecializacionComponent;
  let fixture: ComponentFixture<AddEspecializacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEspecializacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEspecializacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
