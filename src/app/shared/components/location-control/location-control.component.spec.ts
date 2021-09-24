import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationControlComponent } from './location-control.component';

describe('LocationInputComponent', () => {
  let component: LocationControlComponent;
  let fixture: ComponentFixture<LocationControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
