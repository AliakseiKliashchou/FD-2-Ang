import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item!: Item;

  public counter: number = 0;

  public ngOnInit(): void {
  }

  public changeCounterValue(flag: boolean): void {
    if (flag) {
      this.counter++;
    } else if (this.counter !== 0) {
      this.counter--;
    }
  }

}
