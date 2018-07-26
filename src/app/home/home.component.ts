import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AppService } from '../api.service';
import { Http, Response } from '../../../node_modules/@angular/http';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  startIndex: number;
  endIndex: number;
  subscription: Subscription;
  constructor(private http: Http, private appService: AppService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getNews();
    this.appService.currPage = 1;
  }

  getNews() {
    console.log('powered by NewsAPI.org');
    this.subscription =  this.appService.getData()
    .subscribe(
      (response: Response) => {
          const data = response.json();
          this.appService.Data = data.articles;
          this.appService.totalPages = Math.ceil(data.totalResults / this.appService.itemsPerPage);
      },
      (error) => console.log(error)
  );
  }

  displayHome() {
    this.startIndex = (this.appService.currPage - 1) * this.appService.itemsPerPage ;
    this.endIndex = this.startIndex + this.appService.itemsPerPage;
    return this.appService.Data.slice(this.startIndex, this.endIndex);
  }
  showComplete(id: number) {
    this.router.navigate([id]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
