import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudFisicaComponent } from './aptitud-fisica.component';

describe('AptitudFisicaComponent', () => {
  let component: AptitudFisicaComponent;
  let fixture: ComponentFixture<AptitudFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AptitudFisicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AptitudFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
