import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPicturesComponent } from './carousel-pictures.component';

describe('CarouselPicturesComponent', () => {
  let component: CarouselPicturesComponent;
  let fixture: ComponentFixture<CarouselPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
