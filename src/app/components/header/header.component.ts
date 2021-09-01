import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app-service.service';

@Component({
  selector: 'fd2-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class Fd2HeaderComponent implements OnInit {

  public title: string = 'Posts Application';

  constructor(
    private router: Router,
    private appService: AppService
  ) {}

  public ngOnInit(): void {
    // this.appService.myObservable
    //   .subscribe( () => console.log('HEADER!!!'));
    // this.appService.mySubject.subscribe( value => console.log('FROM HEADER: ', value));
  }

  public goToSignIn(): void {
    this.router.navigate(['sign-in']);
  }

}
