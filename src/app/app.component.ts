import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AppService } from './api.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  constructor(private http: Http, private appService: AppService) {}

  ngOnInit() {
    this.appService.getNews();
  }

  // getNews() {
  //   this.appService.getData()
  //   .subscribe(
  //     (response: Response) => {
  //         const data = response.json();
  //         this.Data = data;
  //     },
  //     (error) => console.log(error)
  //   );
  // }


}
