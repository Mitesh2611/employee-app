import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {

  id: number | undefined;
  employee: Employee = new Employee();

  constructor(private employeeService : EmployeeService, private activatedRoute : ActivatedRoute){

  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id)
    .subscribe(
      (data : any) => {
        this.employee = data as Employee;
      },
      (error) => console.log(error) 
    );
  }

}
