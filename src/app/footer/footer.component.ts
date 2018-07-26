import { Component, OnInit } from '@angular/core';
import { AppService } from '../api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currPage: number;
  totalPages: number;
  Pages = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.totalPages = this.appService.totalPages;
    this.currPage = this.appService.currPage;
    this.getTotalPages();
  }

  incPage() {
    if (this.appService.currPage !== this.appService.totalPages) {
      this.currPage += 1;
      this.appService.currPage += 1;
    }
  }

  decPage() {
    if (this.appService.currPage !== 1) {
      this.currPage -= 1;
      this.appService.currPage -= 1;
    }
  }

  setPage(page: number) {
    this.currPage = page;
    this.appService.currPage = page;
  }

  showFooter() {
    this.currPage = this.appService.currPage;
    return this.appService.showFooter;
  }

  getTotalPages() {
    this.totalPages = this.appService.totalPages;
    this.currPage = this.appService.currPage;
    this.Pages = [];
    for (let index = 0; index < this.totalPages; index++) {
      this.Pages[index] = index + 1;
    }

    if (this.totalPages <= 5) {
      return this.Pages;
    } else if (this.currPage <= 3) {
      return this.Pages.slice(0, 5);
    }
    return this.Pages.slice(this.currPage - 3, this.currPage + 2);
  }
}
