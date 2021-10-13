export interface AdvertCreationDetails {
    title: string;
    description: string;
    price: number;
    rooms: number;
    bedrooms: number;
    indoorSurface: number;
    outdoroSurface: number;
    constructionDate: Date;
    parkingQuantity: number;
    condition: string;
    status: string;
    transactionType: string;
    estateType: string;
    heatingType: string;
    location: string;
}

export interface EstateType {
    estateType: string;
}