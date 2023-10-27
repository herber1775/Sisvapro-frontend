import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultCarrosComponent } from './consult-carros.component';

describe('ConsultCarrosComponent', () => {
  let component: ConsultCarrosComponent;
  let fixture: ComponentFixture<ConsultCarrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultCarrosComponent]
    });
    fixture = TestBed.createComponent(ConsultCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
