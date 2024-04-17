import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { error } from 'console';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{
  
  employee : Employee = new Employee();

  id : number | undefined;

  constructor(private employeeService : EmployeeService, private activatedRoute : ActivatedRoute, private router : Router){

  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id)
    .subscribe(
      (data : any) => {
        this.employee = data as Employee;
      },
      (error) => { 
        console.error(error);
    });
  }

  submitForm(form : any){
    this.employeeService.updateEmployee(this.id, this.employee)
    .subscribe({
      next: (v) => this.goToEmployeeList(),
      error: (e) => console.error(e)
    });
  }

  private goToEmployeeList(){
    this.router.navigate(['/employees']);
  }


}
