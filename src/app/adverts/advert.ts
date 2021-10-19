export interface Advert {
  id: number;
  title: string;
  description: string;
  price: number;
  rooms: number;
  bedrooms: number;
  surfaceIn: number;
  surfaceOut: number;
  publicationDate: Date;
  contructionDate: Date;
  nbCarInGarage: number;
  conditionType: {
    name: string,
    frLabel: string
  };
  status: string;
  transactionType:{
    name: string,
    frLabel: string
  };
  estateType: {
    name: string,
    frLabel: string
  };
  heatingType: {
    name: string,
    frLabel: string
  };
  listPictures: Array<string>;
}
