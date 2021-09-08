import { Injectable } from '@angular/core';
import { CACHE } from '../constants/cache';
import { Item } from '../models/item.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor(
    private localStorageService: LocalStorageService
  ){}

  get cartItems(): Item[] {
    return this.localStorageService.getCacheData(CACHE.CART_ITEMS);
  }

  set cartItems(items: Item[]) {
    this.localStorageService.setCacheData(CACHE.CART_ITEMS, items);
  }

}
