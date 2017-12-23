import { Component, OnInit } from '@angular/core';
import { EstimateService } from '../estimate.service';

@Component({
  selector: 'app-private-estimates-component',
  templateUrl: './private-estimates-component.component.html',
  styleUrls: ['./private-estimates-component.component.css']
})
export class PrivateEstimatesComponentComponent implements OnInit {
  estimates;

  constructor(private estimateService: EstimateService) { }

  ngOnInit() {
     this.estimateService.getEstimatesPrivate().subscribe(data => {
       console.log(data);
       this.estimates = data;
      });
  }

}
