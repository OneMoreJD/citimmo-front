import { Component, OnInit } from '@angular/core';
import { QuickSearchService } from '../../home/quick-search/quick-search.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  locations = [];

  currentCriteria: any;
  estateTypeList: string[] = [
    'Maison',
    'Appartement',
    'Garage',
    'Péniche'
  ];

  searchForm: FormGroup;
  estateTypeControl = new FormControl();
  locationControl = new FormControl('', Validators.required);
  roomsControl = new FormControl();
  bedroomsControl = new FormControl();
  insideSurfaceControl = new FormControl();
  outsideSurfaceControl = new FormControl();

  maxRooms: number;

  constructor(private qsService: QuickSearchService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.currentCriteria = this.qsService.criteria;
    console.log(this.currentCriteria);

    this.searchForm = this.formBuilder.group({
      estateType: this.estateTypeControl,
      locations: this.locationControl,
      rooms: this.roomsControl,
      bedrooms: this.bedroomsControl,
      inside: this.insideSurfaceControl,
      outside: this.outsideSurfaceControl
    });
  }

  onLocationsChange(locations: string[]) {
    this.locations = locations;
    this.locationControl.setValue(this.locations);
  }

  updateMaxRooms() {
    this.maxRooms = Math.max(...this.roomsControl.value);
    console.log(this.maxRooms);
  }
}
