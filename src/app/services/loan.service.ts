import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoanResponse } from '../model/loan-response';


@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private apiUrl = 'http://localhost:9097/consumerloans/loan/applications';

  constructor(private http: HttpClient) {}

  submitApplication(data: any): Observable<LoanResponse> {
    return this.http.post<LoanResponse>(this.apiUrl, data);
  }
}