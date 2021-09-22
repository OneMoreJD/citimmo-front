import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  url: string = 'http://localhost:3000';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.quickSearchForm = this.formBuilder.group({
      transaction: this.transactionControl,
      location: this.locationControl,
      budget: this.budgetControl
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('transaction', this.transactionControl.value);
    formData.append('location', this.locationControl.value);
    formData.append('budget', this.budgetControl.value);

    this.http.post(this.url, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  getLocationErrorMessage() {
    if (this.locationControl.hasError('required')) {
      return 'Ce champ est obligatoire';
    }
  }
}
