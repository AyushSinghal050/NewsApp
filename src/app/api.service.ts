import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  Data = [];
  currPage = 1;
  totalPages: number;
  itemsPerPage = 6;
  showFooter = true;

  constructor(private http: Http) {}

  getData() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9557365da6384366b702fba666bf1149');
  }

  displayCompanyNews(companyName: string) {
    return this.Data.filter(x => x.source.name === companyName);
  }

}
