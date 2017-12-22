import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { EstimateService } from '../estimate.service'

@Injectable()
export class EstimateDetailsResolve implements Resolve<any> {
    constructor(private estimateService: EstimateService) {}

    resolve(route: ActivatedRouteSnapshot) {
        console.log('resolve with id ', route.params.id);
        // we simply return an observable
        return this.estimateService.getEstimateById(route.params.id);
    }
}