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
  companyNumber: number;
  Data = [];
  data: object;
  companyName = 'Codepen Times';

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.companyNumber = +params['ref'];
      }
    );
    this.setCompanyName();
    this.display();
  }

  display() {
    if (this.companyNumber) {
      this.Data = this.appService.displayCompanyNews(this.companyNumber);
    } else {
      this.Data = this.appService.Data;
    }
    this.data = this.Data[this.id];
     return this.data;
  }

  goBack() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  setCompanyName() {
    switch (this.companyNumber) {
      case 1: this.companyName = 'CNBC'; break;
      case 2: this.companyName = 'CNET'; break;
      case 3: this.companyName = 'MyFox8';
    }
  }

}
