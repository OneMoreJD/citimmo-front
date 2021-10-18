export interface Criteria {
  transactionType: string;
  estateType: string;
  locations: string[];
  rooms: string[];
  bedrooms: string[];
  intSurfaceMin: number;
  intSurfaceMax: number;
  extSurfaceMax: number;
  budgetMin: number;
  budgetMax: number;
}
