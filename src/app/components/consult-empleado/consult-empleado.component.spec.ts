import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultEmpleadoComponent } from './consult-empleado.component';

describe('ConsultEmpleadoComponent', () => {
  let component: ConsultEmpleadoComponent;
  let fixture: ComponentFixture<ConsultEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultEmpleadoComponent]
    });
    fixture = TestBed.createComponent(ConsultEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
