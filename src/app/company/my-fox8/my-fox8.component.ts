import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../api.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-my-fox8',
  templateUrl: './my-fox8.component.html',
  styleUrls: ['./my-fox8.component.css']
})
export class MyFox8Component implements OnInit, OnDestroy {

  startIndex: number;
  endIndex: number;

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.appService.currPage = 1;
    this.appService.totalPages = Math.ceil(this.appService.displayCompanyNews('Reuters').length / this.appService.itemsPerPage);
  }

  displayNews() {
    this.startIndex = (this.appService.currPage - 1) * this.appService.itemsPerPage ;
    this.endIndex = this.startIndex + this.appService.itemsPerPage;
    return this.appService.displayCompanyNews('Reuters').slice(this.startIndex, this.endIndex);
  }

  showComplete(id: number) {
    this.router.navigate([id, {ref: 'Reuters'}], {relativeTo: this.route});
  }

  reloadTemplate() {
    if (this.appService.displayCompanyNews('Reuters').length === 0) {this.appService.showFooter = false; }
    return this.appService.displayCompanyNews('Reuters').length;
  }

  ngOnDestroy() {
    this.appService.showFooter = true;
  }

}
