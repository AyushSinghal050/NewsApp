import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CnbcComponent } from './company/cnbc/cnbc.component';
import { CnetComponent } from './company/cnet/cnet.component';
import { MyFox8Component } from './company/my-fox8/my-fox8.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home',  component: HomeComponent},
  {path: 'cnbc', component: CnbcComponent },
  {path: 'cnet', component: CnetComponent},
  {path: 'MyFox8', component: MyFox8Component}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
  })

export class AppRoutingModule { }
