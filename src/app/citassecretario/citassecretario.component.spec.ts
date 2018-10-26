import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasSecretarioComponent } from './citassecretario.component';

describe('CitasSecretarioComponent', () => {
  let component: CitasSecretarioComponent;
  let fixture: ComponentFixture<CitasSecretarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasSecretarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasSecretarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
