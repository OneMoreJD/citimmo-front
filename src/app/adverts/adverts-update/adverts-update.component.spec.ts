import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertsUpdateComponent } from './adverts-update.component';

describe('AdvertsUpdateComponent', () => {
  let component: AdvertsUpdateComponent;
  let fixture: ComponentFixture<AdvertsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
