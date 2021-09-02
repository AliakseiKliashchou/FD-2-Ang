import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item!: Item;

  public ngOnInit(): void {
  }

}
