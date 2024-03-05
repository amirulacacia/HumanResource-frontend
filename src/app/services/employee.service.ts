import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  serverHost = "http://localhost:8080/employee";

  constructor(private http: HttpClient) { }

  loginByEmailAndPassword(input:any): Observable<any>{
    return this.http.post(this.serverHost + "/login", input);
  }
}
