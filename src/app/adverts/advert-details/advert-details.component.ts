import {Component, OnInit} from '@angular/core';
import {Advert} from '../advert';
import {Router} from '@angular/router';
import {AdvertDetailsService} from './advert-details.service';
import {Observable, pipe, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthenticateService} from '../../auth/authenticate.service';

@Component({
  selector: 'app-advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.css']
})

export class AdvertDetailsComponent implements OnInit {

  public advertDetails: Advert;
  public error: string | null;
  public profile: string;
  //   listPictures: [ 'assets/images/adverts/demo/advert_01.jpg', 'assets/images/adverts/demo/epiaisgroland.jpg', 'assets/images/adverts/demo/Groland_Cornillard-sur-Flanche.jpg',
  //     'assets/images/adverts/demo/Epiais-les-Louvres_95_ferme_du_Manoir_rue_du_Manoir_2.jpg', 'assets/images/adverts/demo/1280px-Flag_of_Groland.png',
  //     'assets/images/adverts/demo/demo.png', 'assets/images/adverts/demo/Groland_la_fete.gif']

  constructor(private router: Router, private advertService: AdvertDetailsService, private authService: AuthenticateService) { }

  ngOnInit(): void {
    this.getAdvertDetails(this.router.url);
    this.authService.logger$.subscribe(logger => {
      if (logger) {
        this.profile = this.authService.getProfile();
      }
    });
  }

  getAdvertDetails(href: string) {
    return this.advertService.getAdvert(href).subscribe(
      (data) => { this.advertDetails = data; console.log(data); },
      (err) => {
           this.error = 'Http Status : ' + err.status + ' - ' + err.error;
           console.log(err);
         }
    );
  }

  modifyAdvert(id: number): void {
    this.router.navigate(['adverts/update/' + id]);
  }

}
