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
    transactionType: string;
    estateType: string;
    heatingType: string;
}

export interface GetFilterResponse {
    data: Array<string>;
    message: string;
    status: number;
}