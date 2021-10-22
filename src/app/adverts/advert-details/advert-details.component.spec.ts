import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertDetailsComponent } from './advert-details.component';

describe('AdvertDetailsComponent', () => {
  let component: AdvertDetailsComponent;
  let fixture: ComponentFixture<AdvertDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
