import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuickSearchService } from './quick-search.service';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-quick-search',
  templateUrl: './quick-search.component.html',
  styleUrls: ['./quick-search.component.css']
})
export class QuickSearchComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  locations: string[] = [];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our location
    if ((value || '').trim()) {
      this.locations.push(value.trim());
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
    }
  }




  quickSearchForm: FormGroup;
  transactionControl = new FormControl('buy');
  locationControl = new FormControl('', Validators.required);
  budgetControl = new FormControl('', Validators.pattern('^[0-9]*$'));

  constructor(private formBuilder: FormBuilder, private qsService: QuickSearchService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.quickSearchForm = this.formBuilder.group({
      transaction: this.transactionControl,
      location: this.locationControl,
      budget: this.budgetControl
    });
  }

  onSubmit() {
    console.log(this.locations);
    let adverts = this.qsService.getAdverts(this.transactionControl.value, this.budgetControl.value, this.locations).subscribe(
      data => {
        adverts = data;
        console.log(data)
      },
      err => this.snackBar.open("Oups, il y a un problème...", "Fermer")
    )
  }

  getLocationErrorMessage() {
    if (this.locationControl.hasError('required')) {
      return 'Ce champ est obligatoire';
    }
  }

  getBudgetErrorMessage() {
    if (this.budgetControl.hasError('pattern')) {
      return 'Un budget avec des chiffres, svp...';
    }
  }
}
