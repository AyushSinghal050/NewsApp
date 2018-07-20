import { Component, OnInit } from '@angular/core';
import { AppService } from '../../api.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-my-fox8',
  templateUrl: './my-fox8.component.html',
  styleUrls: ['./my-fox8.component.css']
})
export class MyFox8Component implements OnInit {


  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  displayNews() {
    return this.appService.displayCompanyNews(3);
  }

  showComplete(id: number) {
    this.router.navigate([id, {ref: 3}], {relativeTo: this.route});
  }

}
