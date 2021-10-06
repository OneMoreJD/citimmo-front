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
    insideSurfaceControl: new FormControl([0, 160]),
    outsideSurfaceControl: new FormControl()
  });

  maxRooms: number = 0;

  insideSliderOptions: Options = {
    floor: 0,
    ceil: 160,
    step: 5,
    noSwitching: true,
    getSelectionBarColor: () => {return this.PRIMARY_COLOR},
    getPointerColor: () => {return this.PRIMARY_COLOR},
    // translate: (value: number): string => { return value + 'm²' },
    hideLimitLabels: true,
    hidePointerLabels: true
  };

  outsideSliderOptions: Options = {
    floor: 0,
    ceil: 2000,
    step: 100,
    showSelectionBar: true,
    getSelectionBarColor: () => { return this.PRIMARY_COLOR },
    getPointerColor: () => { return this.PRIMARY_COLOR },
    // translate: (value: number): string => { return value + 'm²' },
    hideLimitLabels: true,
    hidePointerLabels: true
  };

  constructor(private qsService: QuickSearchService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.currentCriteria = this.qsService.criteria;
    console.log(this.currentCriteria);

    // this.searchForm = this.formBuilder.group({
    //   estateType: this.estateTypeControl,
    //   locations: this.locationControl,
    //   rooms: this.roomsControl,
    //   bedrooms: this.bedroomsControl,
    //   inside: this.insideSurfaceControl,
    //   outside: this.outsideSurfaceControl
    // });
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
