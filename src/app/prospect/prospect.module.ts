import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectListComponent } from './prospect-list/prospect-list.component';
import { ProspectDetailsComponent } from './prospect-details/prospect-details.component';

import { ProspectService } from './prospect.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProspectListComponent, ProspectDetailsComponent],
  providers: [ ProspectService ]
})
export class ProspectModule { }
