import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Applicant } from '../model/Applicant';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  serverHost = "http://localhost:8080/applicant";

  constructor(private http: HttpClient) { }

  loginByEmailAndPassword(input: any): Observable<any> {
    return this.http.post(this.serverHost + "/login", input);
  }

  registerApplicant(input: any): Observable<any> {
    return this.http.post(this.serverHost + "/register", input);
  }
}
