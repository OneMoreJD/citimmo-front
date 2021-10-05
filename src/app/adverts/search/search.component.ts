import { Component, OnInit } from '@angular/core';
import { QuickSearchService } from '../../home/quick-search/quick-search.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  currentCriteria: any;
  estateTypeList: string[] = [
    'Maison',
    'Appartement',
    'Garage',
    'Péniche'
  ];

  searchForm: FormGroup;
  estateTypeControl = new FormControl();

  constructor(private qsService: QuickSearchService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.currentCriteria = this.qsService.criteria;
    console.log(this.currentCriteria);

    this.searchForm = this.formBuilder.group({
      estateType: this.estateTypeControl
    });
  }

  test(event:any) {
    console.log(event);
  }
}
