import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { NgFor } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  
  employees: Employee[] | undefined;
  
  constructor(private employeeService: EmployeeService, private router: Router){

  }

  ngOnInit(): void {
    this.getEmployees(); // private method call
  }

  private getEmployees(){
    this.employeeService.getEmployeeList()
    .subscribe(
      data => {
        this.employees = data;
      }
    );
  }

  // update event handler method. on button click route to update employee componenet
  updateEmployee(id : number | undefined){
    this.router.navigate(['update-employee', id]);
  }

  // delete employee event handler
  deleteEmployee(id : number | undefined){
    this.employeeService.deleteEmployee(id)
    .subscribe({
      next: (v) => {
        console.log(v);
        this.getEmployees();
      },
      error: (e) => console.error(e)
    });
  }

  // employee details event handler. on button click route to employee details componenet
  employeeDetails(id: number | undefined){
    this.router.navigate(['employee-details', id]);
  }

}
