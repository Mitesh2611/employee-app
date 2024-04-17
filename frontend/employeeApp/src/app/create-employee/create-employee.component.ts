import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { error } from 'console';
import { Employee } from '../employee';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})

export class CreateEmployeeComponent {

  newEmployee : Employee = new Employee();

  constructor(private employeeService : EmployeeService, private router : Router){

  }

  // private saveNewEmployee(){
  //   this.employeeService.createEmployee(this.newEmployee)
  //   .subscribe(
  //     data => {
  //       console.log(data);
  //       this.goToEmployeeList();
  //     },
  //     error => console.log(error)
  //   );
  // }

  private saveNewEmployee(){
    this.employeeService.createEmployee(this.newEmployee)
    .subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e)
    })
    this.goToEmployeeList();
  }

  private goToEmployeeList(){
    this.router.navigate(['/employees'])
  }


  submitForm(form : any) {
    if(form.valid){
      // log to console
      console.log("New Employee : ", this.newEmployee);
      
      // save to database
      this.saveNewEmployee();
      
      // You can also reset the form after submission
      form.resetForm();
 
    }   
  }

}
