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
    address:AdvertAddress;
}

export interface GetFilterResponse {
    data: Array<string>;
    message: string;
    status: number;
}

export interface AdvertAddress {
    atNumber:string;
    street:string;
    zipcode:string;
    city:string;   
}

export interface ZipOrCityQueryResult {
    nhits: number;
    parameters:ZipOrCityQueryParameters;
    records?:ZipOrCityQueryRecord[];
}

export interface ZipOrCityQueryParameters {
    dataset:string;
    timezone:string;
    q:string;
    rows:number;
    start:number;
    format:string;
}

export interface ZipOrCityQueryRecord {
    datasetid:string;
    recordid:string;
    fields:ZipOrCityQueryRecordFields;
    geometry:ZipOrCityQueryRecordGeometry;
    record_timestamp:string;
}

export interface ZipOrCityQueryRecordFields {
    code_commune_insee: string;
    nom_de_la_commune: string;
    code_postal:string;
    coordonnees_gps:number[];
    libelle_d_acheminement:string;
}

export interface ZipOrCityQueryRecordGeometry {
    type: string;
    coordinates:number[];
    record_timestamp: string;
}

export interface AddressQueryResult {
    type?:string;
    version?:string;
    features?:AddressQueryFeature[];
    attribution?:string;
    licence?:string;
    query:string;
    limit?:string;
}

export interface AddressQueryFeature {
    type?:string;
    geometry?:AddressQueryFeatureGeometry;
    properties?:AddressQueryFeatureProperties[];
}

export interface AddressQueryFeatureGeometry {
    type?:string;
    coordinates?:number[];
}

export interface AddressQueryFeatureProperties {
    label:string;
    score?:number;
    housenumber?:string;
    id?:string;
    type?:string;
    name:string;
    postcode?:string;
    citycode?:string;
    x?:string;
    y?:string;
    city?:string;
    context?:string;
    importance?:number;
    street?:string;
}
