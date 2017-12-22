import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { EstimateService } from '../estimate.service';

@Component({
  selector: 'app-estimate-details',
  templateUrl: './estimate-details.component.html',
  styleUrls: ['./estimate-details.component.css']
})
export class EstimateDetailsComponent implements OnInit {
  estimate;

  constructor(private estimateService: EstimateService, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    const paramMap$ = this.activatedRoute.paramMap;

    paramMap$
      .map(paramMap => paramMap.get('id'))
      .do(data => console.log('before switchMap', data))
      .switchMap(id => this.estimateService.getEstimateById(id))
      .do(data => console.log('after switchMap', data))
      .subscribe(estimate => {
        this.estimate = estimate;
      })
  }


}
