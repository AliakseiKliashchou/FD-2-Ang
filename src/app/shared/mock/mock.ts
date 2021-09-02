import { Item } from '../models/item.model';

export const ITEMS: Item[] = [
  {
    id: 'f1w63g3ss615g6s3221gr3',
    name: 'Helmet HGJ-55-4',
    sizes: ['S', 'M'],
    colors: ['red', 'black', 'white'],
    price: 300,
    country: 'Germany',
    isWarehouse: true
  },
  {
    id: 'afbv5651df351sf51s3d5',
    name: 'Helmet FV55v-6',
    sizes: ['S'],
    colors: ['green', 'yellow'],
    price: 350,
    country: 'China',
    isWarehouse: false,
    discount: 20
  },
  {
    id: 'v5sdd55v5sdv155sdv51',
    name: 'Шлём WW-875',
    sizes: ['S','M','L','XL'],
    colors: ['red', 'green'],
    price: 700,
    country: 'Belarus',
    isWarehouse: false
  },
  {
    id: 'av35dv1513svd35vsd351',
    name: 'Helmet TT-556-f',
    sizes: ['S', 'M'],
    colors: ['red', 'black', 'white'],
    price: 300,
    country: 'Germany',
    isWarehouse: true
  },
];
