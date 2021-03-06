import { Component, OnInit } from '@angular/core';
import { EstimateService } from '../estimate.service';

@Component({
  selector: 'app-estimate-list',
  templateUrl: './estimate-list.component.html',
  styleUrls: ['./estimate-list.component.css']
})
export class EstimateListComponent implements OnInit {
  estimates;
  title;
  isLoading = false;

  constructor(private estimateService : EstimateService) { }

  ngOnInit() {
    this.isLoading = true;
    this.estimateService.getEstimates().subscribe(
      data => {
        console.log(data);
        this.estimates = data;
        const nbOfEstimates = (data as any).length;
        this.title = `${nbOfEstimates} devis`;
        this.isLoading = false;
      },
      error => {
        console.error(error)
      }
    )
  }

}
