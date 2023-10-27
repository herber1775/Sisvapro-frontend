import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultReporteVentaComponent } from './consult-reporte-venta.component';

describe('ConsultReporteVentaComponent', () => {
  let component: ConsultReporteVentaComponent;
  let fixture: ComponentFixture<ConsultReporteVentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultReporteVentaComponent]
    });
    fixture = TestBed.createComponent(ConsultReporteVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
