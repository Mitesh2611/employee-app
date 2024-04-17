import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient : HttpClient) {}
  
  // get list of all employees
  getEmployeeList(): Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  // add/create a new employee
  createEmployee(employee : Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  // get employee by id
  getEmployeeById(id: number | undefined): Observable<Object>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  // update employee
  updateEmployee(id: number | undefined, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  //delete employee
  deleteEmployee(id: number | undefined): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}