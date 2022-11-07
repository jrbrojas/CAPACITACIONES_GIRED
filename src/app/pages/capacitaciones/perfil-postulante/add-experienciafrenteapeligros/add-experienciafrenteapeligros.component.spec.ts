import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExperienciafrenteapeligrosComponent } from './add-experienciafrenteapeligros.component';

describe('AddExperienciafrenteapeligrosComponent', () => {
  let component: AddExperienciafrenteapeligrosComponent;
  let fixture: ComponentFixture<AddExperienciafrenteapeligrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExperienciafrenteapeligrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExperienciafrenteapeligrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
