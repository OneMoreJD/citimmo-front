import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuickSearchComponent } from '../../home/quick-search/quick-search.component';
import { QuickSearchService } from '../../home/quick-search/quick-search.service';

@Component({
  selector: 'app-adverts-list',
  templateUrl: './adverts-list.component.html',
  styleUrls: ['./adverts-list.component.css']
})
export class AdvertsListComponent implements OnInit {

  adverts: any[] = [];

  constructor(private router: Router, private qsService: QuickSearchService) {
    // if (this.router.getCurrentNavigation().extras.state) {
    //   const routeState = this.router.getCurrentNavigation().extras.state;
    //   if (routeState) {
    //     this.adverts = routeState.adverts ? JSON.parse(routeState.adverts) : [];
    //     console.log(this.adverts);
    //   }
    // }
  }

  ngOnInit(): void {
    this.adverts = this.qsService.adverts;
    if (this.adverts.length === 0) {
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
