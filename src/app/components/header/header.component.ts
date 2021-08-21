import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fd2-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class Fd2HeaderComponent {

  public title: string = 'Posts Application';

  constructor(
    private router: Router 
  ) {}

  public goToSignIn(): void {    
    this.router.navigate(['sign-in']);
  }

}
