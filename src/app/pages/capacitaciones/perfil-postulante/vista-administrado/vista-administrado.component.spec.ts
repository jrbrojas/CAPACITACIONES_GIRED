import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAdministradoComponent } from './vista-administrado.component';

describe('VistaAdministradoComponent', () => {
  let component: VistaAdministradoComponent;
  let fixture: ComponentFixture<VistaAdministradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaAdministradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAdministradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
