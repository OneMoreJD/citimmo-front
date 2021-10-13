import { Component, OnInit } from '@angular/core';
import { QuickSearchService } from '../../home/quick-search/quick-search.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';
import { SearchService } from './search.service';
import { Criteria } from './criteria';

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
  estateTypeList: any[] = [
    {value: 'house', label:'Maison'},
    {value: 'appartment', label:'Appartement'},
    {value: 'garage', label:'Garage'},
    {value: 'other', label:'Autre'}
  ];

  searchForm: FormGroup = new FormGroup({
    estateTypeControl: new FormControl(),
    locationControl: new FormControl('', Validators.required),
    roomsControl: new FormControl(),
    bedroomsControl: new FormControl(),
    insideSurfaceControl: new FormControl(),
    outsideSurfaceControl: new FormControl(),
    budgetControl: new FormControl()
  });

  maxRooms: number = 0;

  minBudget: number = 0;
  maxBudget: number = 1000000;
  floorBudget: number = 0;
  ceilBudget: number = 1000000;
  stepBudget: number = 10000;
  BudgetLabel: string = '';

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
  budgetSliderOptions: Options;

  collapseSurface: boolean;
  collapseBudget: boolean;
  collapseOther: boolean;

  constructor(private qsService: QuickSearchService, private searchService: SearchService) {

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

    this.budgetSliderOptions = {
      floor: this.floorBudget,
      ceil: this.ceilBudget,
      step: this.stepBudget,
      noSwitching: true,
      getSelectionBarColor: () => {return this.PRIMARY_COLOR},
      getPointerColor: () => {return this.PRIMARY_COLOR},
      hideLimitLabels: true,
      hidePointerLabels: true
    };
   }

  ngOnInit(): void {
    this.currentCriteria = this.qsService.criteria;
    console.log(this.currentCriteria);
    if (this.currentCriteria?.budget) {
      this.maxBudget = Number(this.currentCriteria.budget);
    }
    if (this.currentCriteria?.locations) {
      this.onLocationsChange(this.currentCriteria.locations);
    }
  }

  onLocationsChange(locations: string[]) {
    this.locations = locations;
    this.searchForm.controls['locationControl'].setValue(this.locations);
  }

  updateMaxRooms() {
    this.maxRooms = Math.max(...this.searchForm.controls['roomsControl'].value);
  }

  test(event) {
    console.log(event);
  }

  onSearch() {
    this.collapseBudget = false;
    this.collapseOther = false;
    this.collapseSurface = false;

    const criteria: Criteria = {
      transactionType: this.currentCriteria.transaction,
      estateType: this.searchForm.controls['estateTypeControl'].value,
      locations: this.searchForm.controls['locationControl'].value,
      rooms: this.searchForm.controls['roomsControl']?.value,
      bedrooms: this.searchForm.controls['bedroomsControl']?.value,
      intSurfaceMin: this.searchForm.controls['insideSurfaceControl']?.value[0],
      intSurfaceMax: this.searchForm.controls['insideSurfaceControl']?.value[1],
      extSurfaceMax: this.searchForm.controls['outsideSurfaceControl']?.value,
      budgetMin: this.searchForm.controls['budgetControl']?.value[0],
      budgetMax: this.searchForm.controls['budgetControl']?.value[1]
    };
    this.searchService.getAdverts(criteria).subscribe(
      data => console.log(data)
    );
  }
}
