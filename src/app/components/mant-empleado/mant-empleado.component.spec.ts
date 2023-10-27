import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantEmpleadoComponent } from './mant-empleado.component';

describe('MantEmpleadoComponent', () => {
  let component: MantEmpleadoComponent;
  let fixture: ComponentFixture<MantEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantEmpleadoComponent]
    });
    fixture = TestBed.createComponent(MantEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
