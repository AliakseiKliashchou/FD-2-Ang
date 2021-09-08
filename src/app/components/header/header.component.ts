import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app-service.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'fd2-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class Fd2HeaderComponent implements OnInit {

  public title: string = 'Posts Application';
  public itemsCount: number = 0;

  constructor(
    private router: Router,
    private cartService: CartService
  ) {}

  public ngOnInit(): void {
    this.getCartItemsCount();
  }

  private getCartItemsCount(): void {
    this.cartService.cartItemsCount
      .subscribe( value => this.itemsCount = value);
  }

  public goToSignIn(): void {
    this.router.navigate(['sign-in']);
  }

}
