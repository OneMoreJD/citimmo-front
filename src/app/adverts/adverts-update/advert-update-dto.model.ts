import {Picture} from '../picture';

export interface AdvertUpdateDetails {
  title: string;
  description: string;
  price: number;
  rooms: number;
  bedrooms: number;
  indoorSurface: number;
  outdoorSurface: number;
  constructionDate: Date;
  parkingQuantity: number;
  condition: string;
  transactionType: string;
  estateType: string;
  heatingType: string;
  address: AdvertAddress;
  pictures: Picture[];
}

export interface AdvertUpdateResult {
  data: string;
  message: string;
  status: number;
}

export interface AdvertAddress {
  atNumber: string;
  street: string;
  zipcode: string;
  city: string;
}
