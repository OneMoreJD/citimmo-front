export interface Advert {
  id: number;
  title: string;
  description: string;
  price: number;
  transactionType: string;
  estateType: string;
  nbRooms: number;
  surfaceInt: number;
  surfaceExt: number;
  yearConstruction: number;
  conditionType: string;
  nbCarGarage: number;
  listPictures: Array<string>;
}
