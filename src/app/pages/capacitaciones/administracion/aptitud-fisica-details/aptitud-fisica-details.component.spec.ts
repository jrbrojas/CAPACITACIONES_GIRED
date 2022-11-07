import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudFisicaDetailsComponent } from './aptitud-fisica-details.component';

describe('AptitudFisicaDetailsComponent', () => {
  let component: AptitudFisicaDetailsComponent;
  let fixture: ComponentFixture<AptitudFisicaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AptitudFisicaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AptitudFisicaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
