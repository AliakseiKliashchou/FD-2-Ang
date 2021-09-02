import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: MainComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}
