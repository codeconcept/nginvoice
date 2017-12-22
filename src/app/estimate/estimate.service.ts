import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EstimateService {
  url = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getEstimate() {
    return this.http.get(`${this.url}/estimates`);
  }

  getEstimateById(id) {
    
  }

}
