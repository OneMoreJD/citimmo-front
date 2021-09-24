import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuickSearchService } from './quick-search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-search',
  templateUrl: './quick-search.component.html',
  styleUrls: ['./quick-search.component.css']
})
export class QuickSearchComponent implements OnInit {

  locations = [];
  maxBudget = 1000000;
  intervalBudget = 10000;

  quickSearchForm: FormGroup;
  transactionControl = new FormControl('buy');
  locationControl = new FormControl('', Validators.required);
  budgetControl = new FormControl('');

  constructor(private formBuilder: FormBuilder, private qsService: QuickSearchService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.quickSearchForm = this.formBuilder.group({
      transaction: this.transactionControl,
      location: this.locationControl,
      budget: this.budgetControl
    });
  }

  onTransactionChange(event) {
    if (this.transactionControl.value === 'buy') {
      this.maxBudget = 1000000;
      this.intervalBudget = 10000;
    } else {
      this.maxBudget = 5000;
      this.intervalBudget = 100;
    }
    this.budgetControl.setValue('');
    console.log(event);
  }

  onLocationsChange(locations: string[]) {
    this.locations = locations;
    this.locationControl.setValue(this.locations);
  }

  onSubmit() {
    console.log(this.locations);
    console.log(this.transactionControl.value);
    console.log(this.budgetControl.value);
    let adverts = this.qsService.getAdverts(this.transactionControl.value, this.budgetControl.value, this.locations).subscribe(
      data => {
        adverts = data;
        this.router.navigate(['/adverts'], { state: { adverts: JSON.stringify(adverts)}});
        console.log(data)
      },
      err => {
        console.log(err);
        this.snackBar.open("Oups, il y a un problème...", "Fermer");
      }
    );
  }
}
