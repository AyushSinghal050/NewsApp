import { Component, OnInit } from '@angular/core';
import { AppService } from '../../api.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-cnbc',
  templateUrl: './cnbc.component.html',
  styleUrls: ['./cnbc.component.css']
})
export class CnbcComponent implements OnInit {


  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  displayNews() {
    return this.appService.displayCompanyNews('CNBC');
  }

  showComplete(id: number) {
    this.router.navigate([id, {ref: 'CNBC'}], {relativeTo: this.route});
  }


}
