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
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  displayCompanyNews(companyNumber: number) {
    return this.Data.filter(x => x.userId === companyNumber);
  }

}
