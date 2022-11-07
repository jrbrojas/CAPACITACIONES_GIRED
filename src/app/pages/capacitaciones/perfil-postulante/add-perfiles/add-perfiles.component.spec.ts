import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPerfilesComponent } from './add-perfiles.component';

describe('AddPerfilesComponent', () => {
  let component: AddPerfilesComponent;
  let fixture: ComponentFixture<AddPerfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPerfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
