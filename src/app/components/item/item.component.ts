import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/item.model';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item!: Item;

  public counter: number = 0;

  constructor(
    private cartService: CartService
  ){}

  public ngOnInit(): void {
  }

  public changeCounterValue(flag: boolean): void {
    if (flag) {
      this.counter++;
    } else if (this.counter !== 0) {
      this.counter--;
    }
  }

  public addToCart(): void {
    if (this.counter) {
      this.item.count = this.counter;
      this.cartService.addToCart(this.item);
      this.counter = 0;
    }
  }

}
