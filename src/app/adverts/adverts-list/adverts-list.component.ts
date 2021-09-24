import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adverts-list',
  templateUrl: './adverts-list.component.html',
  styleUrls: ['./adverts-list.component.css']
})
export class AdvertsListComponent implements OnInit {

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      const routeState = this.router.getCurrentNavigation().extras.state;
      if (routeState) {
        const data = routeState.adverts ? routeState.adverts : '';
        console.log(data);
      }
    }
  }

  ngOnInit(): void {

  }

}
