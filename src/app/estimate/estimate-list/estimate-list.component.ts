import { Component, OnInit } from '@angular/core';
import { EstimateService } from '../estimate.service';

@Component({
  selector: 'app-estimate-list',
  templateUrl: './estimate-list.component.html',
  styleUrls: ['./estimate-list.component.css']
})
export class EstimateListComponent implements OnInit {
  estimates;

  constructor(private estimateService : EstimateService) { }

  ngOnInit() {
    this.estimateService.getEstimate().subscribe(
      data => {
        console.log(data);
        this.estimates = data;
      },
      error => {
        console.error(error)
      }
    )
  }

}
