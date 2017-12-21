import { Component, OnInit } from '@angular/core';

import { ProspectService } from '../prospect.service';

@Component({
  selector: 'app-prospect-list',
  templateUrl: './prospect-list.component.html',
  styleUrls: ['./prospect-list.component.css']
})
export class ProspectListComponent implements OnInit {

  constructor(private prospectService: ProspectService) { }

  ngOnInit() {
    this.prospectService.getProspects().subscribe(
      prospects => {
        console.log(prospects)
      },
      error => {
        console.error(error)
      }
    )
  }

}
