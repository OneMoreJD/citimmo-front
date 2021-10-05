import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { QuickSearchService } from '../../home/quick-search/quick-search.service';

@Component({
  selector: 'app-adverts-list',
  templateUrl: './adverts-list.component.html',
  styleUrls: ['./adverts-list.component.css']
})
export class AdvertsListComponent implements OnInit {

  adverts: any[] = [];

  constructor(private qsService: QuickSearchService) {

    this.adverts = this.qsService.adverts;
    
    if (!environment.production) {      
      if (!this.adverts) {
        this.adverts = [];
        this.adverts.push({
          title: 'tres bel appartement',
          bedrooms: 3,
          rooms: 5,
          description: 'Très bel appartement\nA visiter absolument',
          address: {
            city: 'Paris'
          },
          price: 850000,
          surfaceInt: 167
        },
        {
          title: '3 pièces lumineux',
          bedrooms: 1,
          rooms: 3,
          description: 'Très bel appartement\nA visiter absolument',
          address: {
            city: 'Paris'
          },
          price: 650000,
          surfaceInt: 74
        });
      }
    }
  }

  ngOnInit(): void {
  }

}
