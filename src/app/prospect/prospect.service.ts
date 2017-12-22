import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProspectService {
    url = 'http://localhost:3001';

    constructor(private http: HttpClient) {}

    getEstimates() {
        return this.http.get(`${this.url}/estimates`)
    }
}