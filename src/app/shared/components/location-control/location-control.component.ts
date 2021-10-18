import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-location-control',
  templateUrl: './location-control.component.html',
  styleUrls: ['./location-control.component.css']
})
export class LocationControlComponent implements OnInit {

  locationControl = new FormControl('', Validators.required);

  @Input()
  locations: string[];

  @Output()
  locationsChanged = new EventEmitter<string[]>();

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() { }

  ngOnInit(): void {
    if (!this.locations) {
      this.locations = [];
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our location
    if ((value || '').trim()) {
      this.locations.push(value.trim());
      this.locationsChanged.emit(this.locations);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(location: string): void {
    const index = this.locations.indexOf(location);

    if (index >= 0) {
      this.locations.splice(index, 1);
      this.locationsChanged.emit(this.locations);
    }
  }

  getLocationErrorMessage() {
    if (this.locationControl.hasError('required')) {
      return 'Ce champ est obligatoire';
    }
  }
}
