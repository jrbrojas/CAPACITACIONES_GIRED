import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilesListComponent } from './perfiles-list.component';

describe('PerfilesListComponent', () => {
  let component: PerfilesListComponent;
  let fixture: ComponentFixture<PerfilesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
