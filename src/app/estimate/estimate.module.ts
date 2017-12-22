import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EstimateListComponent } from './estimate-list/estimate-list.component';
import { EstimateDetailsComponent } from './estimate-details/estimate-details.component';
import { EstimateService } from './estimate.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [EstimateListComponent, EstimateDetailsComponent],
  providers: [EstimateService]
})
export class EstimateModule { }
