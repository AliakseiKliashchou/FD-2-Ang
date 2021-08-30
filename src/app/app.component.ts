import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private appService: AppService
  ){}

  public ngOnInit(): void {
    // this.appService.myObservable
    //   .subscribe(() => console.log('APP COMPONENT: '));

    // this.appService.mySubject.next('From app component');
  }

}
