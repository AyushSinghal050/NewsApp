import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  Data = [];

  constructor(private http: Http) { }
  getData() {
    console.log('Data Fetched');
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9557365da6384366b702fba666bf1149');
  }

  getNews() {
    this.getData()
    .subscribe(
      (response: Response) => {
          const data = response.json();
          this.Data = data;
      },
      (error) => console.log(error)
    );
  }

}