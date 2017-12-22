import { Component, OnInit } from '@angular/core';

import { ProspectService } from '../prospect.service';

@Component({
  selector: 'app-prospect-list',
  templateUrl: './prospect-list.component.html',
  styleUrls: ['./prospect-list.component.css']
})
export class ProspectListComponent implements OnInit {
  estimates;

  constructor(private prospectService: ProspectService) { }

  ngOnInit() {
    this.prospectService.getEstimates().subscribe(
      data => {
        console.log(data)
        this.estimates = data;
      },
      error => {
        console.error(error)
      }
    )
  }

}
