import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { EstimateModule } from './estimate/estimate.module';
// import { ProspectModule } from './prospect/prospect.module';
// import { ProspectListComponent } from './prospect/prospect-list/prospect-list.component';
import { EstimateListComponent } from './estimate/estimate-list/estimate-list.component';
import { EstimateDetailsComponent } from './estimate/estimate-details/estimate-details.component'; //here
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const ROUTES = [
  { path: '', component: HomeComponent },
  { path: 'estimates', component: EstimateListComponent },
  { path: 'estimate-details/:id', component: EstimateDetailsComponent, outlet: 'details'},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES, { enableTracing: true }),
    BrowserModule,
    // ProspectModule,
    EstimateModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
