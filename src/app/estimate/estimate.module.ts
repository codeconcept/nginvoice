import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EstimateListComponent } from './estimate-list/estimate-list.component';
import { EstimateDetailsComponent } from './estimate-details/estimate-details.component';
import { EstimateService } from './estimate.service';
import { EstimateDetailsResolve } from './estimate-details/estimate-details.resolve';
import { PrivateEstimatesComponentComponent } from './private-estimates-component/private-estimates-component.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [EstimateListComponent, EstimateDetailsComponent, PrivateEstimatesComponentComponent],
  providers: [EstimateService, EstimateDetailsResolve]
})
export class EstimateModule { }
