import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExperiencialaboralComponent } from './add-experiencialaboral.component';

describe('AddExperiencialaboralComponent', () => {
  let component: AddExperiencialaboralComponent;
  let fixture: ComponentFixture<AddExperiencialaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExperiencialaboralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExperiencialaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
