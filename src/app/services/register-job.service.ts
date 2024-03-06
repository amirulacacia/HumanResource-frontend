import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterJobService {
  
  serverHost = "http://localhost:8080/jobPosting";

  constructor(private http: HttpClient) { }
  
  registerJob(input: any): Observable<any> {
    return this.http.post(this.serverHost + "/register", input);
  }
}
