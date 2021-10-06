import { Component, OnInit } from '@angular/core';
import { QuickSearchService } from '../../home/quick-search/quick-search.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  readonly PRIMARY_COLOR = '#3f51b5';
  readonly ACCENT_COLOR = '#ff4081';
  readonly MAX_INT_SURFACE = 200;
  readonly MAX_EXT_SURFACE = 100;
  readonly SLIDER_STEP = 10;


  locations = [];

  currentCriteria: any;
  estateTypeList: string[] = [
    'Maison',
    'Appartement',
    'Garage',
    'Péniche'
  ];

  searchForm: FormGroup = new FormGroup({
    estateTypeControl: new FormControl(),
    locationControl: new FormControl('', Validators.required),
    roomsControl: new FormControl(),
    bedroomsControl: new FormControl(),
    insideSurfaceControl: new FormControl(),
    outsideSurfaceControl: new FormControl()
  });

  maxRooms: number = 0;

  minIntSurface: number = 0;
  maxIntSurface: number = this.MAX_INT_SURFACE;
  floorIntSurface: number = 0;
  ceilIntSurface: number = this.MAX_INT_SURFACE;
  stepIntSurface: number = this.SLIDER_STEP;
  intSurfaceLabel: string = '';

  maxExtSurface: number = 0;
  floorExtSurface: number = 0;
  ceilExtSurface: number = this.MAX_EXT_SURFACE;
  stepExtSurface: number = this.SLIDER_STEP;
  extSurfaceLabel: string = '';

  insideSliderOptions: Options;
  outsideSliderOptions: Options;

  constructor(private qsService: QuickSearchService) {

    this.insideSliderOptions = {
      floor: this.floorIntSurface,
      ceil: this.ceilIntSurface,
      step: this.stepIntSurface,
      noSwitching: true,
      getSelectionBarColor: () => {return this.PRIMARY_COLOR},
      getPointerColor: () => {return this.PRIMARY_COLOR},
      hideLimitLabels: true,
      hidePointerLabels: true
    };

    this.outsideSliderOptions = {
      floor: this.floorExtSurface,
      ceil: this.ceilExtSurface,
      step: this.stepExtSurface,
      showSelectionBar: true,
      getSelectionBarColor: () => { return this.PRIMARY_COLOR },
      getPointerColor: () => { return this.PRIMARY_COLOR },
      hideLimitLabels: true,
      hidePointerLabels: true
    };
   }

  ngOnInit(): void {
    this.currentCriteria = this.qsService.criteria;
    console.log(this.currentCriteria);

  }

  onLocationsChange(locations: string[]) {
    this.locations = locations;
    this.searchForm.controls['locationControl'].setValue(this.locations);
  }

  updateMaxRooms() {
    this.maxRooms = Math.max(...this.searchForm.controls['roomsControl'].value);
    console.log(this.maxRooms);
  }
}
