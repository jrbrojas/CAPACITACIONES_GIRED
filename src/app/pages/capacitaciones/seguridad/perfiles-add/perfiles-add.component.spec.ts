import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilesAddComponent } from './perfiles-add.component';

describe('PerfilesAddComponent', () => {
  let component: PerfilesAddComponent;
  let fixture: ComponentFixture<PerfilesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
