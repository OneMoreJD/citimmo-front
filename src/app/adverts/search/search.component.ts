import { Component, OnInit } from '@angular/core';
import { QuickSearchService } from '../../home/quick-search/quick-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  currentCriteria: any;

  constructor(private qsService: QuickSearchService) { }

  ngOnInit(): void {
    this.currentCriteria = this.qsService.criteria;
    console.log(this.currentCriteria);
  }

}
