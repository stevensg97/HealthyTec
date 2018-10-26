import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesDoctorComponent } from './reportesdoctor.component';

describe('ReportesDoctorComponent', () => {
  let component: ReportesDoctorComponent;
  let fixture: ComponentFixture<ReportesDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
