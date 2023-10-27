import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantCarrosComponent } from './mant-carros.component';

describe('MantCarrosComponent', () => {
  let component: MantCarrosComponent;
  let fixture: ComponentFixture<MantCarrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantCarrosComponent]
    });
    fixture = TestBed.createComponent(MantCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
