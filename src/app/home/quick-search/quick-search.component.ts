import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../environments/environment';
import { QuickSearchService } from './quick-search.service';

@Component({
  selector: 'app-quick-search',
  templateUrl: './quick-search.component.html',
  styleUrls: ['./quick-search.component.css']
})
export class QuickSearchComponent implements OnInit {

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
    let adverts = this.qsService.getAdverts(this.quickSearchForm).subscribe(
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
}
