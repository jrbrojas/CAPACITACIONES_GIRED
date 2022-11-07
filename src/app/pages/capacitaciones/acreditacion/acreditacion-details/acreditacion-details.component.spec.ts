import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcreditacionDetailsComponent } from './acreditacion-details.component';

describe('AcreditacionDetailsComponent', () => {
  let component: AcreditacionDetailsComponent;
  let fixture: ComponentFixture<AcreditacionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcreditacionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcreditacionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
