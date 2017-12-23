import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, CanActivate } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { EstimateModule } from './estimate/estimate.module';
// import { ProspectModule } from './prospect/prospect.module';
// import { ProspectListComponent } from './prospect/prospect-list/prospect-list.component';
import { EstimateListComponent } from './estimate/estimate-list/estimate-list.component';
import { EstimateDetailsComponent } from './estimate/estimate-details/estimate-details.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EstimateDetailsResolve } from './estimate/estimate-details/estimate-details.resolve';
import { AuthGuard } from './auth/auth.guard';
import { PrivateEstimatesComponentComponent } from './estimate/private-estimates-component/private-estimates-component.component';
import { CallbackComponent } from './callback.component';
import { AuthService } from './auth/auth.service';

const ROUTES = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'estimates',
    component: EstimateListComponent
  },
  {
    path: 'estimate-details/:id',
    component: EstimateDetailsComponent,
    outlet: 'details',
    resolve: { estimate: EstimateDetailsResolve }
  },
  {
    path: 'special',
    component: PrivateEstimatesComponentComponent,
    // Add this to guard this route
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    CallbackComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES, { enableTracing: false }),
    BrowserModule,
    // ProspectModule,
    EstimateModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
