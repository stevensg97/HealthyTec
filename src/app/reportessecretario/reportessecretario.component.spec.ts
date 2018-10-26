import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesSecretarioComponent } from './reportessecretario.component';

describe('ReportesSecretarioComponent', () => {
  let component: ReportesSecretarioComponent;
  let fixture: ComponentFixture<ReportesSecretarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesSecretarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesSecretarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
