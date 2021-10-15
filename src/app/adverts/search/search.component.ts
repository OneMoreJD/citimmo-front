import { Component, OnInit } from '@angular/core';
import { QuickSearchService } from '../../home/quick-search/quick-search.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';
import { SearchService } from './search.service';
import { Criteria } from './criteria';
import { Constants } from '../../shared/constants';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  locations = [];

  currentCriteria: any;
  estateTypeList: any[];

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

  // budget variables
  minBudget: number = Constants.MIN_BUY_BUDGET;
  maxBudget: number = Constants.MAX_BUY_BUDGET;
  floorBudget: number = Constants.MIN_BUY_BUDGET;
  ceilBudget: number = Constants.MAX_BUY_BUDGET;
  stepBudget: number = Constants.STEP_BUY_BUDGET;
  BudgetLabel: string = '';

  // inside surface variables
  minIntSurface: number = Constants.MIN_INT_SURFACE;
  maxIntSurface: number = Constants.MAX_INT_SURFACE;
  floorIntSurface: number = Constants.MIN_INT_SURFACE;
  ceilIntSurface: number = Constants.MAX_INT_SURFACE;
  stepIntSurface: number = Constants.STEP_INT_SURFACE;
  intSurfaceLabel: string = '';

  // outside surface variables
  maxExtSurface: number = Constants.MIN_EXT_SURFACE;
  floorExtSurface: number = Constants.MIN_BUY_BUDGET;
  ceilExtSurface: number = Constants.MAX_EXT_SURFACE;
  stepExtSurface: number = Constants.STEP_EXT_SURFACE;
  extSurfaceLabel: string = '';

  insideSliderOptions: Options;
  outsideSliderOptions: Options;
  budgetSliderOptions: Options;

  collapseSurface: boolean;
  collapseBudget: boolean;
  collapseOther: boolean;

  constructor(private qsService: QuickSearchService, private searchService: SearchService, private snackBar: MatSnackBar) {

    this.insideSliderOptions = {
      floor: this.floorIntSurface,
      ceil: this.ceilIntSurface,
      step: this.stepIntSurface,
      noSwitching: true,
      getSelectionBarColor: () => { return Constants.PRIMARY_COLOR },
      getPointerColor: () => { return Constants.PRIMARY_COLOR },
      hideLimitLabels: true,
      hidePointerLabels: true
    };

    this.outsideSliderOptions = {
      floor: this.floorExtSurface,
      ceil: this.ceilExtSurface,
      step: this.stepExtSurface,
      showSelectionBar: true,
      getSelectionBarColor: () => { return Constants.PRIMARY_COLOR },
      getPointerColor: () => { return Constants.PRIMARY_COLOR },
      hideLimitLabels: true,
      hidePointerLabels: true
    };

    this.budgetSliderOptions = {
      floor: this.floorBudget,
      ceil: this.ceilBudget,
      step: this.stepBudget,
      noSwitching: true,
      getSelectionBarColor: () => { return Constants.PRIMARY_COLOR },
      getPointerColor: () => { return Constants.PRIMARY_COLOR },
      hideLimitLabels: true,
      hidePointerLabels: true
    };
  }

  ngOnInit(): void {
    this.searchService.getEstateTypes().subscribe(
      data => this.estateTypeList = data
    );

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
      data => console.log(data),
      err => {
        console.log(err);
        this.snackBar.open("Oups, il y a un problème...", "Fermer");
      }
    );
  }
}
