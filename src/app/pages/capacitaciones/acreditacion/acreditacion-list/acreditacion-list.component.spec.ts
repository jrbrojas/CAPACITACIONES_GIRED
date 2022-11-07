import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcreditacionListComponent } from './acreditacion-list.component';

describe('AcreditacionListComponent', () => {
  let component: AcreditacionListComponent;
  let fixture: ComponentFixture<AcreditacionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcreditacionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcreditacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
