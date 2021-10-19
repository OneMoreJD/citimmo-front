import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuickSearchService } from './quick-search.service';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-quick-search',
  templateUrl: './quick-search.component.html',
  styleUrls: ['./quick-search.component.css']
})
export class QuickSearchComponent implements OnInit {

  locations = [];
  maxBudget = Constants.MAX_BUY_BUDGET;
  intervalBudget = Constants.STEP_BUY_BUDGET;

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
      this.maxBudget = Constants.MAX_BUY_BUDGET;
      this.intervalBudget = Constants.STEP_BUY_BUDGET;
    } else {
      this.maxBudget = Constants.MAX_RENT_BUDGET;
      this.intervalBudget = Constants.STEP_RENT_BUDGET;
    }
    this.budgetControl.setValue('');
  }

  onLocationsChange(locations: string[]) {
    this.locations = locations;
    this.locationControl.setValue(this.locations);
  }

  onSubmit() {
    const budget = this.budgetControl.value == this.maxBudget ? '' : this.budgetControl.value;
    this.qsService.getAdverts(this.transactionControl.value, budget, this.locations).subscribe(
      data => {
        this.qsService.adverts = data;
        this.router.navigate(['/adverts']);
      },
      err => {
        console.log(err);
        this.snackBar.open("Oups, il y a un problème...", "Fermer");
      }
    );
  }
}
