import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '../../../node_modules/@angular/router';
import { AppService } from '../api.service';

@Component({
  selector: 'app-complete-news',
  templateUrl: './complete-news.component.html',
  styleUrls: ['./complete-news.component.css']
})
export class CompleteNewsComponent implements OnInit {

  id: number;
  Data = [];
  data: object;
  companyName: string;

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.companyName = params['ref'];
      }
    );
    this.display();
  }

  display() {
    if (this.companyName) {
      this.Data = this.appService.displayCompanyNews(this.companyName);
    } else {
      this.Data = this.appService.Data;
    }
    this.data = this.Data[this.id];
     return this.data;
  }

  goBack() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
