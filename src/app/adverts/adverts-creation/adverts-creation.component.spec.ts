import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertsCreationComponent } from './adverts-creation.component';

describe('AdvertsCreationComponent', () => {
  let component: AdvertsCreationComponent;
  let fixture: ComponentFixture<AdvertsCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertsCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
