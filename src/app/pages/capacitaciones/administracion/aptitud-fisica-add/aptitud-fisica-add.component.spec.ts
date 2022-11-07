import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudFisicaAddComponent } from './aptitud-fisica-add.component';

describe('AptitudFisicaAddComponent', () => {
  let component: AptitudFisicaAddComponent;
  let fixture: ComponentFixture<AptitudFisicaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AptitudFisicaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AptitudFisicaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
