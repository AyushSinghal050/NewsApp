import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../api.service';
import { Http, Response } from '../../../node_modules/@angular/http';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: Http, private appService: AppService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    console.log('powered by NewsAPI.org');
    this.appService.getData()
    .subscribe(
      (response: Response) => {
          const data = response.json();
          this.appService.Data = data.articles;
      },
      (error) => console.log(error)
  );
  }

  displayHome() {
    return this.appService.Data;
  }
  showComplete(id: number) {
    this.router.navigate([id]);
  }


}
