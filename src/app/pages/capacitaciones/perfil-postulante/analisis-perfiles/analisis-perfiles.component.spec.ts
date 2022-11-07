import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisPerfilesComponent } from './analisis-perfiles.component';

describe('AnalisisPerfilesComponent', () => {
  let component: AnalisisPerfilesComponent;
  let fixture: ComponentFixture<AnalisisPerfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalisisPerfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
