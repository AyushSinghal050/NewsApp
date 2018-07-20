import { Component, OnInit } from '@angular/core';
import { AppService } from '../../api.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-cnet',
  templateUrl: './cnet.component.html',
  styleUrls: ['./cnet.component.css']
})
export class CnetComponent implements OnInit {


  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  displayNews() {
    return this.appService.displayCompanyNews(2);
  }

  showComplete(id: number) {
    this.router.navigate([id, {ref: 2}], {relativeTo: this.route});
  }


}
