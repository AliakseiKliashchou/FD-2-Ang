export interface Item {
  id: string;
  name: string;
  sizes: string[];
  colors: string[];
  price: number | string;
  country: string;
  isWarehouse: boolean;
  discount?: number | string;
}
