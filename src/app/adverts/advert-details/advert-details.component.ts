import {Component, OnInit} from '@angular/core';
import {Advert} from '../advert';

@Component({
  selector: 'app-advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.css']
})

export class AdvertDetailsComponent implements OnInit {
  // @ts-ignore
  advertDetails: Advert = {
    id: 10,
    title: 'Maison de 150 m2 à Bignolle les Grolands',
    description: 'Cette magnifique maison Gronlandaise de 1930 est situé en plein centre de Bignolle avec un terrain de 800 m2 et une surface habitable de 145 m2...................\n' +
      'Cette magnifique maison Gronlandaise de 1930 est situé en plein centre de Bignolle avec un terrain de 800 m2 et une surface habitable de 145 m2...................\n' +
      'Cette magnifique maison Gronlandaise de 1930 est situé en plein centre de Bignolle avec un terrain de 800 m2 et une surface habitable de 145 m2................... ' +
      'Cette magnifique maison Gronlandaise de 1930 est situé en plein centre de Bignolle avec un terrain de 800 m2 et une surface habitable de 145 m2................... ' +
      'Cette magnifique maison Gronlandaise de 1930 est situé en plein centre de Bignolle avec un terrain de 800 m2 et une surface habitable de 145 m2................... ' +
      'Cette magnifique maison Gronlandaise de 1930 est situé en plein centre de Bignolle avec un terrain de 800 m2 et une surface habitable de 145 m2................... ' +
      'Cette magnifique maison Gronlandaise de 1930 est situé en plein centre de Bignolle avec un terrain de 800 m2 et une surface habitable de 145 m2................... ' +
      'Cette magnifique maison Gronlandaise de 1930 est situé en plein centre de Bignolle avec un terrain de 800 m2 et une surface habitable de 145 m2................... ' +
      'Cette magnifique maison Gronlandaise de 1930 est situé en plein centre de Bignolle avec un terrain de 800 m2 et une surface habitable de 145 m2................... ' +
      'Cette magnifique maison Gronlandaise de 1930 est situé en plein centre de Bignolle avec un terrain de 800 m2 et une surface habitable de 145 m2...................\n' +
      'Cette magnifique maison Gronlandaise de 1930 est situé en plein centre de Bignolle avec un terrain de 800 m2 et une surface habitable de 145 m2...................\n' +
      'Cette magnifique maison Gronlandaise de 1930 est situé en plein centre de Bignolle avec un terrain de 800 m2 et une surface habitable de 145 m2................... ' +
      'Cette magnifique maison Gronlandaise de 1930 est situé en plein centre de Bignolle avec un terrain de 800 m2 et une surface habitable de 145 m2................... ' +
      'Cette magnifique maison Gronlandaise de 1930 est situé en plein centre de Bignolle avec un terrain de 800 m2 et une surface habitable de 145 m2................... ' +
      'Cette magnifique maison Gronlandaise de 1930 est situé en plein centre de Bignolle avec un terrain de 800 m2 et une surface habitable de 145 m2................... ',
    price: 155000,
    transactionType: 'Vente',
    estateType: 'Maison',
    nbRooms: 6,
    surfaceInt: 145,
    surfaceExt: 800,
    yearConstruction: 1930,
    conditionType: 'travaux à prévoir',
    nbCarGarage: 2,
    listPictures: [ 'assets/images/adverts/demo/advert_01.jpg', 'assets/images/adverts/demo/epiaisgroland.jpg', 'assets/images/adverts/demo/Groland_Cornillard-sur-Flanche.jpg',
      'assets/images/adverts/demo/Epiais-les-Louvres_95_ferme_du_Manoir_rue_du_Manoir_2.jpg', 'assets/images/adverts/demo/1280px-Flag_of_Groland.png',
      'assets/images/adverts/demo/demo.png', 'assets/images/adverts/demo/Groland_la_fete.gif']
  };

  constructor() { }

  ngOnInit(): void {
    this.getAdvertDetails();
  }

  getAdvertDetails(): Advert {
    return this.advertDetails;
  }

}
