import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // public test: string = 'Test';
  // public myObservable = new Observable();
  // public myObservable = new Observable( observer => {
  //   let x = 0;

  //   setInterval(() => {
  //     x++;
  //     observer.next(x);
  //   }, 1000)
  // });

  public mySubject = new BehaviorSubject<number>(800);
}
