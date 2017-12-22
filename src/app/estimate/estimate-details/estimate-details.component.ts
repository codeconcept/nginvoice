import { Component, OnInit } from '@angular/core';
import { EstimateService } from '../estimate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estimate-details',
  templateUrl: './estimate-details.component.html',
  styleUrls: ['./estimate-details.component.css']
})
export class EstimateDetailsComponent implements OnInit {
  estimate;

  constructor(private estimateService : EstimateService, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    const id = this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id);
      this.estimateService.getEstimateById(id).subscribe(estimate => {
        this.estimate = estimate;
      });
    })
  }


}
