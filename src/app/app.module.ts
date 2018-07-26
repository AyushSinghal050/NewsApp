import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { CnbcComponent } from './company/cnbc/cnbc.component';
import { CnetComponent } from './company/cnet/cnet.component';
import { MyFox8Component } from './company/my-fox8/my-fox8.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '../../node_modules/@angular/http';
import { CompleteNewsComponent } from './complete-news/complete-news.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CnbcComponent,
    CnetComponent,
    MyFox8Component,
    HeaderComponent,
    HomeComponent,
    CompleteNewsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
