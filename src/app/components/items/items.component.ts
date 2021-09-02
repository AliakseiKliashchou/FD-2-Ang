import { Component } from '@angular/core';
import { ITEMS } from 'src/app/shared/mock/mock';
import { Item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {

  public items: Item[] = ITEMS; //Mock data from API

  public itemClick(idx: Item): void {
    // console.log('Check', idx);

  }

}
