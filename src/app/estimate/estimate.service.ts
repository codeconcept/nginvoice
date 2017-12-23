import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EstimateService {
  // url = 'http://localhost:3001';
  url = 'http://localhost:8080/api';
  urlPrivate = 'http://localhost:8080/api/private/estimates';

  constructor(private http: HttpClient) { }

  getEstimates() {
    return this.http.get(`${this.url}/estimates`);
  }

  getEstimateById(id) {
    return this.http.get(`${this.url}/estimates/${id}`);
  }

  getEstimatesPrivate() {
    console.log('token ',localStorage.getItem('token'));
    return this.http
      .get(this.urlPrivate, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      })
      .pipe(
        catchError(this.handleError)
      ); 
  }

  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }


}
