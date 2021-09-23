import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../environments/environment';

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

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.quickSearchForm = this.formBuilder.group({
      transaction: this.transactionControl,
      location: this.locationControl,
      budget: this.budgetControl
    });
  }

  onSubmit() {
    const url = environment.domain + environment.urls.quickSearch;
    const params = new HttpParams()
      .set("transaction", this.transactionControl.value)
      .set("location", this.locationControl.value)
      .set("budget", this.budgetControl.value);

    this.http.get(url, { params }).subscribe(
      (res) => console.log(res),
      (err) => this.snackBar.open("Oups, il y a un problème...", "Fermer")
    );
  }

  getLocationErrorMessage() {
    if (this.locationControl.hasError('required')) {
      return 'Ce champ est obligatoire';
    }
  }
}
