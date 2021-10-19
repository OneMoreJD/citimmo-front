import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {MatCarouselSlideComponent, Orientation} from '@ngbmodule/material-carousel';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-carousel-pictures',
  templateUrl: './carousel-pictures.component.html',
  styleUrls: ['./carousel-pictures.component.css']
})
export class CarouselPicturesComponent implements OnInit {

  @Input() slidesList: Array<string>;
  public showContent = false;
  public parentHeight = 'auto';
  public timings = '250ms ease-in';
  public autoplay = true;
  public interval = 5000;
  public loop = true;
  public hideArrows = false;
  public hideIndicators = false;
  public color: ThemePalette = 'primary';
  public maxWidth = 'auto';
  public maintainAspectRatio = true;
  public proportion = 45;
  public slideHeight = '200px';
  public slides = 0;
  public overlayColor = '#00000040';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = true;
  public orientation: Orientation = 'ltr';

  @ViewChildren(MatCarouselSlideComponent) public carouselSlides: QueryList<MatCarouselSlideComponent>;

  constructor() { }

  ngOnInit(): void {
    this.slides = this.slidesList.length;
  }

}
