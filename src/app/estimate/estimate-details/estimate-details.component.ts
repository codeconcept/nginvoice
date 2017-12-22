import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

import { EstimateService } from '../estimate.service';

@Component({
  selector: 'app-estimate-details',
  templateUrl: './estimate-details.component.html',
  styleUrls: ['./estimate-details.component.css']
})
export class EstimateDetailsComponent implements OnInit {
  estimate$;

  constructor(private estimateService: EstimateService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.estimate$ = this.activatedRoute.data.map(data => data.estimate);
  }

}
