import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  @Input() value: number = 0;
  @Output() changeCounterValue: EventEmitter<boolean> = new EventEmitter<boolean>();

  public changeValue(flag: boolean): void {
    this.changeCounterValue.emit(flag);
  }

}
