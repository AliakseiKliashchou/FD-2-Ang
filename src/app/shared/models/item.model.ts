export interface Item {
  id: string;
  name: string;
  sizes: string[];
  colors: string[];
  price: number | string;
  country: string;
  isWarehouse: boolean;
  count: number;
  discount?: number | string;
}
