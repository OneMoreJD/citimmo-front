import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuickSearchService } from '../../home/quick-search/quick-search.service';
import { SearchService } from '../search/search.service';
import { AuthenticateService } from '../../auth/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adverts-list',
  templateUrl: './adverts-list.component.html',
  styleUrls: ['./adverts-list.component.css']
})
export class AdvertsListComponent implements OnInit, OnDestroy {

  adverts: any[] = [];
  advertsSubscription: Subscription;
  profile;

  constructor(private qsService: QuickSearchService, private searchService: SearchService, private authService: AuthenticateService, private router: Router) {

    this.adverts = this.qsService.adverts;
    if (!this.adverts) {
      this.adverts = [];
    }
    this.advertsSubscription = this.searchService.advertsChange.subscribe(data => this.adverts = data);
  }

  ngOnInit(): void {
    this.authService.logger$.subscribe(logger => {
      if (logger) {
        this.profile = this.authService.getCurrentProfile();
      }
    });
  }

  ngOnDestroy(): void {
    this.advertsSubscription.unsubscribe();
  }

  test(advert) {
    this.router.navigate(['/adverts/' + advert.id]);
  }
}
