import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Item } from 'src/app/shared/models/item.model';
import { SharedDataService } from 'src/app/shared/services/shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items: Item[] = [];
  public cartItemsCount = new BehaviorSubject(0);
  public catItems = new BehaviorSubject(this.sharedDataService.cartItems);

  constructor(
    private sharedDataService: SharedDataService
  ){}

  public addToCart(item: Item): void {
    const idx = this.items.findIndex( elem => elem.id === item.id);

    idx !== -1 ? (this.items[idx].count += item.count) : this.items.push(item);
    this.cartItemsCount.next(this.items.length);
    this.sharedDataService.cartItems = this.items;
  }

  public getCartItems(): Item[] {
    return this.items;
  }

}
